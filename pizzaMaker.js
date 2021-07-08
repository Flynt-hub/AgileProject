addEventListener('load', setEvents, false) ;

var pseudo = "Yoda";
var score = 0;
var tomatePrepared = 0;
var jambonPrepared = 0;
var ananasPrepared = 0;
var pizzaPrepared = 0;
var pizzaBurned = 0;
let gameTimer = null ;



function start(){
    const maxTime = 4000 ;
    const minTime = 2000 ;

    pseudo = document.getElementById("pseudo").value;
    document.getElementById("dispPseudo").innerText = pseudo;
    document.getElementById("Game").style.display = "block";
    document.getElementById("Start").style.display = "none";
    gameTimer = setTimeout(()=>{
        dispScore();
    }, Math.floor(Math.random() * ( maxTime - minTime ) ) + maxTime ) ;
}

function addIngredients(){
    if(document.getElementById("tomate").checked){
        tomatePrepared += parseInt(document.getElementById("tomate").value);
        document.getElementById("tomatePrepared").innerHTML = tomatePrepared;
        document.getElementById("tomatoIcons").innerHTML += "&#127813 " ;
    }
    else if(document.getElementById("jambon").checked){
        jambonPrepared += parseInt(document.getElementById("jambon").value);
        document.getElementById("jambonPrepared").innerHTML = jambonPrepared;
        document.getElementById("hamIcon").innerHTML += "&#129385 " ;
    }
    else{
        ananasPrepared += parseInt(document.getElementById("ananas").value);
        document.getElementById("ananasPrepared").innerHTML = ananasPrepared;
        document.getElementById("ananasIcon").innerHTML += "&#127821 " ;
    }
}

function preparePizza(){
    var tomate = parseInt(document.getElementById("tomatePizza").value);
    var ananas = parseInt(document.getElementById("ananasPizza").value);
    var jambon = parseInt(document.getElementById("jambonPizza").value);

    if(ananas >= 3 && jambon >= 3 && tomate >= 1){
        if(tomatePrepared >= tomate && ananasPrepared >= ananas && jambonPrepared >= jambon){
            tomatePrepared -= 1;
            document.getElementById("tomatePrepared").innerHTML = tomatePrepared;
            document.getElementById("tomatoIcons").innerHTML = " " ;
            for (let i = 0; i < tomatePrepared; ++i) {
                document.getElementById("tomatoIcons").innerHTML += "&#127813 " ;                
            }

            ananasPrepared -= 3;
            document.getElementById("ananasPrepared").innerHTML = ananasPrepared;
            document.getElementById("ananasIcon").innerHTML = " " ;
            for (let i = 0; i < ananasPrepared; ++i) {
                document.getElementById("ananasIcon").innerHTML += "&#127821 " ;                
            }

            jambonPrepared -= 3;
            document.getElementById("jambonPrepared").innerHTML = jambonPrepared;
            document.getElementById("hamIcon").innerHTML = " " ;
            for (let i = 0; i < jambonPrepared; ++i) {
                document.getElementById("hamIcon").innerHTML += "&#129385 " ;                
            }

            pizzaPrepared += 1;
            document.getElementById("pizzaPrepared").innerHTML = pizzaPrepared;
            document.getElementById("pizzaIcon").innerHTML += "&#127829 " ;
        }
    }
    else{
        alert("Vous n'avez pas assez d'ingrédients!");
    }

}

function burnPizzas(){
    var pizza = parseInt(document.getElementById("pizzaToBurn").value);

    if( pizza >0 && pizza <= pizzaPrepared){
        document.getElementById('divFour').className = "card border border-warnig mb-3";
        pizzaBurned = pizza;
        pizzaPrepared -= pizzaBurned;
        document.getElementById("pizzaIcon").innerHTML = " " ;
        for (let i = 0; i < pizzaPrepared; ++i) {
            document.getElementById("pizzaIcon").innerHTML += "&#129385 " ;                
        }
        document.getElementById("hawaienBurned").innerHTML = pizzaBurned;
       // document.getElementById('Four').className = "card border border-danger mb-3";
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

function setEvents()
{
    let inputsNumber = document.getElementsByClassName('delayOnInput') ;
    let oven = document.getElementsByClassName('delayOnOven') ;

    setDelayOnInputs(inputsNumber, 1) ;
    setDelayOnInputs(oven, 30) ;
    setEventUncheckRadioButton()
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

function setEventUncheckRadioButton()
{
    let radioInputs = document.getElementsByClassName('radioButton') ;
    let createButton = document.getElementById('buttonCreateIngredient') ;
    createButton.addEventListener('click', ()=>{
        for (let i = 0; i < radioInputs.length; ++i) 
        {
            if( radioInputs[i].checked == true )
                {
                    radioInputs[i].checked = false ;
                }
        }
    }, false ) ;
}