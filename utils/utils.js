const fs = require('fs');

function formatJSONString(fakeObj){
    let fakeObjString = JSON.stringify(fakeObj);
    fakeObjString = fakeObjString.replaceAll(',',',\n\t\t\t\t');
    fakeObjString = fakeObjString.replaceAll('{','{\n\t\t\t\t');
    fakeObjString = fakeObjString.replaceAll('}','\n\t\t\t}');
    //console.log(fakeObjString);
    return fakeObjString;
}

function writeObjToFile(fakeObjArray, tableName){
    let objStrings = [];
    fakeObjArray.forEach((element) => {
        const fakeObjString = formatJSONString(element);    
        objStrings.push(fakeObjString);
    });
    
    
    const writeStream = fs.createWriteStream(`./exports/test-faker-${tableName}-seed.js`);
    writeStream.write(`module.exports = {\n\tasync up (queryInterface, Sequelize) {\n\t\tawait queryInterface.bulkInsert('${tableName}', [\n\t\t\t`)
    objStrings.forEach((element) => {
        writeStream.write(element + ', ');
    });
    writeStream.write(`\n\t\t], {});\n\t},\n\tasync down (queryInterface, Sequelize) {\n\t\tawait queryInterface.bulkDelete(${tableName}, null, {});\n\t}\n};`)
    writeStream.end();
}

module.exports = {writeObjToFile};