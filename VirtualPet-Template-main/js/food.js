class Food{
    constructor(){
   this.image=loadImage("Milk.png")
   this.foodStock=0
    }
updateFoodStock(foodStock){
    this.foodStock=foodstock
}
deductFood(){
if(this.foodStock>0){
    this.foodStock=this.foodStock-1

}
}
getFoodStock(){
    return this.foodStock
}

getFeedTime(lastFed){
this.lastFed=lastFed


}
display(){
var x=80,y=100
imageMode(CENTER)
this.image(this.image,720,220,70,70)
if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
        x=80;
        y=y+50;
      }
      image(this.image,x,y,50,50);
      x=x+30;
    }
  }


}



}