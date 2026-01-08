// 📁 domain/entities/Product.js
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  updatePrice(newPrice) {
    if (newPrice <= 0) throw new Error('Precio debe ser positivo');
    this.price = newPrice;
  }
}

module.exports = Product;
