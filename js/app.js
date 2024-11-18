// *Modal:
const btnRules = document.querySelector('.btnRules')
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modalBg')
const deleteModal = document.querySelectorAll('.deleteModal')

btnRules && btnRules.addEventListener('click', function() {
    modal.style.display = 'flex'
    modalBg.style.display = 'flex'
})

modalBg && modalBg.addEventListener('click', function() {
    modal.style.display = 'none'
    modalBg.style.display = 'none'
})

deleteModal.forEach((button) => {
    button.addEventListener('click', function() {
        modal.style.display = 'none'
        modalBg.style.display = 'none'
    })
});

// !Count:
const count = document.querySelector('.count')
const btn = document.querySelectorAll('.btn')

btn.forEach((btn) => {
    btn.addEventListener('click', function() {
        count.innerHTML++
    })
})