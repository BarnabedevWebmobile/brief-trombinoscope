
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


/** 
fetch('https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants')

.then(Response => Response.json()) /** transforme la reponse en json 
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
      console.log(data[1]["nom"])
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

      console.log(data)
      console.log(data[2]["nom"])
      var Apprenant1_nom = document.getElementById('nom3');
      
      var textAEcrire  = data[2]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom3');
      textAEcrire  = data[2]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee3');
      id_de_annee = data[2]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar3');
      textAEcrire  = data[2]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait3');
      textAEcrire  = data[2]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio3');
      textAEcrire  = data[2]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv3');
      textAEcrire  = data[2]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv3');
      textAEcrire  = data[2]["link"];
      Apprenant1_cv.href = textAEcrire 

      console.log(data)
      console.log(data[3]["nom"])
      var Apprenant1_nom = document.getElementById('nom4');
      
      var textAEcrire  = data[3]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom4');
      textAEcrire  = data[3]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee4');
      id_de_annee = data[3]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar4');
      textAEcrire  = data[3]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait4');
      textAEcrire  = data[3]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio4');
      textAEcrire  = data[3]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv4');
      textAEcrire  = data[3]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv4');
      textAEcrire  = data[3]["link"];
      Apprenant1_cv.href = textAEcrire 

      console.log(data)
      console.log(data[4]["nom"])
      var Apprenant1_nom = document.getElementById('nom5');
      
      var textAEcrire  = data[4]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom5');
      textAEcrire  = data[4]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee5');
      id_de_annee = data[4]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar5');
      textAEcrire  = data[4]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait5');
      textAEcrire  = data[4]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio5');
      textAEcrire  = data[4]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv5');
      textAEcrire  = data[4]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv5');
      textAEcrire  = data[4]["link"];
      Apprenant1_cv.href = textAEcrire 

      console.log(data)
      console.log(data[5]["nom"])
      var Apprenant1_nom = document.getElementById('nom6');
      
      var textAEcrire  = data[5]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom6');
      textAEcrire  = data[5]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee6');
      id_de_annee = data[5]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar6');
      textAEcrire  = data[5]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait6');
      textAEcrire  = data[5]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio6');
      textAEcrire  = data[5]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv6');
      textAEcrire  = data[5]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv6');
      textAEcrire  = data[5]["link"];
      Apprenant1_cv.href = textAEcrire 

      console.log(data)
      console.log(data[6]["nom"])
      var Apprenant1_nom = document.getElementById('nom7');
      
      var textAEcrire  = data[6]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom7');
      textAEcrire  = data[6]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee7');
      id_de_annee = data[6]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar7');
      textAEcrire  = data[6]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait7');
      textAEcrire  = data[6]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio7');
      textAEcrire  = data[6]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv7');
      textAEcrire  = data[6]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv7');
      textAEcrire  = data[6]["link"];
      Apprenant1_cv.href = textAEcrire
      
      console.log(data)
      console.log(data[7]["nom"])
      var Apprenant1_nom = document.getElementById('nom8');
      
      var textAEcrire  = data[7]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom8');
      textAEcrire  = data[7]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee8');
      id_de_annee = data[7]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar8');
      textAEcrire  = data[7]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait8');
      textAEcrire  = data[7]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio8');
      textAEcrire  = data[7]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv8');
      textAEcrire  = data[7]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv8');
      textAEcrire  = data[7]["link"];
      Apprenant1_cv.href = textAEcrire

      console.log(data)
      console.log(data[8]["nom"])
      var Apprenant1_nom = document.getElementById('nom9');
      
      var textAEcrire  = data[8]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom9');
      textAEcrire  = data[8]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee9');
      id_de_annee = data[8]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar9');
      textAEcrire  = data[8]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait9');
      textAEcrire  = data[8]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio9');
      textAEcrire  = data[8]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv9');
      textAEcrire  = data[8]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv9');
      textAEcrire  = data[8]["link"];
      Apprenant1_cv.href = textAEcrire

      console.log(data)
      console.log(data[9]["nom"])
      var Apprenant1_nom = document.getElementById('nom10');
      
      var textAEcrire  = data[9]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom10');
      textAEcrire  = data[9]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee10');
      id_de_annee = data[9]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar10');
      textAEcrire  = data[9]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait10');
      textAEcrire  = data[9]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio10');
      textAEcrire  = data[9]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv10');
      textAEcrire  = data[9]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv10');
      textAEcrire  = data[9]["link"];
      Apprenant1_cv.href = textAEcrire

      console.log(data)
      console.log(data[10]["nom"])
      var Apprenant1_nom = document.getElementById('nom11');
      
      var textAEcrire  = data[10]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom11');
      textAEcrire  = data[10]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee11');
      id_de_annee = data[10]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar11');
      textAEcrire  = data[10]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait11');
      textAEcrire  = data[10]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio11');
      textAEcrire  = data[10]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv11');
      textAEcrire  = data[10]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv11');
      textAEcrire  = data[10]["link"];
      Apprenant1_cv.href = textAEcrire

      console.log(data)
      console.log(data[11]["nom"])
      var Apprenant1_nom = document.getElementById('nom12');
      
      var textAEcrire  = data[11]["nom"];
      Apprenant1_nom.innerHTML = textAEcrire
      
      var Apprenant1_prenom = document.getElementById('prenom12');
      textAEcrire  = data[11]["prenom"];
      Apprenant1_prenom.innerHTML = textAEcrire


      var Apprenant1_annee = document.getElementById('annee12');
      id_de_annee = data[11]["promotions"][0];
      Apprenant1_annee.innerHTML = id_de_annee
      
      var Apprenant1_avatar = document.getElementById('avatar12');
      textAEcrire  = data[11]["image"];
      Apprenant1_avatar.src = textAEcrire

      var Apprenant1_extrait = document.getElementById('extrait12');
      textAEcrire  = data[11]["excerpt"]["rendered"];
      Apprenant1_extrait.innerHTML = textAEcrire

      var Apprenant1_portfolio = document.getElementById('portfolio12');
      textAEcrire  = data[11]["portfolio"];
      Apprenant1_portfolio.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv12');
      textAEcrire  = data[11]["link"];
      Apprenant1_cv.href = textAEcrire

      var Apprenant1_cv = document.getElementById('cv12');
      textAEcrire  = data[11]["link"];
      Apprenant1_cv.href = textAEcrire
    })
    .catch(error =>{
      console.log('erreur', error)
    });

    function trouverAnnee(){
      fetch('https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions')
      .then(data =>{
        console.log(data)
        
      })
    }

    trouverAnnee()

    */