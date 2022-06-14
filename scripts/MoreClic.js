const butonCkick = document.getElementById('mainClik')
const obm = document.getElementById('obm')
const plus = document.getElementById('plus')
const plusCoin = document.getElementById('plusCoin')
const preloader = document.querySelector('.preloader')

var textClick = document.getElementById('textClik')
var textCoins = document.getElementById('conis')
var textPlus = document.getElementById('plusID')
var PCoinsID = document.getElementById('PCoinsID')

var i = 0
var coin = 0
var plusI = 0
var PCoins = 0


function preloaderN() {
	setTimeout(function (){
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done')
		}
	}, 2000)
}


butonCkick.addEventListener('click', function () {
  if (plusI == 1) {
    i += 2
    textClick.innerText = i
  } else if (plusI == 2) {
    i += 3
    textClick.innerText = i
  } else {
    i++
    textClick.innerText = i
  }
})

obm.addEventListener('click', function () {
  if (i >= 10) {
    if (PCoins == 1) {
      alert('Обмен совершон.')
      i = i - 10
      textClick.innerText = i
      coin += 2
      textCoins.innerText = coin
    } else if (PCoins == 2) {
      alert('Обмен совершон.')
      i = i - 10
      textClick.innerText = i
      coin += 3
      textCoins.innerText = coin
    } else {
      alert('Обмен совершон.')
      i = i - 10
      textClick.innerText = i
      coin++
      textCoins.innerText = coin
    }
  } else {
    var a = i
    a = 10 - a
    alert('Невозможно обменять, вам не хватает: ' + a)
  }
})

plus.addEventListener('click', function () {
  var p = 2
  if (coin >= p) {
    alert('Улучшение создано')
    coin = coin - p
    textCoins.innerText = coin
    plusI++
    textPlus.innerText = plusI
    p += 2
  } else {
    var a = p - coin
    alert('Вам не хватает монеток: ' + a)
  }
})

plusCoin.addEventListener('click', function () {
  var p = 3
  if (coin >= p) {
    alert('Улутшение создоно')
    coin = coin - 3
    textCoins.innerText = coin
    PCoins++
    PCoinsID.innerText = PCoins
    p += 3
  } else {
    var a = p - coin
    alert('Вам не хватает: ' + a)
  }
})

document.body.onload = preloaderN()
