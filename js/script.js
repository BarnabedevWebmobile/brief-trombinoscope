

const url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants';
const all = document.createDocumentFragment();
const individu = document.getElementById('promo')
  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      let apprenants = data;
      console.log(apprenants) 

      apprenants.map(function(apprenant){
        console.log(data)

        let card= document.createElement('div');
        card.className = 'card';
        card.setAttribute('id', 'card')
        individu.appendChild(card);

        let card_head= document.createElement('div');
        card_head.className = 'card-name-promo';
        card.appendChild(card_head);
        
        let card_container = document.createElement('div');
        card_container.className = 'container';
        card.appendChild(card_container);

        let card_liens = document.createElement('div');
        card_container.className = 'lien-onglet';
        card_container.appendChild(card_liens);

        let liens = document.createElement('div');
        card_container.className = 'container';
        card_liens.appendChild(liens);

        let card_image = document.createElement('div');
        card_image.className = 'image';
        card.appendChild(card_image);

        let names= document.createElement('div');
        names.className = 'name';
        card_head.appendChild(names);

        let promotions= document.createElement('div');
        promotions.className = 'card-promo';
        card_head.appendChild(promotions);

         let nom = document.createElement('p');
         nom.innerHTML = `${apprenant.nom}`;
         names.appendChild(nom);

         let prenom = document.createElement('p');
         prenom.innerHTML = `${apprenant.prenom}`;
         names.appendChild(prenom);

         let annees = document.createElement('p');
         annees.innerHTML = `${apprenant.promotions}`;
         promotions.appendChild(annees);

         let image = document.createElement('img');
         image.src = `${apprenant.image}`;
         card_image.appendChild(image);

      })        

      individu.appendChild(all);
    })
    .catch(function(error) {
      console.log(error);
    }); 


