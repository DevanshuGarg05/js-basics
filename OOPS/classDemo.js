class product{

    #name;
    #price;
    category;
    description;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating){
        this.#name = productName;
        this.#price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }


    getPrice() {
        return this.#price;
    }

    setPrice(p) {
        if (p > 0) {
            this.#price = p;
        } else {
            console.log("Invalid price");
        }
    }


    addToCart(){
        console.log("Item added to cart");
    }

    removeFromCart(){
        console.log("Item removed from cart");
    }

    displayProductDetails(){
        console.log("Displaying product details \n", this.#price);
    }

    buyProduct(){
        console.log("Product purchased");
    }
}

let iphone = new product("iPhone 14", 999, "Electronics", "Latest iPhone model", 4.5);

console.log(iphone);

iphone.setPrice(1099);

iphone.displayProductDetails();

console.log("Updated Price: ", iphone.getPrice());