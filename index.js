document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('hide')
})

const technologies = document.querySelectorAll('.tech')

function checkIfOnScreen() {
    technologies.forEach(function (tech) {
        console.log(tech.getBoundingClientRect().top)
        if (tech.getBoundingClientRect().top < 550 && tech.getBoundingClientRect().top > -258) {
            // console.log('in')
            tech.classList.add('slideIn')
            tech.classList.remove('slideOut')
        } else {
            // console.log('out')
            tech.classList.remove('slideIn')
            tech.classList.add('slideOut')
        }
    })
    console.log('-------')
}

const header = document.querySelector('#header')
const nav = document.querySelector('#nav')

// function menuSticky() {
//     if (header.getBoundingClientRect().top)
// }


window.onscroll = function() {checkIfOnScreen(); sayHello()}
