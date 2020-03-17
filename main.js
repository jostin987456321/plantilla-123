let slider_index = 0;


function show_slide(index) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot-nav");

    if(index > slides.length) slider_index = 0;
    if(index < 0) slider_index = slides.length -1; 
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active-dot');

        slides[slider_index].style.display = 'block';
    dots[slider_index].classList.add('active-dot');
    }
 };


 show_slide(slider_index);

 



 document.querySelector('#arrow-prev').addEventListener('click' , () =>{
     show_slide(--slider_index);
 });

 document.querySelector('#arrow-next').addEventListener('click' , () =>{
    show_slide(++slider_index);
});


document.querySelectorAll('.dot-nav').forEach((Element) =>{
    Element.addEventListener('click', function () {
    let dots = Array.prototype.slice.call(this.parentElement.children),
        dot_index = dots.indexOf(Element); 
        show_slide(slider_index = dot_index);
    })
});  



setInterval(() =>{
    show_slide(++slider_index)
}, 4000);




// slider 2 comienzo



let contenedor = document.querySelector(".slider-texto-item");
let btn_izquierda = document.getElementById("icono-izquierda");
let btn_derecha = document.getElementById("icono-derecha");


btn_izquierda.addEventListener("click", desaparecer);

btn_derecha.addEventListener("click", aparecer);

function desaparecer(){
    btn_izquierda.style.display = "none";
    btn_izquierda.style.transition = "0.5s";
}

function aparecer(){
    btn_derecha.style.display = "block";
    btn_derecha.style.transition = "0.5s";
}














