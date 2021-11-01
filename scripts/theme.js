/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-01 10:37:46
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-01 17:31:00
 */
const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const options = {
    stylesDir: path.join(__dirname, '../src/style/theme'),
    antDir: path.join(__dirname, '../node_modules/antd'),
    varFile: path.join(__dirname, '../src/style/theme/var.less'),
    mainLessFile: path.join(__dirname, '../src/style/theme/index.less'),
    themeVariables: [
        '@primary-color',
    ],
    outputFilePath: path.join(__dirname, '../public/css/color.less')
};

generateTheme(options)
    .then(less => {
        console.log('Theme generated successfully');
    })
    .catch(error => {
        console.log('Error', error);
    });
