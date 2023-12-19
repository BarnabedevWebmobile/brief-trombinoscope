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
        card.setAttribute('id', 'card');
        individu.appendChild(card);

        let card_head= document.createElement('div');
        card_head.className = 'card-name-promo';
        card.appendChild(card_head);

        let card_image = document.createElement('div');
        card_image.className = 'image';
        card.appendChild(card_image);

        let card_container = document.createElement('div');
        card_container.className = 'container';
        card.appendChild(card_container);

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

         let extrait = document.createElement('p');
         extrait.innerHTML = `${apprenant.excerpt.rendered}`;
         card_container.appendChild(extrait);

         let card_liens = document.createElement('div');
         card_liens.className = 'lien-onglet';
         card_container.appendChild(card_liens);
 
         let liens = document.createElement('div');
         liens.className = 'onglet-portfolio';
         card_liens.appendChild(liens);

         let portfolio = document.createElement('button');
         portfolio.className = 'button-link';
         liens.appendChild(portfolio);

         let portfolio2 = document.createElement('button');
         portfolio2.className = 'button-link';
         liens.appendChild(portfolio2);
         
         let portfolio3 = document.createElement('button');
         portfolio3.className = 'button-link';
         liens.appendChild(portfolio3);

         let portfolio_liens = document.createElement('a');
         portfolio_liens.href = `${apprenant.portfolio}`;
         portfolio_liens.innerHTML = "portfolio";
         portfolio.appendChild(portfolio_liens);

         let portfolio_liens2 = document.createElement('a');
         portfolio_liens2.href = `${apprenant.portfolio}`;
         portfolio_liens2.innerHTML = "linkedin";
         portfolio2.appendChild(portfolio_liens2);

         let portfolio_liens3 = document.createElement('a');
         portfolio_liens3.href = `${apprenant.portfolio}`;
         portfolio_liens3.innerHTML = "cv";
         portfolio3.appendChild(portfolio_liens3);
         
        

      })        

      individu.appendChild(all);
    })
    .catch(function(error) {
      console.log(error);
    }); 

    function trouverAnnee(id_annee, index){
    var url_annee = "https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions/"
  
  fetch(url_annee)
  .then((resp) => resp.json())
  .then(function(data) {
      
      var Apprenant_annee = document.getElementById('annee'+index);
      textAnnee  = data["name"];
      Apprenant_annee.innerHTML = "Année : "+textAnnee
      Apprenant_annee.style.display = "block"
  })
  .catch(function(error) {
    console.log(error);
  });
  
  }