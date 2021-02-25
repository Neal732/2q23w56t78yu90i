class Milk{
    constructor(x, y) {
        var foodStock = 0;       
        his.body = Bodies.circle(x, y, options);
        this.image = loadImage("Images/Milk.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image,0,0,300,200)
        pop();
      }
}