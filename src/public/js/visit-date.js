function IDR(value) {
  let rupiah = '';
  const angkaRev = value.toString().split('').reverse().join('');
  for (let i = 0; i < angkaRev.length; i++) {
    if (i % 3 == 0) {
      rupiah += angkaRev.substr(i, 3) + '.';
    }
  }

  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
}

function incrementTicket(id) {
  const ticket = document.getElementById(id);
  const quantity = parseInt(ticket.value);
  const price = parseInt(document.getElementById(`${id}-price`).value);
  const subPrice = document.getElementById(`${id}-sub-price`);
  const ticketQuantity = document.getElementsByClassName(`${id}-quantity`);
  const subTotal = document.getElementById('sub-total');
  const grossAmount = document.getElementById('gross-amount');
  const btnNext = document.getElementById('btn-next');

  if (quantity >= 0 && quantity < 20) {
    const totalQuantity = quantity + 1;
    ticket.value = totalQuantity;

    // Set ticket quantity
    for (let index = 0; index < ticketQuantity.length; index++) {
      ticketQuantity[index].innerText = totalQuantity.toString();
    }

    // Set ticket total price
    const total = price * totalQuantity;
    subPrice.innerText = IDR(total);

    // Set gross amount
    const gross_amount = parseInt(subTotal.value) + price;
    subTotal.value = gross_amount;
    grossAmount.innerText = IDR(gross_amount);
  }
  // Set btn next active
  if (subTotal.value == 0) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

function decrementTicket(id) {
  const ticket = document.getElementById(id);
  const quantity = parseInt(ticket.value);
  const price = parseInt(document.getElementById(`${id}-price`).value);
  const subPrice = document.getElementById(`${id}-sub-price`);
  const ticketQuantity = document.getElementsByClassName(`${id}-quantity`);
  const subTotal = document.getElementById('sub-total');
  const grossAmount = document.getElementById('gross-amount');
  const btnNext = document.getElementById('btn-next');

  if (quantity > 0 && quantity <= 20) {
    const totalQuantity = quantity - 1;
    ticket.value = totalQuantity;

    // Set ticket quantity
    for (let index = 0; index < ticketQuantity.length; index++) {
      ticketQuantity[index].innerText = totalQuantity.toString();
    }

    // Set ticket total price
    const total = price * totalQuantity;
    subPrice.innerText = IDR(total);

    // Set gross amount
    const gross_amount = parseInt(subTotal.value) - price;
    subTotal.value = gross_amount;
    grossAmount.innerText = IDR(gross_amount);
  }

  // Set btn next active
  if (subTotal.value == 0) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

function incrementPackage(id) {
  const pkg = document.getElementById(id);
  const quantity = parseInt(pkg.value);
  const price = parseInt(document.getElementById(`${id}-price`).value);
  const subPrice = document.getElementById(`${id}-sub-price`);
  const packageQuantity = document.getElementsByClassName(`${id}-quantity`);
  const subTotal = document.getElementById('sub-total');
  const grossAmount = document.getElementById('gross-amount');
  const btnNext = document.getElementById('btn-next');

  if (quantity >= 0 && quantity < 20) {
    const totalQuantity = quantity + 1;
    pkg.value = totalQuantity;

    // Set package quantity
    for (let index = 0; index < packageQuantity.length; index++) {
      packageQuantity[index].innerText = totalQuantity.toString();
    }

    // Set ticket total price
    const total = price * totalQuantity;
    subPrice.innerText = IDR(total);

    // // Set gross amount
    const gross_amount = parseInt(subTotal.value) + price;
    subTotal.value = gross_amount;
    grossAmount.innerText = IDR(gross_amount);
  }
  // Set btn next active
  if (subTotal.value == 0) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

function decrementPackage(id) {
  const pkg = document.getElementById(id);
  const quantity = parseInt(pkg.value);
  const price = parseInt(document.getElementById(`${id}-price`).value);
  const subPrice = document.getElementById(`${id}-sub-price`);
  const packageQuantity = document.getElementsByClassName(`${id}-quantity`);
  const subTotal = document.getElementById('sub-total');
  const grossAmount = document.getElementById('gross-amount');
  const btnNext = document.getElementById('btn-next');

  if (quantity > 0 && quantity <= 20) {
    const totalQuantity = quantity - 1;
    pkg.value = totalQuantity;

    // Set package quantity
    for (let index = 0; index < packageQuantity.length; index++) {
      packageQuantity[index].innerText = totalQuantity.toString();
    }

    // Set ticket total price
    const total = price * totalQuantity;
    subPrice.innerText = IDR(total);

    // // Set gross amount
    const gross_amount = parseInt(subTotal.value) - price;
    subTotal.value = gross_amount;
    grossAmount.innerText = IDR(gross_amount);
  }
  // Set btn next active
  if (subTotal.value == 0) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}
