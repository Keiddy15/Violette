import Vue from 'vue'
import Vuex from 'vuex'
import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tab: 'tab-1',
        pedidos: 0,
        dialogUserSelected: false,
        userSelected: [],
        printItem: []
    },
    mutations: {
        moveTab(state, n) {
            state.tab = 'tab-' + n;
        },
        setCountPedidos(state, n) {
            state.pedidos = n;
        },
        passingUserSelected(state, payload) {
            state.dialogUserSelected = payload.show;
            state.userSelected = payload.userSelected;
        },
        async printDocument(state, payload) {
            state.printItem = payload.printItem;
            const pdfDoc = await PDFDocument.create(); //Crear objeto inicializador de PDF
            const courier = await pdfDoc.embedFont(StandardFonts.Courier); // iniciando fuentes
            const page = pdfDoc.addPage(); // Añadiendo pagina al documento
            const {width, height} = page.getSize(); //Obteniendo tamaño de pagina
            const fontSize = 14; // Ajustando tamaño fuente
            page.drawText(state.printItem.nombre, { //dibujar o escribir
                x: 50,
                y: height - 4 * fontSize,
                size: fontSize,
                font: courier,
                color: rgb(0, 0.53, 0.71),
            });
            const pdfBytes = await pdfDoc.save(); //Genera el archivo en bytes
            const blob = new Blob([pdfBytes], {type: 'application/pdf'}); // crea un blob de tipo PDF
            const e = document.createEvent('MouseEvents'), //inicia un objeto de tipo MouseEvents
                a = document.createElement('a'); // crea variable en el DOM
            a.download = state.printItem.nombre + '-' + state.printItem.apellido + '.pdf'; //inicializa nombre del PDF
            a.href = window.URL.createObjectURL(blob); //asigna nombre y formato a una descarga
            a.dataset.downloadurl = ['application/pdf', a.download, a.href].join(':');//genera link de descarga del archivo
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); //inicializa la ventana de descarga
            a.dispatchEvent(e); //finaliza el evento
        }
    },
    actions: {},
    modules: {}
})
