var pseudo = document.getElementById("pseudo");
var tomatePrepared = 0;
var jambonPrepared = 0;
var ananasPrepared = 0;
var pizzaPrepared = 0;
var pizzaBurned = 0;

function addIngredients(){
    if(document.getElementById("tomate").checked){
        tomatePrepared += parseInt(document.getElementById("tomate").value);
        document.getElementById("tomatePrepared").innerHTML = tomatePrepared;
    }
    else if(document.getElementById("jambon").checked){
        jambonPrepared += parseInt(document.getElementById("jambon").value);
        document.getElementById("jambonPrepared").innerHTML = jambonPrepared;
    }
    else{
        ananasPrepared += parseInt(document.getElementById("ananas").value);
        document.getElementById("ananasPrepared").innerHTML = ananasPrepared;
    }
}

function preparePizza(){
    var tomate = parseInt(document.getElementById("tomatePizza").value);
    var ananas = parseInt(document.getElementById("ananasPizza").value);
    var jambon = parseInt(document.getElementById("jambonPizza").value);

    if(ananas == 3 && jambon == 3 && tomate == 1){
        if(tomatePrepared >= tomate && ananasPrepared >= ananas && jambonPrepared >= jambon){
            tomatePrepared -= tomate;
            document.getElementById("tomatePrepared").innerHTML = tomatePrepared;

            ananasPrepared -= ananas;
            document.getElementById("ananasPrepared").innerHTML = ananasPrepared;

            jambonPrepared -= jambon;
            document.getElementById("jambonPrepared").innerHTML = jambonPrepared;

            pizzaPrepared += 1;
            document.getElementById("pizzaPrepared").innerHTML = pizzaPrepared;
        }
    }
    else{
        alert("Vous n'avez pas assez d'ingrédients!");
    }

}

function burnPizzas(){
    var pizza = parseInt(document.getElementById("pizzaToBurn").value);

    if( pizza >0 && pizza <= pizzaPrepared){
        pizzaBurned = pizza;
        pizzaPrepared -= pizzaBurned;
        document.getElementById("hawaienBurned").innerHTML = pizzaBurned;
    }
    else{
        alert("Vous n'avez pas autant de pizza prête !");
    }
}