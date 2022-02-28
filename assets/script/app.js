// animation choose video game :
const btnStart = document.querySelector('.btnStart');
btnStart.addEventListener('click', chooseVG);

//création de l'animation :
//fonction avec paramètre time pour le temps à attendre
//renvoyer(return) un nouvel(new) objet de type promesse(promise) 
//qui est resolu (resolve) à la fin du temps imparti (time)

function delay (time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

//async : car besoin d'une fonction asynchrone pour pouvoir excuter une fonction await
async function chooseVG(){

    btnStart.setAttribute('disabled', true);

    //pour savoir sur combien d'element div elle va passer : 
    //Choisir un nombre entre 10 et 20
    //ici le premier dix correspond au nombre de tour (2*5 car 5 div)
    //et 20 car 10 + 10 
    //qui correspond au fait qu'en plus des 2*5 premiers tours on doit refaire 2*5 tours maximum
    var random = 10+Math.floor(Math.random()*10);

    refresh();

    //pour savoir sur quel element div elle doit s'arrêter
    for(i = 0; i < random; i++){   

        //await est une fonction qui permet d'attendre jusqu'à ce que la promesse soit résolue 
        //en l'occurence la promesse qui est renvoyée par notre fonction delay
        await delay(100);

        //on fait un moulo de i de 5(car 5 div) pour savoir sur laquelle elle va passer afin de le mettre en surbrillance
        var modulo = i % 5;

        switch(modulo){

            case 0 : 
            //donne le style à ma div selectionnée
            document.getElementById('choice1').style.border = '3px solid lightgreen';
            document.getElementById('choice1').style.boxShadow = '0 7px 10px 0 lightgreen';

            //enleve le style à la div précédement selectionée
            document.getElementById('choice5').style.border = '5px solid rgba(255, 255, 255, 0.185)';
            document.getElementById('choice5').style.boxShadow = '0 7px 10px 0 rgb(88, 88, 88)';
            break;

            case 1 : 
            document.getElementById('choice2').style.border = '3px solid lightpink';
            document.getElementById('choice2').style.boxShadow = '0 7px 10px 0 lightpink';

            document.getElementById('choice1').style.border = '5px solid rgba(255, 255, 255, 0.185)';
            document.getElementById('choice1').style.boxShadow = '0 7px 10px 0 rgb(88, 88, 88)';
            break;

            case 2 : 
            document.getElementById('choice3').style.border = '3px solid yellow';
            document.getElementById('choice3').style.boxShadow = '0 7px 10px 0 yellow';

            document.getElementById('choice2').style.border = '5px solid rgba(255, 255, 255, 0.185)';
            document.getElementById('choice2').style.boxShadow = '0 7px 10px 0 rgb(88, 88, 88)';
            break;

            case 3 : 
            document.getElementById('choice4').style.border = '3px solid lightblue';
            document.getElementById('choice4').style.boxShadow = '0 7px 10px 0 lightblue';

            document.getElementById('choice3').style.border = '5px solid rgba(255, 255, 255, 0.185)';
            document.getElementById('choice3').style.boxShadow = '0 7px 10px 0 rgb(88, 88, 88)';
            break;

            case 4 : 
            document.getElementById('choice5').style.border = '3px solid #ee98fb';
            document.getElementById('choice5').style.boxShadow = '0 7px 10px 0 #ee98fb';

            document.getElementById('choice4').style.border = '5px solid rgba(255, 255, 255, 0.185)';
            document.getElementById('choice4').style.boxShadow = '0 7px 10px 0 rgb(88, 88, 88)';
            break;
        }      
    }

    btnStart.removeAttribute('disabled');
};

//fonction qui va permettre de rendre le style par défaut à la page à un nouveau click
function refresh(){

    for(i = 1; i <=5; i++){
        document.getElementById('choice'+i).style.border = '5px solid rgba(255, 255, 255, 0.185)';
        document.getElementById('choice'+i).style.boxShadow = '0 7px 10px 0 rgb(88, 88, 88)';
    }
};

// --------------------------------------------------------------------------

//Suite sur ScriptPlay, ScriptNintendo et ScriptXbox