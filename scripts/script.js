//Инициализация свайпера
let swiper;
let check = false;

function brandSwiper() {
	if (window.innerWidth < 768) {
		if (!check) {
			check = true;
			swiper = new Swiper('.swiper', {
				direction: 'horizontal',
				effect: 'slide',
				slidesPerView: 'auto',
				centeredSlides: true,
				centeredSlidesBounds: true,
				spaceBetween: 16,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
	} else if (check) {
		swiper.destroy();
		check = false;
	}
}

brandSwiper();
window.addEventListener("resize", brandSwiper);

//Expand button

const swiperContainerMain = document.querySelector('.swiper-container__main');
const expandButton = swiperContainerMain.querySelector('.expand-button');
const swiperContainerList = swiperContainerMain.querySelector('.swiper-container__list');

expandButton.addEventListener('click', function () {
	expandButton.classList.toggle('button-open');
	swiperContainerList.classList.toggle('swiper-container__list--opened');
	
	if (expandButton.classList.contains('button-open')) {
		expandButton.textContent = 'Скрыть';
	} else {
		expandButton.textContent = 'Показать все';
	}
});