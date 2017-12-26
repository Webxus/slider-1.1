const searchElement = document.getElementById('slider');

const searchImg = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/airmax.png'];

let i = 0;

setInterval(() => {
    searchElement.src = searchImg[i];
   i === searchImg.length - 1 ? i = 0 : i++;
  }, 5000
)