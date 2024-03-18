const wilderInfo = require("C:/Users/oubft/WildCode/HTML/NODE/informations.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Bonjour je m'appelle ${wilderInfo.nom} et je suis au ${wilderInfo.campus} campus !`,
  })
);
