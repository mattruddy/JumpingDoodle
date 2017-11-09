
class Hero {
  constructor(ctx, x, y) {
    this.x = x;
    this.y = y;
    this.height = 10;
    this.width = 10;
    this.isJumping = false;
    this.isFalling = false;
    this.jump = 100;
    this.fall = 100;
    this.ctx = ctx;
  }

  render() {
    this.ctx.fillRect(this.x, this.y, this.height, this.width)
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
