class product{

    // name;
    // price;
    // category;
    // description;
    // rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating){
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }
    addToCart(){
        console.log("Item added to cart");
    }

    removeFromCart(){
        console.log("Item removed from cart");
    }

    displayProductDetails(){
        console.log("Displaying product details \n", this);
    }

    buyProduct(){
        console.log("Product purchased");
    }
}

let product1 = new product("Laptop", 1000, "Electronics", "High performance laptop", 4.5);

console.log(product1);
product1.displayProductDetails();