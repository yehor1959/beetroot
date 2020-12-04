let addCartItemButtons = document.getElementsByClassName('product-box__btn');

for (let i = 0; i < addCartItemButtons.length; i++) {
    let button = addCartItemButtons[i];
    button.addEventListener('click', function() {
        updateQuatitynTotal()
        updateCardTotal();
    })
}

function updateCardTotal() {
    let cartRows = document.getElementsByClassName('product-box__item');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('qty__item')[0];
        let price = parseFloat(priceElement.innerText.replace('грн', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('red-info total')[0].innerText = total;
}

function updateQuatitynTotal() {
    let cartRows = document.getElementsByClassName('product-box__item');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('qty__item')[0];
        let price = parseFloat(priceElement.innerText.replace('грн', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity / price);
    }
    document.getElementsByClassName('red-info numbers')[0].innerText = total;
}

function changes() {
    let category = document.getElementById("food").value;
    if (category == 1) {
        document.getElementById("sixth").style.display = 'none';
        document.getElementById("seventh").style.display = 'none';
        document.getElementById("eighth").style.display = 'none';
        document.getElementById("ninth").style.display = 'none';
        document.getElementById("tenth").style.display = 'none';
        document.getElementById("eleventh").style.display = 'none';
        document.getElementById("twelvth").style.display = 'none';
    } else if (category == 2) {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'none';
        document.getElementById("tenth").style.display = 'none';
        document.getElementById("eleventh").style.display = 'none';
        document.getElementById("twelvth").style.display = 'none';
    } else if (category == 3) {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'none';
        document.getElementById("sixth").style.display = 'none';
        document.getElementById("seventh").style.display = 'none';
        document.getElementById("eighth").style.display = 'none';
        document.getElementById("ninth").style.display = 'none';
    } else if (price == 1) {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'none';
        document.getElementById("sixth").style.display = 'none';
        document.getElementById("seventh").style.display = 'none';
        document.getElementById("eighth").style.display = 'none';
        document.getElementById("ninth").style.display = 'none';
    } else {
        document.getElementById("first").style.display = 'unset';
        document.getElementById("second").style.display = 'unset';
        document.getElementById("third").style.display = 'unset';
        document.getElementById("fourth").style.display = 'unset';
        document.getElementById("fifth").style.display = 'unset';
        document.getElementById("sixth").style.display = 'unset';
        document.getElementById("seventh").style.display = 'unset';
        document.getElementById("eighth").style.display = 'unset';
        document.getElementById("ninth").style.display = 'unset';
        document.getElementById("tenth").style.display = 'unset';
        document.getElementById("eleventh").style.display = 'unset';
        document.getElementById("twelvth").style.display = 'unset';
    }
}

function prices() {
    let price = document.getElementById("price").value;
    if (price == 1) {
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'none';
        document.getElementById("sixth").style.display = 'none';
        document.getElementById("seventh").style.display = 'none';
        document.getElementById("eighth").style.display = 'none';
        document.getElementById("ninth").style.display = 'none';
        document.getElementById("tenth").style.display = 'none';
        document.getElementById("eleventh").style.display = 'none';
        document.getElementById("twelvth").style.display = 'none';
    } else if (price == 2) {
        document.getElementById("seventh").style.display = 'none';
        document.getElementById("eighth").style.display = 'none';
        document.getElementById("ninth").style.display = 'none';
        document.getElementById("tenth").style.display = 'none';
        document.getElementById("eleventh").style.display = 'none';
        document.getElementById("twelvth").style.display = 'none';
    } else if (price == 3) {
        document.getElementById("tenth").style.display = 'none';
        document.getElementById("eleventh").style.display = 'none';
        document.getElementById("twelvth").style.display = 'none';
    } else {
        document.getElementById("first").style.display = 'unset';
        document.getElementById("second").style.display = 'unset';
        document.getElementById("third").style.display = 'unset';
        document.getElementById("fourth").style.display = 'unset';
        document.getElementById("fifth").style.display = 'unset';
        document.getElementById("sixth").style.display = 'unset';
        document.getElementById("seventh").style.display = 'unset';
        document.getElementById("eighth").style.display = 'unset';
        document.getElementById("ninth").style.display = 'unset';
        document.getElementById("tenth").style.display = 'unset';
        document.getElementById("eleventh").style.display = 'unset';
        document.getElementById("twelvth").style.display = 'unset';
    }
}

const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

const alertModal = () => {
    return alert('Спасибо за покупку!');
}

document.querySelector('#show-modal')
  .addEventListener('click', toggleModal);

  document.querySelector('#learn-more')
  .addEventListener('submit', (event) => {
      event.preventDefault();
      toggleModal();
      alertModal();
  });  

document.querySelector('.modal__close-bar span')
  .addEventListener('click', toggleModal);



