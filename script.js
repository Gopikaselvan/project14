const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['pink','blue','violet','grey','red','orange','black','brown','green','purple'];
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex]
});