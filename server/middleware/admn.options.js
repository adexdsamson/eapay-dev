const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('../middleware/admin/admin');

/** @type {AdminBro.AdminBroOptions } */
const options = {
  rootPath: '/',
  resources: [ AdminCompany ],
}


module.exports = options;