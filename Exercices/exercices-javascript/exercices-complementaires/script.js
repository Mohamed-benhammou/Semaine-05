//Exercices intermédiaires

//1. Créez un objet body avec deux clés: auteur et comment. Donnez leur des valeurs sous forme de chaîne de caractère
let body = {
  auteur: 'Nom',
  comment: 'Commentaire',
};
//2. Vous devez convertir cet objet en format JSON: Créez une nouvelle variable bodyToJson attribuez lui la méthode JSON.stringify(); passez la variable body en paramètre de cette méthode
let bodyToJson = JSON.stringify(body);
//3. Dans votre index.html : créez un bouton, passez lui comme id "submit-btn". Pointez dans votre script.js à l'aide de la méthode getElementById, ensuite, ajoutez lui un eventListener. Au click sur ce bouton, affichez dans la console la valeur de la variable bodyToJson
document
  .getElementById('submit-btn')
  .addEventListener('click', () => console.log(bodyToJson));
//4. Dans votre index.html, à l'aide des balises form, label, input, créez un formulaire. Il vous faut 2 inputs: un input basic avec comme id "auteur" et un textarea avec comme id "comment"
/* ok */
//5. Dans votre index.html, créez une balise "div" référente qui servira de repère à l'endroit de votre code où vous souhaitez intégrer du nouveau contenu, passez lui l'attribut id avec comme valeur "balise"
/* ok */
//6. Dans votre fichier script.js créez une nouvelle balise à l'aide de la méthode createElement et attribuez lui le texte de votre choix à l'aide de la méthode createNodeText, ensuite greffez le texte à la div en utilisant la méthode appendChild
let newDiv = document.createElement(`div`);
let newContent = document.createTextNode('du text dans la div');
newDiv.appendChild(newContent);
// 7. Créez une variable myHeaders et passez lui la paire de clé/valeur suivante: "Content-Type": "application/json"
const myHeaders = {
  'Content-type': 'application/json',
};
// 8. Créez une requête fetch à l'aide de la méthode post et passez lui la variable bodyToJson en valeur de la clé body
fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
  method: 'POST',
  headers: myHeaders,
  body: bodyToJson,
});
