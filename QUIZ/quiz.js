

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const images = ["/img/Claw.png", "/img/Cosmo.png", "/img/Cross2.png", "/img/V.png", "/img/vU2.png", "/img/SOH.png", "/img/tear.png", "/img/tear.png", ];


form.addEventListener('submit', e=> {
  e.preventDefault();
  let score = 0;
  // user answrs
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value]


  result.classList.remove('none');


  // Decide what product to show
  if (userAnswers[0] === 'A' && userAnswers[1] === 'A' && userAnswers[2] === 'A') {
    showProductImage(images[0]);
  }
  else if (userAnswers[0] === 'B' && userAnswers[1] === 'B' && userAnswers[2] === 'B') {
    showProductImage(images[1]);
  }
  else if (userAnswers[0] === 'A' && userAnswers[1] === 'B' && userAnswers[2] === 'A') {
    showProductImage(images[3]);
  }
  else if (userAnswers[0] === 'A' && userAnswers[1] === 'B' && userAnswers[2] === 'B') {
    showProductImage(images[4]);
  }


});

function showProductImage(imagePath){
  document.getElementById("product-image").src = imagePath;

}
showProductImage(images[0]);

