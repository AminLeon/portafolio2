//Script de consulta a un json
const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = './heroes.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }


  function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['proyectos'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Ejemplos de trabajos ' + jsonObj['date'] + ' // Portfolio: ' + jsonObj['date'];
    header.appendChild(myPara);
  }
  
  function showHeroes(jsonObj) {
    const heroes = jsonObj['proyects'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myimg = document.createElement('img');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('p');
  
      myH2.textContent = heroes[i].name;
      myimg.src = heroes[i].img;
      myPara2.textContent = 'Descripcion: ' + heroes[i].number;
      myPara3.textContent = 'Enlace:' +heroes[i].enlace;
  
      const superPowers = heroes[i].powers;

  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myimg);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
  
