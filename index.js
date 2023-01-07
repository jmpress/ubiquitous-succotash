const {writeObjToFile} = require('./utils/utils');
const {createFakerUser} = require('./models/user');
const {createFakerStore} = require('./models/store');
const {createFakerUlpdata} = require('./models/ulpdata');


writeObjToFile(createFakerStore(20), 'Stores');
writeObjToFile(createFakerUser(3000), 'Users');
writeObjToFile(createFakerUlpdata(150), 'Ulpdata');

console.log('Process Completed Successfully!')