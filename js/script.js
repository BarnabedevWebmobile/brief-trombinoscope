function search(){

}

function check(){

}

function affine(){

}


/** fonction récupération de l'API */
function nom(){
    fetch('https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants')
    .then(Response => Response.json()) /** transforme la reponse en json */
    .then ( data=>{
      console.log(data)
      document.getElementById('nom').innerHTML=data;
    })
    .catch(error =>{
      console.log('erreur', error)
    });
  }
  function categorie(){
    
  }