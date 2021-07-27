

const express = require("express");
const app = express();
var faker =  require("faker")
const port = 8000;

class User{
    constructor(){
        this.id=faker.random.uuid();
        this.firstName =faker.name.firstName();
        this.lastName =faker.name.lastName();
        this.phoneNumber =faker.phone.phoneNumber() ;
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
     constructor(){
        this.id=faker.random.uuid();
        this.name =faker.company.companyName();
        this.address={
            "street":faker.address.streetName(),
            "city":faker.address.city(),
            "state":faker.address.state(),
            "zipCode":faker.address.zipCode(),
            "country":faker.address.country(),
     }}
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({user:new User() , company:new Company()});
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );