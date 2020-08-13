// Consignes exercices globaux:

// naviguez jusqu'à votre dossier: exercices landing page, lisez les consignes relatives à l'intégration de votre maquette. Ensuite dans le fichier script.js réalisez les consignes suivantes:

// 1. Définissez une nouvelle variable "myHeaders", contenant un objet global Headers, configuré avec la paire de clé/valeur suivante: "Content-Type": "application/json"
let myHeaders = new Headers({ 'Content-Type': 'application/json' });
const API_URL = 'https://quotes-light-api.herokuapp.com/api/comments/';
// 2. Créez un formulaire dans votre index.html. Utilisez les balises "form", "label", "input", "button", passez comme ID "my-form" à votre balise form, ensuite pour les attributs "id" de vos input il est OBLIGATOIRE d'utiliser les clés attendues par l'API. C'est à dire une clé "auteur" et une clé "comment". Un de vos deux input aura donc comme valeur à l'attribut "id": "auteur", et le second "id":"comment". Pour finir, donnez comme ID "submit-btn" à votre bouton. Attention pour le bouton, il faut le sortir du formulaire sinon il rafraichit automatiquement la page.
//ok
//3. Vous disposez de vos headers, et de votre formulaire. Maintenant vous allez créer une écoute d'évenement sur le bouton ayant pour id "submit-btn".
//4. A l'intérieur de cette écoute, vous allez créer une variable "formAuteurValue", une variable formCommentValue et aller pointer vers les inputs qui ont comme id auteur et comment, ensuite récupérer la valeur de ces input et stockez là dans les variables que vous venez de créer
const getComments = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.className = `comment-history`;
        let authorParagraph = document.createElement('p');
        authorParagraph.className = 'author-paragraph';
        authorParagraph.innerHTML = element.auteur;
        // let author = document.createTextNode(element.auteur);
        // let comment = document.createTextNode(element.comment);
        let commentParagraph = document.createElement('p');
        commentParagraph.className = 'paragraph';
        commentParagraph.innerHTML = element.comment;
        newDiv.appendChild(authorParagraph);
        newDiv.appendChild(commentParagraph);
        let currentDiv = document.getElementById('comments-container');
        currentDiv.appendChild(newDiv);
        // document.body.insertBefore(newDiv, currentDiv.nextElementSibling);
      });
    });
};
document.getElementById(`submit-btn`).addEventListener(`click`, () => {
  let formAuteurValue = document.getElementById(`auteur`).value;
  let formCommentValue = document.getElementById(`comment`).value;

  //5. Créez une variable "body" de type objet. Dans cette variable passé comme clé: auteur et comment, ensuite attribuez les valeurs de formAuteurValue et formCommentValue aux clés correspondantes
  let body = {
    auteur: formAuteurValue,
    comment: formCommentValue,
  };
  //6. Maintenant que nous possédons tout le nécessaire à la rédaction de la méthode fetch(), lançons nous! Créez une méthode fetch qui utilise cette url :
  //7. Passez en deuxième argument un objet contenant la méthode, les headers et le body
  //8. Pour construire le body: utilisez la méthode JSON.stringify, passez lui la variable "myform" qui récupère les valeurs de votre formulaire
  let myForm = JSON.stringify(body);
  fetch(API_URL, {
    method: 'POST',
    headers: myHeaders,
    body: myForm,
  }).then(res => {
    getComments();
  });
  console.log(myForm);
});
//9. Testez votre code, ouvrez votre index.html dans votre navigateur, ouvrez l'inspecteur d'élément, allez dans l'onglet "console". Maintenant, remplissez votre formulaire avec les valeurs demandées (l'auteur, et le commentaire). Clickez sur le bouton submit, une erreur est elle renvoyée? Si non allez dans l'onglet network et vérifier le statut de votre requête, si il est défini sur 200 c'est que votre requête a fonctionné!
getComments();

// 10. Maintenant, créez une méthode fetch qui va aller récupérer toutes les données de l'API, comme la semaine dernière. Elle va vous retourner un tableau d'objets. Pour chaque élément de ce tableau, créez dynamiquement une div pour afficher le commentaire dans votre index.html
