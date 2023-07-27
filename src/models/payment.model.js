const moment = require('moment');
require('moment/locale/id');
const { IDR } = require('../utils/currency');

class PaymentModel {
  constructor({
    id,
    order_id,
    user_id,
    transaction_id,
    camping,
    type,
    date,
    date_types,
    gross_amount,
    status,
    barcode,
    expire_at,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.order_id = order_id;
    this.user_id = user_id;
    this.transaction_id = transaction_id;
    this.camping = camping;
    this.type = type;
    this.date = date;
    this.date_types = date_types;
    this.gross_amount = gross_amount;
    this.status = status;
    this.barcode = barcode;
    this.expire_at = expire_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  toJson() {
    return {
      id: this.id,
      order_id: this.order_id,
      user_id: this.user_id,
      transaction_id: this.transaction_id,
      camping: this.camping,
      type: this.type,
      date: this.date,
      date_formated: moment(this.date, 'DD/MM/YYYY').format('DD MMMM YYYY'),
      date_types: this.date_types,
      gross_amount: this.gross_amount,
      gross_amount_formated: IDR(this.gross_amount),
      status: this.status,
      barcode: this.barcode,
      expire_at: this.expire_at,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = { PaymentModel };
