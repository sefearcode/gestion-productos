// 📁 infrastructure/repositories/ProductRepository.js
class ProductRepository {
  constructor(database) {
    this.db = database; // db es un array de productos
  }

  async findById(id) {
    return this.db.find(p => p.id === id);
  }

  async save(product) {
    if (product.id) {
      // Actualizar
      const index = this.db.findIndex(p => p.id === product.id);
      if (index !== -1) this.db[index] = product;
    } else {
      // Insertar
      product.id = Date.now();
      this.db.push(product);
    }
    return product;
  }
}

module.exports = ProductRepository;
