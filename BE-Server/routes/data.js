var manageJSON = require('../tools/manageJSON.js')
let content = manageJSON.getDataJSON({dir : "./public/data/content.json"});
let dataUserAdmin = manageJSON.getDataJSON({dir : "./public/data/useradmin.json"});
let dataVisitors = manageJSON.getDataJSON({dir : "./public/data/visitors.json"});
module.exports = {content,dataUserAdmin,dataVisitors};