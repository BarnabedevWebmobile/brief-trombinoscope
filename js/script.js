function search(){

}

function check(){

}

function affine(){

}


/** fonction récupération de l'API */
function nom(){
    fetch('https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?_fields=nom')
    .then(Response => Response.json()) /** transforme la reponse en json */
    .then ( data=>{
      document.getElementById('nom').innerHTML=data.value;
    })
    .catch(error =>{
      console.log('erreur', error)
    });
  }
  function categorie(){
    
  }