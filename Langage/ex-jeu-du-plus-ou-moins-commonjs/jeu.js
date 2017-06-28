const readline = require('readline');
const Random = require('./random');

// 2 - Utiliser le mot clé class
// http://es6-features.org/#ClassDefinition
class Jeu {
  constructor(options = {}) {
    // 3 - Utiliser un default param
    // http://es6-features.org/#DefaultParameterValues
    //options = options || {};

    // 4 - Destructurer options en et max avec valeur par défaut
    // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
    //const min = options.min || 0;
    //const max = (options.max === undefined) ? 100 : options.max;
    const { min = 0, max = 100 } = options;

    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

  }

  jouer() {
    if (this._essais.length) {
      // 5 - Template string
      // http://es6-features.org/#StringInterpolation
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }

    this._rl.question('Saisir un entier : ', answer => {

      // 6 - utiliser parseInt et isNaN de Number
      // http://es6-features.org/#StringInterpolation
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

module.exports = Jeu;
