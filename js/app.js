import { btn, play, play_res, again, resImg, btnImg, randomImg, resTitle, btnRules, modal, modalBg, deleteModal, count, btnResImg1, btnResImg2, btnResImg3 } from './querySelectors.js';

// *Modal:
function modalStyle(name, specialty) {
    name.style.display = specialty
}

btnRules && btnRules.addEventListener('click', function() {
    modalStyle(modal, 'flex')
    modalStyle(modalBg, 'flex')
})

deleteModal.forEach((button) => {
    button.addEventListener('click', function() {
        modalStyle(modal, 'none')
        modalStyle(modalBg, 'none')
    })
});

modalBg && modalBg.addEventListener('dblclick', function() {
    modalStyle(modal, 'none')
    modalStyle(modalBg, 'none')
})

document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
        modalStyle(modal, 'none')
        modalStyle(modalBg, 'none')
    }
})

// !Count:
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
            if (count.innerHTML > 0) {
                count.innerHTML--
            }
        } else {
            changeTitle('you win')
            count.innerHTML++
        }
    });
});

again.forEach((againBtn) => {
    againBtn && againBtn.addEventListener('click', function() {
        modalStyle(play, 'flex')
        modalStyle(play_res, 'none')
    });
});