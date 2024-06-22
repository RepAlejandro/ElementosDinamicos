document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";

const backToTopBtn = document.getElementById('arriba');
backToTopBtn.style.transition = "opacity 0.5s ease";
backToTopBtn.style.opacity = "0"; // Inicialmente oculto

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    switch (true) {
        case (scrollPosition > 750):
            document.body.style.backgroundColor = '#f08080';
            document.body.style.color = 'black';
            break;

        case (scrollPosition > 200):
            document.body.style.backgroundColor = '#FFDB58'; 
            document.body.style.color = 'black';   
            break;

        default:
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            break;
    }

    // Muestra el botón "Volver arriba" después de desplazarse 200px
    if (scrollPosition > 200) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.opacity = "0";
        setTimeout(() => {
            backToTopBtn.style.display = "none";
        }, 500); // Coincide con la transición de opacidad
    }
});

// Cuando el usuario hace clic en el botón, vuelve al principio de la página
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});




document.getElementById('btn-herramientas').addEventListener('click', function() {
    const texto = document.getElementById('texto-herramientas');
    texto.classList.add('show');
    setTimeout(function() {
        texto.classList.remove('show');
    }, 3000);
});

document.getElementById('btn-cocina').addEventListener('click', function() {
    const texto = document.getElementById('texto-cocina');
    texto.classList.add('show');
    setTimeout(function() {
        texto.classList.remove('show');
    }, 3000);
});

document.getElementById('btn-filtracion').addEventListener('click', function() {
    const texto = document.getElementById('texto-filtracion');
    texto.classList.add('show');
    setTimeout(function() {
        texto.classList.remove('show');
    }, 3000);
});

document.getElementById('btn-sellado').addEventListener('click', function() {
    const texto = document.getElementById('texto-sellado');
    texto.classList.add('show');
    setTimeout(function() {
        texto.classList.remove('show');
    }, 3000); 
});

/* Para mostrar productos */
//Se hace la constante modal 
const myModal = new bootstrap.Modal(document.getElementById('promodal'));

// Se abre el modal al hacer clic en el botón o al presionar la tecla "w"
document.getElementById('abrirmodal').addEventListener('click', function() {
    myModal.show();
});

// Cerrar el modal al presionar la tecla "w"
document.addEventListener('keydown', function(event) {
    if (event.key === "w") {
        if (myModal._isShown) {
            myModal.hide();
        } else {
            myModal.show();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() { 
    // Esta función maneja el evento de presionar Enter en el campo de búsqueda
    function handleSearch(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            
            var searchInput = event.target.value.trim().toLowerCase(); // Obtener el valor del campo de búsqueda
            
            // Mapeo de términos de búsqueda a IDs de secciones
            var sectionMap = {
                'servicios': 'servicios',
                'productos': 'productos',
                'nosotros': 'nosotros',
                'promociones': 'promos',
                'contacto': 'contacto'
            };
            
            // Verifica si el término de búsqueda coincide con un ID de sección
            if (sectionMap[searchInput]) {
                var sectionId = sectionMap[searchInput];
                var section = document.getElementById(sectionId);
                
                // Verifica si la sección existe y está visible
                if (section) {
                    // Realiza el scroll hacia la sección escrita
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Limpia el campo de búsqueda después de la navegación
            event.target.value = '';
        }
    }
    
    // Obtiene el campo de búsqueda y asigna el evento keydown
    var searchInput = document.querySelector('nav form input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('keydown', handleSearch);
    }
});
