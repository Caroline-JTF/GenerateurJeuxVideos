// category mario

const btnMario = document.querySelector('.btnMario');
btnMario.addEventListener('click', mario);
tabMario = [
    'Mario Kart',
    'Mario Party',
    'Mario Odyssey',
    'Mario 3D All Star',
    'Mario 3d World',
    'Super Mario Maker', 
    'New Super Mario Bros Deluxe',
    'mario Golf',
    'Mario & Les lapins crétins',
    'Mario & Sonic aux jeux olympiques'
];

function mario(){

    //On crée un tableau vide qui va contenir les jeux qui ont déjà été sélectionnés
    var tabPos = [];

    //Recupere la longeur de mon tableau 
    var length =  tabMario.length;

    for(i = 1; i <= 5; i++){

        //Prends un jeu aléatoirement dans le tableau de jeu entre 0 et 9 car 10 jeux
        var randomTab = tabMario[Math.floor(Math.random() * length)];

        //tant que le jeu tiré aléatoirement de 'randomTab' est dans la liste des postitions 'tabPos' alors on retire un jeu aléatoire
        while (tabPos.includes(randomTab)){
            randomTab = tabMario[Math.floor(Math.random() * length)];
        }

        let jeu = document.getElementById('choice'+i);
        jeu.innerText = randomTab;
        //on ajoute le jeu selectionné dans le tableau tabPos
        tabPos.push(randomTab);
    }

    refresh();
};

// --------------------------------------------------------------------------

// category pokemon

const btnPokemon = document.querySelector('.btnPokemon');
btnPokemon.addEventListener('click', pokemon);
tabPokemon = [
    'New Pokemon Snap',
    'Pokemon Let\'s Go, Pikachu',
    'Pokemon Let\'s Go, Evoli',
    'Légendes Pokemon : Arceus',
    'Pokemon Bouclier',
    'Pokemon épée',
    'Pokemon Diamant Etincelant',
    'Pokemon Perle Scintillante'
];

function pokemon(){

    var tabPos = [];
     var length =  tabPokemon.length;

    for(i = 1; i <= 5; i++){

        var randomTab = tabPokemon[Math.floor(Math.random() * length)];

        while (tabPos.includes(randomTab)){
            randomTab = tabPokemon[Math.floor(Math.random() * length)];
        }

        let jeu = document.getElementById('choice'+i);
        jeu.innerText = randomTab;
        tabPos.push(randomTab);
    }

    refresh();
};


// --------------------------------------------------------------------------

// category autres

const btnOthers = document.querySelector('.btnOthers');
btnOthers.addEventListener('click', others);
tabOthers = [
    'Animal crossing',
    'Minecraft',
    'Among us',
    'Ring Fit Advetnure',
    'The Legend of Zelda : Breath of the Wild',
    'Super Smash Bros',
    'Metroid',
    'Kirby et le monde oublié',
    'Luigi\'s mansion\'s',
    'Captain Toad',
    'Donkey Kong Contry Tropical Freeze',
    'l\'aventure Layton',
    'The Legend of Zelda',
    'Hyrule Warriors'
];

function others(){

    var tabPos = [];
     var length =  tabOthers.length;

    for(i = 1; i <= 5; i++){

        var randomTab = tabOthers[Math.floor(Math.random() * length)];

        while (tabPos.includes(randomTab)){
            randomTab = tabOthers[Math.floor(Math.random() * length)];
        }

        let jeu = document.getElementById('choice'+i);
        jeu.innerText = randomTab;
        tabPos.push(randomTab);
    }

    refresh();
};


// --------------------------------------------------------------------------

// all categories

const btnAll = document.querySelector('.btnAll');
btnAll.addEventListener('click', all);
tabAll = tabOthers.concat(tabMario, tabPokemon);

function all(){

    var tabPos = [];
    var length =  tabAll.length;

    for(i = 1; i <= 5; i++){

        var randomTab = tabAll[Math.floor(Math.random() * length)];

        while (tabPos.includes(randomTab)){
            randomTab = tabAll[Math.floor(Math.random() * length)];
        }

        let jeu = document.getElementById('choice'+i);
        jeu.innerText = randomTab;
        tabPos.push(randomTab);
    }

    refresh();
};