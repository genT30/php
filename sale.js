const left = document.querySelector('.left');
const right = document.querySelector('.right');
const parent = document.querySelector('.parent');

left.addEventListener('mouseenter', () => parent.classList.add('hover-left'));
left.addEventListener('mouseleave', () => parent.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => parent.classList.add('hover-right'));
right.addEventListener('mouseleave', () => parent.classList.remove('hover-right'));
