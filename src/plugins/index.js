
const { getAge } = require('./get-age.plugin');
const { getId } = require('./get-id.plugin');

const { http } = require('./http-client.plugin')
const buildLoger = require('./logger.plugin');

module.exports = {
    getAge,
    getId,
    http,
    buildLoger,
}