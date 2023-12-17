var currentImageIndex = 0;
    var images = document.querySelectorAll('.gallery img');
    var modal = document.getElementById('myModal');

    function openImageModal(img) {
        // Obtém o índice da imagem clicada
        currentImageIndex = Array.from(images).indexOf(img);

        // Exibe o modal
        modal.style.display = 'flex';

        // Define a imagem do modal como a imagem clicada
        modal.getElementsByClassName('modal-content')[0].src = img.src;
    }

    function closeImageModal() {
        // Fecha o modal
        modal.style.display = 'none';
    }

    function stopPropagation(event) {
        // Impede a propagação do evento de clique dentro do modal
        event.stopPropagation();
    }

    // Função para navegar para a próxima imagem na galeria
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modal.getElementsByClassName('modal-content')[0].src = images[currentImageIndex].src;
    }

    // Função para navegar para a imagem anterior na galeria
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modal.getElementsByClassName('modal-content')[0].src = images[currentImageIndex].src;
    }

    // Adiciona event listeners para navegação com as setas do teclado
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'flex') {
            if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });