/* milestone 0 */
let teamArray = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];


/* milestone 1 */

for (let i=0; i<teamArray.length; i++){
    for (let key in teamArray[i]){
        console.log(key+" = "+teamArray[i][key])
    }
}

/* milestone 2 */

let container = document.getElementById('my-container');

function generateKey(container, objectArray){
    for (let i=0; i<objectArray.length; i++){
        for (let key in objectArray[i]){
            /* bonus 1 */
            if(key == 'image'){
                let myImg = document.createElement('img');
                myImg.src = `./img/${objectArray[i][key]}`;
                console.log(myImg);
                container.appendChild(myImg);
            } else {
                let myDiv = document.createElement('div');
                myDiv.innerHTML = objectArray[i][key];
                console.log(myDiv);
                container.appendChild(myDiv);
            }
        }
    }
}

generateKey(container, teamArray);

