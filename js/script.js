
/** fonction récupération de l'API */
/**function nom(){
    fetch('https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants')
    .then(Response => Response.json()) /** transforme la reponse en json 
    .then ( data=>{
      console.log(data)
      document.getElementById('nom').innerHTML=data.title;
      
    })
    .catch(error =>{
      console.log('erreur', error)
    });
  }
  function categorie(){
    
  }

nom()*/

fetch('https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants')

.then(Response => Response.json()) /** transforme la reponse en json */
    .then ( data=>{
      console.log(data)
      console.log(data[0]["nom"])
      var Apprenant1_nom = document.getElementById('nom1');
      
      var textAEcrire  = data[0]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom1');
      textAEcrire  = data[0]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee1');
      id_de_annee = data[0]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar1');
      textAEcrire  = data[0]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait1');
      textAEcrire  = data[0]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio1');
      textAEcrire  = data[0]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv1');
      textAEcrire  = data[0]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv1');
      textAEcrire  = data[0]["link"];
      Apprenant1_cv.href = textAEcrire
      
      console.log(data)
      console.log(data[0]["nom"])
      var Apprenant1_nom = document.getElementById('nom2');
      
      var textAEcrire  = data[1]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom2');
      textAEcrire  = data[1]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee2');
      id_de_annee = data[1]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar2');
      textAEcrire  = data[1]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait2');
      textAEcrire  = data[1]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio2');
      textAEcrire  = data[1]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv2');
      textAEcrire  = data[1]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv2');
      textAEcrire  = data[1]["link"];
      Apprenant1_cv.href = textAEcrire 
    })
    .catch(error =>{
      console.log('erreur', error)
    });

    