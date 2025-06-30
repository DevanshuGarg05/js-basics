class product{

    #price;
    #name;
    #description;

    constructor(builder){
        this.#name = builder.name;
        if(builder.price>0 ){
            this.#price = builder.price;
        }else{
            console.log("Invalid price");
            return {};
        }
        this.#description = builder.description;
        
    }

    displayProduct() {
        console.log(this);
        console.log("Name:", this.#name, "Price:", this.#price, "Description:", this.#description);
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = "";
                this.price = 0;
                this.description = "";
            }

            setName(incomingName) {
                this.name = incomingName;
                return this;
            }

            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            build() {
                return new product(this);
            }
        }   
        return Builder;
    }
}

const p = new product.Builder()
    .setName("iPhone 14")
    .setPrice(999)
    .setDescription("Latest iPhone model")
    .build();

p.displayProduct();