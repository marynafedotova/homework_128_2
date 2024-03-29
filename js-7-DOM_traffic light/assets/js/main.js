let currentLightIndex = 2;
const lights = document.querySelectorAll('.light');
changeLight();
function changeLight() {
  lights[currentLightIndex].classList.remove('active');
  currentLightIndex = (currentLightIndex + 1) % lights.length;
  lights[currentLightIndex].classList.add('active');
  updateColor();
}
function updateColor() {
  lights.forEach(light => {
    light.classList.remove('red', 'yellow', 'green');
  });
  if (currentLightIndex === 0) {
    lights[currentLightIndex].classList.add('red');
  } else if (currentLightIndex === 1) {
    lights[currentLightIndex].classList.add('yellow');
  } else {
    lights[currentLightIndex].classList.add('green');
  }
}
updateColor();