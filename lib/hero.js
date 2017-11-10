
class Hero {
  constructor(ctx) {
    this.x;
    this.y;
    this.height = 70;
    this.width = 70;
    this.isJumping = false;
    this.isFalling = false;
    this.jump = 100;
    this.fall = 100;
    this.ctx = ctx;
    this.image = document.getElementById("source")
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
    return this
  }

  render() {
    this.ctx.drawImage(this.image, this.x, this.y, this.height, this.width)
    return this
  }


  jump() {
    if (!this.isJumping && !this.isFalling) {
      this.fall = 0;
      this.isJumping = true;
      this.jump = 20;
    }
  }

}
