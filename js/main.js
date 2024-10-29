document.addEventListener('DOMContentLoaded', function() {
    const multipleItemCarousel = document.querySelector("#carouselExampleControls");
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    });

    function handleCarousel() {
        const carouselInner = multipleItemCarousel.querySelector('.carousel-inner');
        const carouselItems = multipleItemCarousel.querySelectorAll('.carousel-item');
        
        if (window.matchMedia("(min-width: 576px)").matches) {
            // Configuración para pantallas grandes
            carouselItems.forEach(item => {
                item.style.display = 'block';
                item.style.flex = '0 0 calc(100% / 3)';
            });

            // Configurar navegación
            const prevButton = multipleItemCarousel.querySelector('.carousel-control-prev');
            const nextButton = multipleItemCarousel.querySelector('.carousel-control-next');
            
            let scrollPosition = 0;
            
            nextButton.addEventListener('click', () => {
                const itemWidth = carouselItems[0].offsetWidth;
                const maxScroll = carouselInner.scrollWidth - (itemWidth * 3);
                
                if (scrollPosition < maxScroll) {
                    scrollPosition += itemWidth;
                    carouselInner.scroll({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            });

            prevButton.addEventListener('click', () => {
                const itemWidth = carouselItems[0].offsetWidth;
                
                if (scrollPosition > 0) {
                    scrollPosition -= itemWidth;
                    carouselInner.scroll({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            });
        } else {
            // Configuración para móviles
            carouselItems.forEach(item => {
                item.style.display = '';
                item.style.flex = '';
            });
            multipleItemCarousel.classList.add('slide');
        }
    }

    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    handleCarousel();
    window.addEventListener('resize', handleCarousel);
});