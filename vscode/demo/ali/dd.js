const path = require('path');
module.exports = ({vscode, utils, constants, defaultConfig}) => {
    return {
        langdir: path.join(__dirname, 'src/locales'),
        default: 'zh_CN',
        lang: {
            zh_TW: '台湾'
        },
        plugins: [
            ['mds', {
                name: 'sdfs'
            }]
        ],
    }
}