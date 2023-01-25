const btnId = document.getElementById('btn');
const flashCard = document.querySelector('.popup-flashCard');
const close = document.querySelector('.close');

btnId.addEventListener('click',function(){
  flashCard.classList.add('active')
})


close.addEventListener('click',function(){
  flashCard.classList.remove('active');
})
