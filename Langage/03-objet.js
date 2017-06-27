// 1 - En JS on manipule bcp d'objets d'existant
console.log(typeof Math); // object
console.log(typeof console); // object
console.log(typeof process); // object
console.log(typeof document); // undefined

// 2 - Les objets sont extensibles
console.log(typeof Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(typeof Math.sum); // function
console.log(Math.sum('1', '2')); // 12
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3
delete Math.sum;
console.log(typeof Math.sum); // undefined

// 3 - Il y a 2 syntaxe pour accéder aux clés d'un objet
console.log(Math.random());
console['log'](Math['random']());

// 4 - Pour créer un objet ponctuel utiliser object literal
const contact = {
  prenom: 'Romain',
  hello: function() {
    return 'Bonjour je suis ' + this.prenom;
  },
};

console.log(contact.prenom);
console.log(contact.hello());

// 5 - Boucler sur les clés (for .. in)
for (let prop in contact) {
  console.log(prop);
  console.log(contact[prop]);
}

// 6 - Si besoin récurrent d'un certain format d'objet : fonction constructeur
const Voiture = function(marque, modele) {
  this.marque = marque;
  this.modele = modele;
};

const clio = new Voiture('Renault', 'Clio');
console.log(typeof clio); // object
console.log(typeof Voiture); // function
console.log(clio.marque); // Renault

// 7 - Ajouter des méthodes via une Closure (Mauvaise Pratique)
var Contact = function(prenom) {

  this.hello = function () {
    return 'Bonjour je suis ' + prenom;
  };
};

var romain = new Contact('Romain');
console.log(romain.hello());

var jean = new Contact('Jean');
console.log(jean.hello());

console.log(jean.hello === romain.hello); // false

// 7 - Ajouter des méthodes via le prototype (Bonne Pratique)
var Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function () {
  return 'Bonjour je suis ' + this._prenom;
};

var romain = new Contact('Romain');
console.log(romain.hello());

var jean = new Contact('Jean');
console.log(jean.hello());

console.log(jean.hello === romain.hello); // true
