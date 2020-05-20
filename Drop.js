class Drop
{
    constructor()
    {
        this.x = rand(0,width);
        this.y = rand(0,height);
        this.update();
    }
    draw()
    {
        if(Math.random()>0.5)
        {
            fill(37,219,173);
        }
        else
        {
            fill(170,250,170);
        }
        rect(this.x, this.y, 4, 10);
    }
update()
{
    this.y = this.y +20;
    if(this.y > height + 50)
    {
        this.x = rand(0,width);
        this.y = rand(0,20);
    }
    this.draw();
}
}
function rand(min, max)
{
    return floor(random(min,max));
}