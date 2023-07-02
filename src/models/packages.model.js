const Currency = require('../utils/currency');

class PackagesModel {
  constructor({
    id,
    title,
    slug,
    category,
    description,
    price,
    image,
    products,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.category = category;
    this.description = description;
    this.price = price;
    this.image = image;
    this.products = products;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      category: this.category,
      description: this.description,
      price: Currency.IDR(this.price),
      image: this.image,
      products:
        this.products.length == 0
          ? []
          : this.products.map((product) => {
              return {
                id: product.id,
                title: product.title,
                quantity: product.quantity,
                image: product.image,
              };
            }),
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = PackagesModel;
