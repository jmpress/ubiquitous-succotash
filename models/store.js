const { faker } = require("@faker-js/faker");

// create object
function createSingleFakerStore(){
    const name = faker.address.street();
    const abbr = name[0]+name[name.indexOf(' ')+1];
    const state = faker.address.stateAbbr();
    const newStore = {
        name,
        abbr,
        street_address: faker.address.streetAddress(),
        city: faker.address.city(),
        state,
        zip: faker.address.zipCodeByState(state),
        phone_number: faker.phone.number(),
        fax_number: faker.phone.number(),
        store_manager: faker.name.fullName(),
        createdAt: new Date(),
        updatedAt: new Date()
    }
    return newStore;
}

function createFakerStore(num=1){
    let storeArray = [];
    for(let i = 0; i < num; i++){
        storeArray.push(createSingleFakerStore());
    }
    return storeArray;
}

module.exports = {createFakerStore};