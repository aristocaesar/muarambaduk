const Currency = require('../utils/currency');

class ProductModel {
  constructor({
    id,
    title,
    slug,
    description,
    image,
    price,
    compensation,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.image = image;
    this.price = price;
    this.compensation = compensation;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      description: this.description,
      image: this.image,
      price: this.price,
      price_formated: Currency.IDR(this.price),
      compensation: this.compensation,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = ProductModel;
