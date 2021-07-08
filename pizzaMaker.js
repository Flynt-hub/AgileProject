addEventListener('load', setEvents, false) ;

var pseudo = "Yoda";
var score = 0;
var tomatePrepared = 0;
var jambonPrepared = 0;
var ananasPrepared = 0;
var pizzaPrepared = 0;
var pizzaBurned = 0;

function start(){
    pseudo = document.getElementById("pseudo");
    document.getElementById("Game").style.display = "block";
    document.getElementById("Start").style.display = "none";
}

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

function dispScore(){
    var restes ="";
    document.getElementById('score').style.display = 'block';
    document.getElementById('score').innerHTML = calculScore();
    document.getElementById('pizza').innerHTML= pizzaBurned;
    if (tomatePrepared > 0){
        restes = "Tomates : "+tomatePrepared;
    }
    if (ananasPrepared >0){
        restes += "<br/>Ananas :  "+ananasPrepared;
    }
    if (jambonPrepared >0){
        restes += "<br/>Jambon : "+jambonPrepared;
    }
    document.getElementById('reste').innerHTML = restes;

}

function calculScore(){
    score = pizzaBurned * 10;
    score = score - pizzaPrepared *3;
    score = score - jambonPrepared - ananasPrepared;
    return score;
}

function setEvents(e)
{
    let inputsNumber = document.getElementsByClassName('delayOnInput') ;
    let oven = document.getElementsByClassName('delayOnOven') ;
    setDelayOnInputs(inputsNumber, 1) ;
    setDelayOnInputs(oven, 30) ;
}

function setDelayOnInputs(targetTag, delayTime)
{
    for(let i = 0; i < targetTag.length; ++i)
    {
        targetTag[i].addEventListener('click', ()=>{
            targetTag[i].disabled = true;
            let timer = setTimeout(()=>{
                targetTag[i].disabled = false;
                clearTimeout(timer);
            }, (delayTime * 1000));
        }, false);
    }
}