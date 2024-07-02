document.addEventListener('DOMContentLoaded', function() {
    var currentSlideMain = 0;
    var currentSlideAnimal = 0;
    var slidesMain = document.querySelectorAll('.slide-main');
    var slidesAnimal = document.querySelectorAll('.slide-animal');
    var textBlocksMain = document.querySelectorAll('.slider-main .text-block');
    var textBlocksAnimal = document.querySelectorAll('.slider-animal .text-block');

    // Скрываем все слайды и текстовые блоки, кроме первого
    for (var i = 1; i < slidesMain.length; i++) {
        slidesMain[i].classList.add('hidden');
    }
    for (var i = 1; i < slidesAnimal.length; i++) {
        slidesAnimal[i].classList.add('hidden');
    }

    function updateVisibility(items, currentSlide) {
        items.forEach(function(item, index) {
            item.classList.toggle('visible', index === currentSlide);
            item.classList.toggle('hidden', index !== currentSlide);
        });
    }

    function changeSlideMain(n) {
        // Обновляем индекс текущего слайда
        currentSlideMain = (n + slidesMain.length) % slidesMain.length;
        // Обновляем видимость слайдов и текстовых блоков
        updateVisibility(slidesMain, currentSlideMain);
        updateVisibility(textBlocksMain, currentSlideMain);
    }

    function changeSlideAnimal(n) {
        // Обновляем индекс текущего слайда
        currentSlideAnimal = (n + slidesAnimal.length) % slidesAnimal.length;
        // Обновляем видимость слайдов и текстовых блоков
        updateVisibility(slidesAnimal, currentSlideAnimal);
        updateVisibility(textBlocksAnimal, currentSlideAnimal);
    }

    document.querySelector('.slider-main .prev').addEventListener('click', function() {
        changeSlideMain(currentSlideMain - 1);
    });
    document.querySelector('.slider-main .next').addEventListener('click', function() {
        changeSlideMain(currentSlideMain + 1);
    });

    document.querySelector('.slider-animal .prev').addEventListener('click', function() {
        changeSlideAnimal(currentSlideAnimal - 1);
    });
    document.querySelector('.slider-animal .next').addEventListener('click', function() {
        changeSlideAnimal(currentSlideAnimal + 1);
    });

	// Функция для перехода к определенному животному на странице animal.html
	function goToAnimal(animalId) {
	  window.location.href = 'animal.html#' + animalId;
	}

	// Добавляем обработчики событий для текстовых блоков животных
    var animalLinks = document.querySelectorAll('.slider-animal .text-block-animal a');
    animalLinks.forEach(function(link, index) {
        link.addEventListener('click', function() {
            goToAnimal('animal' + (index + 1));
        });
    });

    // Инициализация видимости слайдов и текстовых блоков
    updateVisibility(slidesMain, currentSlideMain);
    updateVisibility(textBlocksMain, currentSlideMain);
    updateVisibility(slidesAnimal, currentSlideAnimal);
    updateVisibility(textBlocksAnimal, currentSlideAnimal);
});

// JavaScript для отображения кнопки при прокрутке страницы
window.addEventListener('scroll', function() {
    var goTopButton = document.querySelector('.go-top');
    if (window.pageYOffset > 100) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});

// JavaScript для плавной прокрутки наверх при нажатии на кнопку
document.querySelector('.go-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

