const fs = require("fs");

const path = require("path");

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "cart.json"
);


module.exports = class Cart {
    static addProduct(id, prodcuPrice) {
        fs.readFile(filePath, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex((p) => {
                return p.id == id;
            });
            const existingProduct = car.products[existingProductIndex];
            let updatedProduct;

            if (existingProduct) {
                updatedProduct = {...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +prodcuPrice;

            fs.writeFile(filePath, JSON.stringify(cart), (e) => {
                console.log(err);
            })
        });
    }
};