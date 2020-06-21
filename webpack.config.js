const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.png$/,
                loader: 'arraybuffer-loader',
            },
        ],
    },
}
