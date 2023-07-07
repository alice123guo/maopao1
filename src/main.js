const a1 = document.querySelector('.level1')
const a2 = document.querySelector('.level2')
const a3 = document.querySelector('.level3')
const a4 = document.querySelector('.level4')
const a5 = document.querySelector('.level5')
const a6 = document.querySelector('.level6')
const a7 = document.querySelector('.level7')


let n = 1
const fn= (e) => {
    const t  = e.currentTarget 
    setTimeout(() => {
          t.classList.remove('x')  
    },  n * 1000);
    n+=1
}
const fm = (e) => {
    const t  = e.currentTarget 
    setTimeout(() => {
          t.classList.add('x')  
    },  n * 1000);
    n+=1
}

a1.addEventListener('click', fn,true) 
a1.addEventListener('click', fm)
a2.addEventListener('click', fn,true)
a2.addEventListener('click',fm)
a3.addEventListener('click', fn,true) 
a3.addEventListener('click', fm)
a4.addEventListener('click', fn,true)
a4.addEventListener('click',fm)
a5.addEventListener('click', fn,true) 
a5.addEventListener('click', fm)
a6.addEventListener('click', fn,true)
a6.addEventListener('click',fm)
a7.addEventListener('click', fn,true) 
a7.addEventListener('click', fm)