const { faker } = require("@faker-js/faker");

// create object
function createSingleFakerUser(){
    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const newUser = {
        first_name,
        last_name,
        email: faker.internet.email(first_name, last_name),
        salted_hashed_pass: '$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC',
        store_number: Math.floor(Math.random()*20)+1,   //this should correspond to the range of generated stores. Maybe an environment variable?
        email_verified: false,
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    return newUser;
}

function createFakerUser(num=1){
    let userArray = [];
    for(let i = 0; i < num; i++){
        userArray.push(createSingleFakerUser());
    }
    return userArray;
}

module.exports = {createFakerUser};