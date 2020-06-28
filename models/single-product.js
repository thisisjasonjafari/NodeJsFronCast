const fs = require("fs");
const path = require("path");



module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    saveProductData() {
        const filePath = path.join(
            path.dirname(process.mainModule.filename),
            "data",
            "product.json"
        );
        console.log(filePath);
        fs.readFile(filePath, (err, fileContent) => {
            let products = []
            if (!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this)
            console.log(products);
            fs.writeFile(filePath, JSON.stringify(products), (err1) => {
                console.log(err1);
            })
        })

    }

    static fetchAllProducts(cb) {

        const filePath = path.join(
            path.dirname(process.mainModule.filename),
            "data",
            "product.json"
        );
        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                cb([])
            }
            cb(JSON.parse(fileContent))
        })

    }
};