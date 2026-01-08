// 📁 index.js
const ProductRepository = require('./infrastructure/repositories/ProductRepository');
const ProductService = require('./domain/services/ProductService');
const ProductController = require('./interfaces/controllers/ProductController');
const CategoryValidator = require('./domain/services/CategoryValidator');
const db = require('./database');

// Inicializar capas
const productRepository = new ProductRepository(db);
const categoryValidator = new CategoryValidator();
const productService = new ProductService(productRepository, categoryValidator);
const productController = new ProductController(productService);

// Simulación de req/res
const reqCreate = { body: { name: 'Laptop', price: 1200, category: 'Electronics' } };
const res = { 
  status(code) { this.code = code; return this; },
  json(data) { console.log('Response:', this.code || 200, data); }
};

// Crear producto
productController.createProduct(reqCreate, res).then(() => {
  // Actualizar precio
  const reqUpdate = { params: { id: db[0].id }, body: { price: 1500 } };
  productController.updatePrice(reqUpdate, res);
});
