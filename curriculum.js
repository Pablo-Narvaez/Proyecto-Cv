alert("Bienvenidos al Proyecto Final de Pablo Narvaez.");

var tituloOriginal = document.getElementById("titulo").textContent;
var textoOriginal = document.getElementById("texto").textContent;

function cambiarContenido() {
    document.getElementById("titulo").textContent = "Objetivos";
    document.getElementById("texto").textContent = "Desarrollar mis habilidades en programación de aplicaciones móviles \
    y trabajar en el desarrollo de soluciones móviles innovadoras.\
    Ampliar mi conocimiento en programación orientada a objetos y utilizarlo para mejorar el diseño y la implementación de aplicaciones de software.\
        Aprender nuevas tecnologías y herramientas para mejorar la eficiencia en el desarrollo de software y contribuir al crecimiento empresarial."
};

function restaurarContenido() {
    document.getElementById("titulo").textContent="Resumen Profesional";
    document.getElementById("texto").textContent= "Soy una ingeniera en sistemas con 5 años de experiencia en desarrollo de software.\
     Me especializo en lenguajes de programación como Java y Python, y tengo experiencia en bases de datos SQL y NoSQL.\
     He trabajado en proyectos para clientes de diferentes industrias, incluyendo finanzas, salud y educación."
}
