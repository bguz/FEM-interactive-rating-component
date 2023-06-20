document.querySelector('.rating__submit').addEventListener('click', test);

function test(e) {
    const getValue = document.querySelector('input[name="rating"]:checked');
    const ratingContainer = document.querySelector('.rating');
    const thanksContainer = document.querySelector('.thanks');
    const ratingMessage = document.querySelector('.thanks__rating-selected');

    if (getValue !== null) {
        console.log(getValue.value);
        ratingContainer.classList.add('hidden');
        thanksContainer.classList.remove('hidden');
        ratingMessage.textContent = `You selected ${getValue.value} out of 5`;
    } else {
        e.preventDefault();
    }
}