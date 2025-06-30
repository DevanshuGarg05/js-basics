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

    get description() {
        return this.description;
    }
    
    set description(d) {
        if(d.length === 0) {
            console.log("Description cannot be empty");
            return;
        }
        this.description = d;
    }

    get rating() {
        return this.rating;
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

let iphone = new product("iPhone 14", 999, "Electronics", "Latest iPhone model", 4.5);

console.log(iphone);
iphone.description="";
iphone.displayProductDetails();
