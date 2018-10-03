var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var clientes = [{name: "Hermione", cpf:60765412345, rg:4569812},
                    {name: "Steven", cpf:4134132412412, rg:4123421},
                    {name: "Ash Ketchum", cpf:4134124324, rg:4341312}];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/clientes", function(req, res){
    res.render("clientes", {clientes:clientes});
});

app.get("/addCliente", function(req, res){
    res.render("addCliente");
})


app.post("/addCliente", function(req, res){
    console.log(req.body);
    var cliente = {
        name: req.body.nameCliente,
        cpf: req.body.cpfCliente,
        rg: req.body.rgCliente
    }
    clientes.push(cliente);
    res.redirect("clientes");
});

app.listen(3000, function(){
    console.log("Server listening to the port 3000");
})