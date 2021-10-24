/* OBBIETTIVI:
    Rappresentare una lista di membri appartenenti ad un team.
    Ogni membro deve possedere caratteristiche prestabilite: name; role; image.
    Mandare in console gli elementi del team con le proprietà.     
*/


const ourTeam = [
    {
        'name': 'Roger',
        'role': 'team_leader',
        'image': 'https://picsum.photos/200'
    },

    {
        'name': 'Fluf',
        'role': 'autista',
        'image': 'https://picsum.photos/200'
    },

    {
        'name': 'Dodge',
        'role': 'operatore_dae',
        'image': 'https://picsum.photos/200'
    },

    {
        'name': 'Bob',
        'role': 'operatore_livello_avanzato',
        'image': 'https://picsum.photos/200'
    }
];

console.log(ourTeam);


console.log(ourTeam[0].name);
console.log(ourTeam[0].role);
console.log(ourTeam[0].image);

document.getElementById("roger").innerHTML=ourTeam[0].name;
document.getElementById("roger_role").innerHTML=ourTeam[0].role;
document.getElementById("roger_img").src=ourTeam[0].image;


console.log(ourTeam[1].name);
console.log(ourTeam[1].role);
console.log(ourTeam[1].image);

document.getElementById("fluf").innerHTML=ourTeam[1].name;
document.getElementById("fluf_role").innerHTML=ourTeam[1].role;
document.getElementById("fluf_img").src=ourTeam[1].image;


console.log(ourTeam[2].name);
console.log(ourTeam[2].role);
console.log(ourTeam[2].image);

document.getElementById("dodge").innerHTML=ourTeam[2].name;
document.getElementById("dodge_role").innerHTML=ourTeam[2].role;
document.getElementById("dodge_img").src=ourTeam[2].image;


console.log(ourTeam[3].name);
console.log(ourTeam[3].role);
console.log(ourTeam[3].image);

document.getElementById("bob").innerHTML=ourTeam[3].name;
document.getElementById("bob_role").innerHTML=ourTeam[3].role;
document.getElementById("bob_img").src=ourTeam[3].image;



//const teamLeader = ourTeam[]