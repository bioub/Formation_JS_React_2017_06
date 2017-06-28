// 1 - Utiliser les methods properties
// http://es6-features.org/#MethodProperties
const Random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
};

const readline = require('readline');

// 2 - Utiliser le mot clé class
// http://es6-features.org/#ClassDefinition
const Jeu = function(options) {
  // 3 - Utiliser un default param
  // http://es6-features.org/#DefaultParameterValues
  options = options || {};

  // 4 - Destructurer options en et max avec valeur par défaut
  // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
  const min = options.min || 0;
  const max = (options.max === undefined) ? 100 : options.max;
  this._entierAlea = Random.getIntInclusive(min, max);
  this._essais = [];

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

};

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // 5 - Template string
    // http://es6-features.org/#StringInterpolation
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question('Saisir un entier : ', answer => {

    // 6 - utiliser parseInt et isNaN de Number
    // http://es6-features.org/#StringInterpolation
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné');
    this._rl.close();
  });
};

const jeu = new Jeu({
  min: 2,
  max: 4,
});
jeu.jouer();
