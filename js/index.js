const searchElement = document.getElementById('slider');

const searchImg = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/airmax.png'];

let i = 0;
setInterval(() => {
	if (i < searchImg.length) {
		searchElement.src = searchImg[i];
		i++;
	}
}, 1000)

//
// ------------- Почему так не работает? 
//
// function slide() {
// 	clearInterval(slide);
	
// 	slide = setInterval(function () {
// 		let i = 0;
// 		if (i < searchImg.length) {
// 			searchElement.src = searchImg[i];
// 			i++;
// 		}
// 	} , 1000);
// }

// slide();
