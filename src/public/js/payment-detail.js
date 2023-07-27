const rating = document.getElementById('value-star-rating');
const stars = document.querySelectorAll('.star');

setRating(rating.value);

function setRating(value) {
  rating.value = value;
  stars.forEach((star, index) => {
    if (index + 1 <= value) {
      star.classList.remove('text-cod-gray-300');
      star.classList.add('text-yellow-500');
    } else {
      star.classList.remove('text-yellow-500');
      star.classList.add('text-cod-gray-300');
    }
  });
}

stars.forEach((star) => {
  star.addEventListener('click', function () {
    setRating(this.getAttribute('data-value'));
  });
});
