const { IDR } = require('../utils/currency');
const moment = require('moment');
require('moment/locale/id');

class PaymentDetailModel {
  constructor({
    id,
    order_id,
    user,
    barcode,
    camping,
    type,
    date,
    date_types,
    gross_amount,
    status,
    va_numbers,
    packages,
    tickets,
    expire_at,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.order_id = order_id;
    this.user = user;
    this.barcode = barcode;
    this.camping = camping;
    this.type = type;
    this.date = date;
    this.date_types = date_types;
    this.gross_amount = gross_amount;
    this.status = status;
    this.va_numbers = va_numbers;
    this.packages = packages;
    this.tickets = tickets;
    this.expire_at = expire_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  toJson() {
    return {
      id: this.id,
      order_id: this.order_id,
      user: this.user,
      barcode: this.barcode,
      camping: this.camping,
      type: this.type,
      date: this.date,
      date_formated: moment(this.date, 'DD/MM/YYYY').format('DD MMMM YYYY'),
      date_types: this.date_types,
      gross_amount: this.gross_amount,
      gross_amount_formated: IDR(this.gross_amount),
      status: this.status,
      va_numbers: this.va_numbers,
      packages: this.packages.map((pkg) => {
        return {
          id: pkg.id,
          title: pkg.title,
          price: pkg.price,
          price_formated: IDR(pkg.price),
          quantity: pkg.quantity,
          image: pkg.image,
        };
      }),
      tickets: this.tickets.map((ticket) => {
        return {
          id: ticket.id,
          title: ticket.title,
          category: ticket.category,
          price: ticket.price,
          price_formated: IDR(ticket.price),
          name: ticket.name,
          identity: ticket.identity,
        };
      }),
      expire_at: this.expire_at,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = { PaymentDetailModel };
