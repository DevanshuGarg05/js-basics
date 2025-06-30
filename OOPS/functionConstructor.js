function product(n,p,d){
  this.name = n;
  this.price = p;
  this.description = d;
  this.displayProduct = function (){
    console.log("Name:",this.name, "Price:",this.price,"Description:",this.description);
  }
}



let a = new product("Mac",125000,"M4 Chip 256gb SSD");
a.displayProduct();

let b = new product("Samsung S24",99900,"Slimmest in the segment");
b.displayProduct();