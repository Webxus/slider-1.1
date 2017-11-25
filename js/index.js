const searchElement = document.getElementById('slider');

const searchImg = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/airmax.png', 'i/spinner.gif'];

let i = 0;
setInterval(() => {
	if (i < searchImg.length) {
		searchElement.src = searchImg[i++];
	} else {
		i = 0;
	}
}, 5000)