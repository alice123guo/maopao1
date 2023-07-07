const a1 = document.querySelector('.level1')
const a2 = document.querySelector('.level2')
const a3 = document.querySelector('.level3')
const a4 = document.querySelector('.level4')
const a5 = document.querySelector('.level5')
const a6 = document.querySelector('.level6')
const a7 = document.querySelector('.level7')

a1.addEventListener('click', (e) => {
  e.currentTarget.classList.remove('x');
})