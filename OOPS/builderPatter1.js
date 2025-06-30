class product{

    constructor(builder){
        this.name = builder.name;
        if(builder.price>0 && typeof (builder.price)=== "number"){
            this.price = builder.price;
        }else{
            console.log("Invalid price");
            return {};
        }
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating;
    }
}

const p = new product({
    name: "iPhone 14",
    price: 999,
    category: "Electronics",
    description: "Latest iPhone model",
    rating: 4.5
})

console.log(p);