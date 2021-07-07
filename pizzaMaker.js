var pseudo = document.getElementById("pseudo");
var tomatePrepared = 0;
var jambonPrepared = 0;
var ananasPrepared = 0;

function addIngredients(){
    if(document.getElementById("tomate").checked){
        tomatePrepared += parseInt(document.getElementById("tomate").value);
        var span = document.getElementById("tomatePrepared");
        span.innerHTML = tomatePrepared;
    }
    else if(document.getElementById("jambon").checked){
            jambonPrepared += parseInt(document.getElementById("jambon").value);
        var span = document.getElementById("jambonPrepared");
        span.innerHTML = jambonPrepared;
    }
    else{
        ananasPrepared += parseInt(document.getElementById("ananas").value);
        var span = document.getElementById("ananasPrepared");
        span.innerHTML = ananasPrepared;
    }
}

function preparePizza(){
    
}