
import menuCardsTpl from './templates/menu-card.hbs';
import cards from './menu.json';
import './styles.css';

//Определяем переменные

const checkbox = document.querySelector('#theme-switch-toggle');
const menuList = document.querySelector('.js-menu');
const body = document.querySelector('body');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

//добавили слушатель на чекбокс
checkbox.addEventListener('change', onChangeInput);

// функция, которая переключает тему
function onChangeInput(evt) {
    if (evt.target.checked) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
         
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        
        localStorage.setItem('Theme', Theme.LIGHT);
    };
}

// console.log(onChangeInput);

// функция, которая сохраняет тему после перезагрузки
actualTheme();

function actualTheme() {
    const savedTheme = localStorage.getItem('Theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            checkbox.checked = true;
        };
    }

}

// добавляем разметку
const cardsMarkup = menuCardsTpl(cards);

menuList.insertAdjacentHTML('afterbegin', cardsMarkup);




