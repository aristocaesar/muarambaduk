console.info(`${window.location.origin} powered by arekcreative.com`);

const menuNavbar = document.getElementById('toogleMenuNavbar');
const navbarMobile = document.getElementById('navbarMobile');
const closeNavbar = document.getElementById('toogleCloseNavbar');

menuNavbar.addEventListener('click', () => {
  navbarMobile.classList.remove('-right-full');
  navbarMobile.classList.add('right-0');
});

closeNavbar.addEventListener('click', () => {
  navbarMobile.classList.remove('right-0');
  navbarMobile.classList.add('-right-full');
});

const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

if (dropdownButton != null) {
  dropdownButton.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    dropdownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', function (event) {
    const isClickInside =
      dropdownButton.contains(event.target) ||
      dropdownMenu.contains(event.target);
    if (!isClickInside) {
      dropdownButton.setAttribute('aria-expanded', false);
      dropdownMenu.classList.add('hidden');
    }
  });
}

function faq(id) {
  const items = document.getElementById('faq-items').children;
  for (let index = 0; index < items.length; index++) {
    const collapseShow = document.getElementById(`show-${items[index].id}`);
    const collapseHide = document.getElementById(`hide-${items[index].id}`);
    const collapseDescription = document.getElementById(
      `description-${items[index].id}`
    );
    if (items[index].id == id) {
      collapseShow.classList.remove('block');
      collapseShow.classList.add('hidden');

      collapseHide.classList.remove('hidden');
      collapseHide.classList.add('block');

      collapseDescription.classList.remove('hidden');
      collapseDescription.classList.add('block');
    } else {
      collapseShow.classList.remove('hidden');
      collapseShow.classList.add('block');

      collapseHide.classList.remove('block');
      collapseHide.classList.add('hidden');

      collapseDescription.classList.remove('block');
      collapseDescription.classList.add('hidden');
    }
  }
}

function tickets(button) {
  const btnTourist = document.getElementById('btn-tourist');
  const btnTransport = document.getElementById('btn-transport');
  const tourist = document.getElementById('tourist');
  const transport = document.getElementById('transport');

  if (button.id == 'btn-tourist') {
    btnTourist.classList.remove('bg-cod-gray-300', 'hover:bg-cod-gray-400');
    btnTourist.classList.add('bg-denim-600', 'hover:bg-denim-700');

    btnTransport.classList.add('bg-cod-gray-300', 'hover:bg-cod-gray-400');
    btnTransport.classList.remove('bg-denim-600', 'hover:bg-denim-700');

    tourist.classList.remove('hidden');
    tourist.classList.add('grid');

    transport.classList.remove('grid');
    transport.classList.add('hidden');
  } else {
    btnTourist.classList.remove('bg-denim-600', 'hover:bg-denim-700');
    btnTourist.classList.add('bg-cod-gray-300', 'hover:bg-cod-gray-400');

    btnTransport.classList.remove('bg-cod-gray-300', 'hover:bg-cod-gray-400');
    btnTransport.classList.add('bg-denim-600', 'hover:bg-denim-700');

    tourist.classList.remove('grid');
    tourist.classList.add('hidden');

    transport.classList.remove('hidden');
    transport.classList.add('grid');
  }
}
