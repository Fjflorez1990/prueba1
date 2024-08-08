const btnabrirModal =
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal =
document.querySelector("#modal");
btnabrirModal.addEventListener("click", ()=>{modal.showModal();})
btnCerrarModal.addEventListener("click",()=>{modal.close();})

const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');
li.forEach( ( cadaLi , i )=>{ 
    li[i].addEventListener('click',()=>{
        li.forEach(( cadaLi , i )=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    });

});

/*let sliderInner =
document.querySelector(".slider--inner");
let index = 1;
setInterval(function() {
    let percentage = index * -100;
    sliderInner.style.transform = 
    "translateX"(" + percentage +"%);
    index++;
}, 1000);*/