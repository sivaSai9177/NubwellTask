const wrapper = document.getElementById('wrapper');
const configBtns = document.querySelectorAll('.config');
const connectBtns = document.querySelectorAll('.connect');
const aside = document.querySelector('aside');
const moreCards = document.querySelector('.more-cards');
const cancel = document.getElementById("cancel");
const closeBtn = document.getElementById("bug");
const animationDotes = document.querySelectorAll('.dotted');

var width = 484 + "px";
configBtns.forEach(configBtn => {
    configBtn.addEventListener('click', function () {;
        aside.style.width = width;
    });
});

var droppedItem = document.querySelectorAll('.dropCard');


connectBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        moreCards.classList.add('toggleHeight');
        animationDotes.forEach(dot => {
            dot.style.display = "block";
        });
        setTimeout(() => {
            closeBtn.style.display = 'flex';
        }, 200)
        dropCard.forEach(card => {
            card.style.visibility = "visible";
            card.style.opacity = 1;
            card.style.transition = `all 0.3s ease`;
        })
        for (let i = 0; i < droppedItem.length; i++){
            if (!droppedItem[i].classList.contains('dragged')) {
                droppedItem[i].style.visibility = 'visible';
            }
        }
    });
});
closeBtn.onclick = () => {
    moreCards.classList.remove('toggleHeight');

    setTimeout(() => {
        closeBtn.style.display = 'none';
    }, 200)


    for (let i = 0; i < droppedItem.length; i++) {
        if (droppedItem[i].classList.contains("dragged")) {
            droppedItem[i].style.visibility = "visible";
            var visible = true;
            if (!droppedItem[i].classList.contains('dragged')) {
                 droppedItem[i].style.visibility = 'hidden';
                 droppedItem[i].style.opacity = 0;
                 droppedItem[i].style.transition = `all 0.3s ease`;
             }
        } else if (!droppedItem[i].classList.contains('dragged')) {
            droppedItem[i].style.visibility = 'hidden';
        }
    }
}



cancel.addEventListener('click', function () {
    wrapper.style.width = `100%`;
    aside.style.width = 0;
    console.log('hey');
});




const cards = document.querySelectorAll('.card');

const dropCard = document.querySelectorAll('.dropCard');
var draggedItem;

for (let i = 0; i < cards.length; i++){
    var items;

    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
        })
    });
    
    dropCard.forEach(drop => {
        drop.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.target.style.border = `2px dashed rgba(33, 150, 243, 0.2)`;
        });
        drop.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.target.style.border = `none`;
        });
        drop.addEventListener('drop', (e) => {
            e.target.appendChild(draggedItem);
            e.target.style.border = `none`;
            e.target.style.display = `block`;
            e.target.classList.add('dragged');
            var dotted = e.target.children[0];
            dotted.style.display = "block";
            dotted.style.opacity = 1;
        })
    })
};










