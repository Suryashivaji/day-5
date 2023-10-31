

// Qustion 2. 


class circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color
  }
  get radiusCircle(){
    return this.radius;
  }
set radiusCircle(radius){
  this.radius=radius;
}
get colorCircle(){
  return this.color
}
set colorCircle(color){
  return this.color;
}
get toSting(){
  return `"circle[radius=${this.radius},color=${this.color}]"`

}
get areaCircle(){
  return Math.PI * this.radius* this.radius;
}
get circumferenceCircle(){
  return 2*Math.PI* this.radius;
}
}
const result = new circle(1.0,"red");
console.log(result.radiusCircle);
 
result.radiusCircle = 2.2;
console.log(result.radiusCircle);
   
console.log(result.colorCircle);
 
result.colorCircle = "blue";
 
console.log(result.colorCircle);

console.log(result.toSting);
console.log(result.areaCircle);
console.log(result.circumferenceCircle);



// Qustion 3. Write a “person” class to hold all the details.
class person {
  constructor(name,age,gender,salary){
     this.name=name;
     this.age=age;
     this.gender=gender;
     this.salary=salary;
  }
}
var obj = new person ("Surya", "20","Male","22k");
var obj1 = new person("Sakthi",21,"Male","75k");
console.log(`${obj.name}
${obj.age}
${obj.gender}
${obj.salary}`);
console.log(`${obj1.name}
${obj1.age}
${obj1.gender}
${obj1.salary}`);

// Qustion 4  write a class to calculate the uber price.
     
       
   class uber{
 
          constructor(uberName,preKM){
            this.uberName=uberName;
            this.preKM=preKM;
          }
          set price(price){
             this._price=price;
          }
          get uberPrice(){
return this._price* this.preKM;

          }

   }
     var car = new uber("BMW",20)
     car.price= 20;
     console.log(car.uberPrice);

        