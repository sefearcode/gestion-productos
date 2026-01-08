// 📁 domain/services/CategoryValidator.js
class CategoryValidator {
  constructor(validCategories = ['Electronics', 'Clothing', 'Books']) {
    this.validCategories = validCategories;
  }

  validate(category) {
    if (!this.validCategories.includes(category)) {
      throw new Error(`Categoría inválida: ${category}`);
    }
  }
}

module.exports = CategoryValidator;
