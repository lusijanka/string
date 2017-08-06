var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops'.toUpperCase();
console.log(dinosaur);
var newText = text.replace('Velociraptor', dinosaur);
console.log(newText);
var halfText = newText.substr(0, newText.length/2);
console.log(halfText);