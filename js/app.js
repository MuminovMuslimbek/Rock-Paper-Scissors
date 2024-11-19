// *Modal:
const btnRules = document.querySelector('.btnRules')
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modalBg')
const deleteModal = document.querySelectorAll('.deleteModal')

btnRules && btnRules.addEventListener('click', function() {
    modal.style.display = 'flex'
    modalBg.style.display = 'flex'
})

deleteModal.forEach((button) => {
    button.addEventListener('click', function() {
        modal.style.display = 'none'
        modalBg.style.display = 'none'
    })
});

modalBg && modalBg.addEventListener('dblclick', function() {
    modal.style.display = 'none'
    modalBg.style.display = 'none'
})


// !Count:
const count = document.querySelector('.count')
const btn = document.querySelectorAll('.btn')
const play = document.querySelector('.play')
const play_res = document.querySelector('.play_res')
const again = document.querySelectorAll('.again')
const btnResult = document.querySelectorAll('.btnResult')
const resImg = document.querySelector('.resImg')
const btnImg = document.querySelectorAll('.btnImg')


function getAtributForImage(index) {
    return btnImg[index].getAttribute('src')
}

btn.forEach((button, index) => {
    button.addEventListener('mouseup', function() {
        play.style.display = 'none'
        play_res.style.display = 'flex'
        const setImg = getAtributForImage(index)
        resImg.setAttribute('src', setImg);
    })
})

again.forEach((againBtn) => {
    againBtn && againBtn.addEventListener('click', function() {
        play.style.display = 'flex'
        play_res.style.display = 'none'
    })
})