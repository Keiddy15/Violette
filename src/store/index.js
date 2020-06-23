import Vue from 'vue'
import Vuex from 'vuex'
import download from '../plugins/download'
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
            const pngUrl = "https://i.ibb.co/7NcssdR/violette-Logo.png";
            const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer());
            const pdfDoc = await PDFDocument.create(); //Crear objeto inicializador de PDF
            const courier = await pdfDoc.embedFont(StandardFonts.Courier); // iniciando fuent
            let page = pdfDoc.addPage(); // Añadiendo pagina al documento
            const {width, height} = page.getSize(); //Obteniendo tamaño de pagina
            const fontSize = 10; // Ajustando tamaño fuente
            const pngImage = await pdfDoc.embedPng(pngImageBytes);
            const pngDims = pngImage.scale(0.1);
            page.setWidth(612);
            page.setHeight(791);
            let text = "";
            let limit = 0;
            let suma = height - 40;
            let textPos = height + 10;
            for (let i in state.printItem) {
                if (limit === 7) {
                    page = pdfDoc.addPage();
                    page.setWidth(612);
                    page.setHeight(791);
                    limit = 0;
                    suma = height - 40;
                    textPos = height + 10;
                }

                suma = suma - 100;
                console.log(suma);

                page.drawImage(pngImage, {
                    x: 20,
                    y: suma,
                    width: pngDims.width,
                    height: pngDims.height

                });

                text = '\nNombre: ' + state.printItem[i].nombre + '\n' + 'Apellido: '
                    + state.printItem[i].apellido + '\n' + 'Cedula: '
                    + state.printItem[i].cedula + '\n'
                    + 'Telefono: ' + state.printItem[i].telefono + '\n'
                    + 'Dirección: ' + state.printItem[i].direccion + '\n'
                    + 'Barrio: ' + state.printItem[i].barrio + '\n'
                    + 'Ciudad: ' + state.printItem[i].ciudad + '\n'
                    + 'Departamento: ' + state.printItem[i].departamento + '\n'
                    + '___________________________________________________________' + '\n';

                textPos = textPos - 100;

                page.drawText(text, { //dibujar o escribir
                    x: 90,
                    y: textPos,
                    size: fontSize,
                    font: courier,
                    color: rgb(0, 0, 0),
                    lineHeight: 10
                });
                limit++;

            }
            const pdfBytes = await pdfDoc.save(); //Genera el archivo en bytes

            download(pdfBytes, 'Guias.pdf', "application/pdf")
        }
    },
    actions: {},
    modules: {}
})
