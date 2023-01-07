const { faker } = require("@faker-js/faker");

// create object
function createSingleFakerUlpdata(){
    
    const newUlpdata = {
        submitted_by: Math.floor(Math.random()*3000)+1,     //this should correspond with the number of users being created
        subsec1: true,
        subsec2: faker.datatype.boolean(),
        subsec3: faker.datatype.boolean(),
        subsec4: faker.datatype.boolean(),
        subsec5: faker.datatype.boolean(),
        subsec6: faker.datatype.boolean(),
        subsec7: faker.datatype.boolean(),
        date_of_incident: faker.date.recent(),
        store_number: Math.floor(Math.random()*20)+1,     //this should correspond with the number of stores being created
        staff_witnesses: faker.name.fullName(),
        offending_manager: faker.name.fullName(),
        incident_summary: faker.lorem.sentences(Math.floor(Math.random()*4)+1),
        createdAt: new Date(),
        updatedAt: new Date()
    }
    return newUlpdata;
}

function createFakerUlpdata(num=1){
    let ulpdataArray = [];
    for(let i = 0; i < num; i++){
        ulpdataArray.push(createSingleFakerUlpdata());
    }
    return ulpdataArray;
}

module.exports = {createFakerUlpdata};