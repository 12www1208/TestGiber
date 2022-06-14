

//фиксированое меню ---------------------------------------
const nevbar = document.querySelector(".nevbar")
//------------------------------------------------------
const swiper = new Swiper('.swiper', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},


})
// анимацыи -------------------------------------------
const us  = document.querySelectorAll('.au')
const header__img = document.querySelector('.header__img')
const footer__img = document.querySelector(".footer__img")
var animOne = 0
//---------------------------------------------------
// preloader---------------------------------------
const preloader = document.querySelector(".preloader")
//-----------------------------------------------
//scrollTopButton-------------------------------
const scorllTopButton = document.querySelector("#scrollTopButton")
//-----------------------------------------------
//Telegram-----------------------------------
const form = document.querySelector('#tg')
const TOKEN = "5300132900:AAHmdXDzcUyVWb3EGWfNtqUicxRl4zH-has"
const CHAT_ID = "-1001588318211"
const url_api = `https://api.telegram.org/bot${TOKEN}/sendMessage`
//--------------------------------------
function menu__fixed() {
	if (pageYOffset >= 540) {
		nevbar.classList.add("scroll__fixed")
	}
	else {
		nevbar.classList.remove("scroll__fixed")
	}
}

function scrollTopButtonN() {
	if (pageYOffset >= 1135){
		scorllTopButton.style.display = "block"
	}
	else {
		scorllTopButton.style.display = "none"
	}
}

function scrollTop() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

function anime_au() {
	if (pageYOffset >= 1610 && animOne == 0) {
		anime({
			targets: us,
			translateX: 100,
			direction: 'alternate',
			duration: 2000,
			easing: 'linear',
		})

		animOne = 1
		console.log(animOne)

	}
}

function animationHeader__img() {
	anime({
		targets: header__img,
		rotate: "1turn",
		direction: "alternate",
		duration: 500,
		easing: 'linear'


	})
}



function preloaderN() {
	setTimeout(function() {
		if(!preloader.classList.contains("done")) {
			preloader.classList.add("done")
		}
	}, 2000)
}



setInterval(animationHeader__img, 2000)
window.addEventListener("scroll", anime_au)
window.addEventListener("scroll", menu__fixed)
window.addEventListener("scroll", scrollTopButtonN)
scrollTopButton.addEventListener("click", scrollTop)
form.addEventListener('submit', function(e) {
	e.preventDefault()
	let message = `<b>Предложение с сайта</b>\n`
	message += `<b>Отправитель ${this.name.value}</b>\n`
	message += `<b>Предложение ${this.poz.value}</b>`
	axios.post(url_api, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
	.then((res) => {
		this.name.value = ""
		this.poz.value = ""
	})
	.catch((err) => {
		console.warn(err)
	})
	.finally(() => {
		alert("Сообщение отправлено")
	})
})
document.body.onload = preloaderN()

