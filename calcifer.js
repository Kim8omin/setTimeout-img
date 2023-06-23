const $calcifer = document.querySelector ('#calcifer');
const img = "./collage.png";
$calcifer.style.background=`url(${img})0 0`; //흥미가 생긴 캘시퍼 
$calcifer.style.backgroundSize='auto 200px';

const calciferX = {
    first : '0', //흥미
    second: '303px', //어벙
    third: '600px',   //놀란
};

let firstimg = 'first';
const changeImg =() => {
    if (firstimg === 'second') {
        firstimg = 'first';
    } else if (firstimg === 'first') {
        firstimg = 'third';
    } else if(firstimg === 'third'){
        firstimg = 'second';
    }
    $calcifer.style.background=`url(${img}) ${calciferX[firstimg]} 0`; 
    $calcifer.style.backgroundSize='auto 200px';

    setTimeout(changeImg, 1000);
}
setTimeout(changeImg, 1000);


