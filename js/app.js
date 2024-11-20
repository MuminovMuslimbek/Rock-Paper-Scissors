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
const btn = document.querySelectorAll('.btn')
const play = document.querySelector('.play')
const play_res = document.querySelector('.play_res')
const again = document.querySelectorAll('.again')
const btnResult = document.querySelectorAll('.btnResult')
const resImg = document.querySelector('.resImg')
const btnImg = document.querySelectorAll('.btnImg')
const randomImg = document.querySelector('.randomImg')
const resTitle = document.querySelector('.resTitle')
const count = document.querySelector('.count')

function randomImgFunc() {
    const randomIndex = Math.trunc(Math.random() * btnImg.length);
    const randomImage = btnImg[randomIndex];
    return randomImage.getAttribute('src')
}

function getAtributForIndex(index) {
    return btnImg[index].getAttribute('src');
}

function changeTitle(title) {
    resTitle.innerHTML = title
}

const btnResImg1 = 'images/paper.png'
const btnResImg2 = 'images/scissors.png'
const btnResImg3 = 'images/rock.png'

btn.forEach((button, index) => {
    button.addEventListener('mouseup', function() {
        play.style.display = 'none';
        play_res.style.display = 'flex';
        resImg.setAttribute('src', getAtributForIndex(index));
        randomImg.setAttribute('src', randomImgFunc())
        const resImgSrc = resImg.getAttribute('src')
        const randomImgSrc = randomImg.getAttribute('src')
        if (resImgSrc == btnResImg1 && randomImgSrc == btnResImg1 ||
            resImgSrc == btnResImg2 && randomImgSrc == btnResImg2 ||
            resImgSrc == btnResImg3 && randomImgSrc == btnResImg3
        ) {
            changeTitle('You tied')
        } else if (resImgSrc == btnResImg1 && randomImgSrc == btnResImg2 ||
            resImgSrc == btnResImg2 && randomImgSrc == btnResImg3 ||
            resImgSrc == btnResImg3 && randomImgSrc == btnResImg1
        ) {
            changeTitle('You lose')
            count.innerHTML--
        } else {
            changeTitle('you win')
            count.innerHTML++
        }
    });
});

again.forEach((againBtn) => {
    againBtn && againBtn.addEventListener('click', function() {
        play.style.display = 'flex';
        play_res.style.display = 'none';
    });
});