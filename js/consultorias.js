
window.addEventListener('load',()=>{
   
    var app = document.getElementById('writer');
    var typewriter = new Typewriter(app, {
        loop: true
    });
    typewriter.typeString('¡Potencia tu empresa con empleados mas capacitados!')
        .pauseFor(2500)
        .deleteAll()
        .pauseFor(2500)
        .start();
})