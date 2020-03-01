var menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => document.querySelector('body').classList.add('menu-active')  );

document.addEventListener('keyup', e => {

    if(e.key === "Escape") {

        document.querySelector('body').classList.remove('menu-active');
    }
});