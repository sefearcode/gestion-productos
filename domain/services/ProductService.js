// 📁 domain/services/ProductService.js
const Product = require('../entities/Product');

class ProductService {
  constructor(productRepository, categoryValidator) {
    this.productRepository = productRepository;
    this.categoryValidator = categoryValidator;
  }

  async createProduct(productData) {
    this.categoryValidator.validate(productData.category);

    const product = new Product(
      null,
      productData.name,
      productData.price,
      productData.category
    );

    return await this.productRepository.save(product);
  }

  async updateProductPrice(productId, newPrice) {
    const product = await this.productRepository.findById(productId);
    if (!product) throw new Error('Producto no encontrado');

    product.updatePrice(newPrice);
    return await this.productRepository.save(product);
  }
}

module.exports = ProductService;
