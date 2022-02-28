// category adventure
const btnShoot = document.querySelector('.btnShoot');
btnShoot.addEventListener('click', shoot);
tabShoot = [
    'Call of Duty',
    'Fortnite',
    'Apex',
    'OverWatch',
    'FarCry',
    'Borderlands',
    'Doom',
    'BattleFields',
    'Ghost Recon',
    'Destiny',
    'Plant VS Zombie',
    'Halo'
];

function shoot(){

    //On crée un tableau vide qui va contenir les jeux qui ont déjà été sélectionnés
    var tabPos = [];

    //Recupere la longeur de mon tableau 
    var length =  tabShoot.length;

    for(i = 1; i <= 5; i++){

        //Prends un jeu aléatoirement dans le tableau de jeu entre 0 et 9 car 10 jeux
        var randomTab = tabShoot[Math.floor(Math.random() * length)];

        //tant que le jeu tiré aléatoirement de 'randomTab' est dans la liste des postitions 'tabPos' alors on retire un jeu aléatoire
        while (tabPos.includes(randomTab)){
            randomTab = tabShoot[Math.floor(Math.random() * length)];
        }

        let jeu = document.getElementById('choice'+i);
        jeu.innerText = randomTab;
        //on ajoute le jeu selectionné dans le tableau tabPos
        tabPos.push(randomTab);
    }

    refresh();
};

// --------------------------------------------------------------------------

// category adventure

const btnAdventure = document.querySelector('.btnAdventure');
btnAdventure.addEventListener('click', adventure);
tabAdventure = [
    'Assassin\'s Creed',
    'Skyrim',
    'The Witcher',
    'The Walking Dead',
    'Red Dead Redemption',
    'Grand Theft Auto',
    'Cyberpunk',
    'Biomutant',
    'Final Fantasy',
    'Kingdom Hearts',
    'Watch Dogs',
    'Immortals Fenyx Rising'
];

function adventure(){

    var tabPos = [];
     var length =  tabAdventure.length;

    for(i = 1; i <= 5; i++){

        var randomTab = tabAdventure[Math.floor(Math.random() * length)];

        while (tabPos.includes(randomTab)){
            randomTab = tabAdventure[Math.floor(Math.random() * length)];
        }

        let jeu = document.getElementById('choice'+i);
        jeu.innerText = randomTab;
        tabPos.push(randomTab);
    }

    refresh();
};


// --------------------------------------------------------------------------

// category reflexion

const btnReflex = document.querySelector('.btnReflex');
btnReflex.addEventListener('click', reflexion);
tabReflexion = [
    'UnRavel',
    'Tomb Raider',
    'It Takes Two',
    'A Way Out',
    'Inside + Limbo',
    'Little Nightmares',
    'Snack pass',
    'Tetris',
    'Overcooked'
];

function reflexion(){

    var tabPos = [];
    var length =  tabReflexion.length;

    for(i = 1; i <= 5; i++){

        var randomTab = tabReflexion[Math.floor(Math.random() * length)];

        while (tabPos.includes(randomTab)){
            randomTab = tabReflexion[Math.floor(Math.random() * length)];
        }

        let jeu = document.getElementById('choice'+i);
        jeu.innerText = randomTab;
        tabPos.push(randomTab);
    }

    refresh();
};

// --------------------------------------------------------------------------

// category plateform

const btnPlatform = document.querySelector('.btnPlatform');
btnPlatform.addEventListener('click', plateform);
tabPlateform = [
    'Yooka Laylee',
    'Spyro',
    'Les Schtroumpfs',
    'Crash Bandicoot',
    'Les Marsupilamis',
    'SoulStrom',
    'Rayman',
    'New super Lucky Tales',
    'Journey to the Sauvage Planet',
];

function plateform(){

    var tabPos = [];
    var length =  tabPlateform.length;

    for(i = 1; i <= 5; i++){

        var randomTab = tabPlateform[Math.floor(Math.random() * length)];

        while (tabPos.includes(randomTab)){
            randomTab = tabPlateform[Math.floor(Math.random() * length)];
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
tabOthers = [
    'Ark',
    'Subnautica',
    'Stranded Deep',
    'Minecraft',
    'Forza'
]
tabAll = tabOthers.concat(tabShoot, tabAdventure, tabPlateform, tabReflexion);

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