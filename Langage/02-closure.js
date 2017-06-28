
const logClosure = function(msg) {
  // Portée de closure (portée sauvegardée automatiquement)
  // 2 conditions :
  // 1 - 2 fonctions imbriquées
  // 2 - la fonction interne puisse être appelée en dehors
  return function() {
    console.log(msg);
  };
};

const logHello = logClosure('Hello');

logHello();
logHello();
logHello();

/*
const createButton = function(value) {
  let button = document.createElement('button');
  button.innerHTML = value;
  button.addEventListener('click', function(e) {
    console.log(value);
    e.target.innerHTML = value++;
  });
  return button;
}

const monBouton = createButton('Clic moi');
 */

for (var i=0; i<3; i++) {
  setTimeout(function onTimeout() {
    console.log(i);
  }, 1000)
}

for (var i=0; i<3; i++) {
  setTimeout(logClosure(i), 1000)
}

