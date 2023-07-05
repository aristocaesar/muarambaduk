const Currency = require('../utils/currency');
const PackagesModel = require('./packages.model');

class CheckinModel {
  constructor({ date, date_types, camping, tickets, packages }) {
    this.date = date;
    this.date_types = date_types;
    this.camping = camping;
    this.tickets = tickets;
    this.packages = packages;
  }

  toJson() {
    return {
      date: this.date,
      date_types: this.date_types,
      camping: this.camping,
      tickets: this.tickets.map((ticket) => {
        return {
          id: ticket.id,
          title: ticket.title,
          category: ticket.category,
          price: ticket.price,
          price_formated: Currency.IDR(ticket.price),
        };
      }),
      packages: this.packages.map((pkg) => new PackagesModel(pkg).toJson()),
    };
  }
}

module.exports = CheckinModel;
