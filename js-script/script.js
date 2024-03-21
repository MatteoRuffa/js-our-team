/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri 
del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la 
stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
*/

let team = [];

let member = {
    nome: '',
    ruolo: '',
    foto: ''
}

// MILESTONE 0:
team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: ' Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]
console.log(team);

// MILESTONE 1:
for (let key in team){
    console.log(key +' nome: '+ team[key].nome +' ,ruolo: '+ team[key].ruolo +' ,stringa foto: '+ team[key].foto);
}

// MILESTONE 2:
/*
for (let i = 0; i < team.length; i++){
    let elCard = document.createElement('div');
    document.querySelector('.container').appendChild(elCard);
    // BONUS 1:
    let realFoto = `<img src="./img/${team[i].foto}"></img>`;
    elCard.innerHTML = team[i].nome +' ' + team[i].ruolo +' ' + realFoto;
} 
*/

// BONUS 2:
/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"></p>
  </div>
</div>
*/
for (let i = 0; i < team.length; i++){
    let elCard = document.createElement('div');
    elCard.classList.add('card', 'm-3');
    elCard.id = i;
    document.documentElement.style.setProperty('--card-size', 'calc((100% / 3) - 40px)');
    document.querySelector('.card-container').appendChild(elCard);

    let elCardImg = document.createElement('img');
    elCardImg.classList.add('card-img-top');
    elCardImg.src = `img/${team[i].foto}`;
    document.getElementById(i).appendChild(elCardImg);
    elCardImg.innerHTML = team[i].foto;

    let elCardBody = document.createElement('div');
    elCardBody.classList.add('card-body');
    document.getElementById(i).appendChild(elCardBody);

    let elCardTitle = document.createElement('h5');
    elCardTitle.classList.add('"card-title', 'text-center');
    document.getElementById(i).appendChild(elCardTitle);
    elCardTitle.innerHTML = team[i].nome;

    let elCardText = document.createElement('p');
    elCardText.classList.add('card-text','pb-2', 'text-center');
    document.getElementById(i).appendChild(elCardText);
    elCardText.innerHTML = team[i].ruolo;
};

// BONUS 3
const elButton = document.querySelector('.btn.btn-primary');

elButton.addEventListener('click', (e)=>{
    e.preventDefault();

    const elNewUserName = document.getElementById('name').value;
    const elNewUserRole = document.getElementById('role').value;
    const elNewUserImg = document.getElementById('formFile').value.split('\\').pop();// qua prendo solo il nome del file senza il percorso preso in defoult dal form!
    const newUser = {
        nome: elNewUserName,
        ruolo: elNewUserRole,
        foto: elNewUserImg
    }
    team.push(newUser);

    let elCard = document.createElement('div');
    elCard.classList.add('card', 'm-3');
    elCard.id = team.length - 1;
    document.documentElement.style.setProperty('--card-size', 'calc((100% / 3) - 40px)');
    document.querySelector('.card-container').appendChild(elCard);

    let elCardImg = document.createElement('img');
    elCardImg.classList.add('card-img-top');
    elCardImg.src = `./img/${elNewUserImg}`;
    elCard.appendChild(elCardImg);

    let elCardBody = document.createElement('div');
    elCardBody.classList.add('card-body');
    elCard.appendChild(elCardBody);

    let elCardTitle = document.createElement('h5');
    elCardTitle.classList.add('"card-title', 'text-center');
    elCardBody.appendChild(elCardTitle);
    elCardTitle.innerHTML = elNewUserName;

    let elCardText = document.createElement('p');
    elCardText.classList.add('card-text','pb-2', 'text-center');
    elCardBody.appendChild(elCardText);
    elCardText.innerHTML = elNewUserRole;
});