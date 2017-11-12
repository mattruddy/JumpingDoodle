class Bears {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * 550);
    this.y = 0;
    this.height = 50;
    this.width = 50;
    this.image = document.getElementById("bear");
    return this
  }

}
