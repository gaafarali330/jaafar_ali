let categories = document.querySelector('.categories').children;
let divCats = document.querySelector('.divcats').children;

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', function() {
        for (let j = 0; j < categories.length; j++) {
            categories[j].classList.remove('works-active')
        }
        this.classList.add('works-active')
        let catTargetData = this.getAttribute('data-target');

        for (let k = 0; k < divCats.length; k++) {
            divCats[k].classList.add('displayFalse')
            if (divCats[k].getAttribute('data-item') === catTargetData) {
                divCats[k].classList.remove('displayFalse')

            }
        }
    });
}