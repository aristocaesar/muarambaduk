const Currency = require('../utils/currency');

class TicketModel {
  constructor({
    id,
    title,
    category,
    normal_day,
    weekend_day,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.normal_day = Currency.IDR(normal_day);
    this.weekend_day = Currency.IDR(weekend_day);
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      category: this.category,
      normal_day: this.normal_day,
      weekend_day: this.weekend_day,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
module.exports = TicketModel;
