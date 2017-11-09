
class Platform {
  constructor(ctx) {
    this.ctx = ctx
  }
  render() {
    this.ctx.fillRect(Math.random() * 550, Math.random() * 500, 100, 10);
  }
}
