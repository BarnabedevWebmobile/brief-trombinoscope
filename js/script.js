const url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?per_page=100'; 
  /**const url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?per_page=100'; = constante qui va récupérer le liens vers l'api
   * et qu'on utilise
   */
  /** 'https://portfolios.ern-mende.fr/ = liens de base du site
        wp-json/wp/v2/ = accès à l'api
        apprenants = l'endpoint de l'api
        ?per_page=100' = parametre qui récupère 100 individus dans l'API */

const all = document.createDocumentFragment();
/**const all = document.createDocumentFragment(); constantes servant a créer les fragments avec la méthode append child, 
 * a la fin elle permet de les assemblé */

const individu = document.getElementById('promo')

/** const individu = document.getElementById('promo') = constante qui cible la zone du document ou les données vont être écrites,
 * document = fichier lié au js
 * getelementbyid() = cible la zone du fichier html
 * 'promo' = id ciblé dans l'index html 
 */

  fetch(url)
  /**
   * récupère les données de l'api, a partir de la constante URL définit plus haut
   */

    .then((response) => {
      return response.json();
    })

    /**
     * récupéré les data et le retourne sous forme de fichier JSON
     */

    .then((data) => {
      let apprenants = data;
      console.log(apprenants) 
      var index = 0;
      /**
       * les datas récupéré par fetch sont récupérés dans la variables apprenants qui vas être ciblé pour l'écriture des cartes
       */
      
      apprenants.map(function(apprenant){
        console.log(data)

        /**
         *  console.log(data) élément qui vas renvoyer les données dans la console du navigateur
         */

        /**
         * les données récupérés dans apprenants sont transformé en tableau par " apprenants.map"
         *  qui vont être utilisé dans la fonction "function(apprenant)" la fonction apprenant fait office de boucle, 
         * il remplit des cartes jusqu'a ce que le tableau soit fini
         */

        let card= document.createElement('div');/** variable card créer une div en HTML */
        card.id = 'cards'+index+''
        card.className = 'card show'; /** ajoute a la variable card une class CSS */
        individu.appendChild(card); /** card est une parti de la constante individu, ajoute card a individu*/

        let card_head= document.createElement('div');/** variable card créer une div en HTML */
        card_head.className = 'card-name-promo'; /** ajoute a la variable card une class CSS */
        card.appendChild(card_head); /** card_head est une parti de la variable card, ajoute card_head a card*/

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

         let nom = document.createElement('p'); /** variable nom créer une balise p en HTML */
         nom.innerHTML = `${apprenant.nom}`; /** variable nom avec le inner html écrit la data nom récupérer dans l'api */
         names.appendChild(nom);

         let prenom = document.createElement('p');
         prenom.innerHTML = `${apprenant.prenom}`;
         names.appendChild(prenom);

         let annees = document.createElement('p');
         annees.id = 'annees'
         annees.innerHTML = `${apprenant.promotions}`;
         promotions.appendChild(annees);

         let image = document.createElement('img'); /** variable image créer une balise img en HTML */
         image.src = `${apprenant.image}`; /** cible l'attribut html src dans lequel est écrit le lien de l'image récupérer dans l'api */
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
         portfolio_liens.href = `${apprenant.portfolio}`;/** cible l'attribut html href dans lequel est écrit 
         le lien vers le site externe récupérer dans l'api */
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
        
        index ++;
        

      })        

      individu.appendChild(all); /** écrit dans le document html tout le contenu créer en javascript */
    })
    .catch(function(error) {
      console.log(error);
    }); /** vérifie la présence d'erreur lors de la récupération de l'api */


    const promotions = "https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions"
    const select = document.createDocumentFragment();
    const trie = document.getElementById('promotion-select')
    const alter = document.getElementById('promoteur')

    fetch(promotions)
      .then((response) => {
        return response.json();
      })
        .then((data) => {
          let proms = data;
          var index = 0;

          proms.map(function(promotion){
          console.log(promotion.name) 
          index ++;
          let opt = document.createElement('option');
          opt.value = `${promotion.id}`;
          opt.id = 'promotion'+index;
          opt.innerHTML = `${promotion.name}`;
          trie.appendChild(opt);
          
            
          })
          trie.appendChild(select);
        })
        .catch(function(error) {
          console.log(error);
        });

        const competences = "https://portfolios.ern-mende.fr/wp-json/wp/v2/competences?per_page=100"
        const checkbox = document.createDocumentFragment();
        const competences_select = document.getElementById('checkbox')
    
        fetch(competences)
          .then((response) => {
            return response.json();
          })
            .then((data) => {
              let competences = data;
              
              competences.map(function(competence){
              console.log(competence) 

              let element = document.createElement('li');
              competences_select.appendChild(element);

              let inp = document.createElement('input');
              inp.type = 'checkbox';
              inp.name = `${competence.name}`;
              inp.id = `${competence.name}`;
              element.appendChild(inp);

              let lab = document.createElement('label');
              lab.htmlFor = `${competence.name}`;
              lab.innerHTML = `${competence.name}`;
              element.appendChild(lab);
                
              })
              trie.appendChild(select);
            })
            .catch(function(error) {
              console.log(error);
            });

            function change(){
            const selecteur = document.getElementById('promotion-select')
            selecteur.addEventListener('change', annees1, true);
          }
    function annees1(apprenant){
      var promo = document.getElementById('promotion'+index+'')
      var annees1 = document.getElementById('annees')
      var cards = document.getElementById('cards'+index+'')

      console.log(promo1.value)

      if (promo1.value!=annees1){
        cards.classList.remove('show');
        cards.classList.add('hide');
      }else{

      }

    }
