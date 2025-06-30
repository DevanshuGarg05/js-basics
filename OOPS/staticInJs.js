class product {
  
  static x = 10;
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
}

let a = new product("ChuChu",12000);
console.log(a.name);
product.x =20;
console.log(product.x);