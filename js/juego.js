const width = 400;
const height = 400;


let target = {

  x:getRandomNumber(width),
  y:getRandomNumber(height)
};

let $map = document.getElementById('mapa');
let $distance = document.getElementById('distance');
let $clicks = 0;
$map.addEventListener('click', function (e) {

  $clicks++;
  let distance = getDistance(e, target);
  let distancehint = getDistanceHint(distance);

  $distance.innerHTML = `<h1>${distancehint}</h1>`;
  console.log(distance);

  if (distance < 2000 ) {
    alert(`Bien echo pirata! has encontrado el tesoro en ${(clicks)} clicks`);
    location.reload();
  }
})
