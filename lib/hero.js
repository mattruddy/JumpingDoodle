
class Hero {
  constructor(ctx, x, y, height, width) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.height = height;
    this.width = width;
  }
  render() {
    this.ctx.fillRect(this.x, this.y, this.height, this.width)
  }
}
