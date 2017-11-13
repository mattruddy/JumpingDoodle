
class Game {
  constructor(ctx) {
    this.platforms = []
    this.bears = []
    this.ctx = ctx
    this.hero = new Hero(this.ctx)
  }

  createPlat() {
    for (var i = 0; i < 10; i++) {
      this.platforms[i] = new Platform(this.ctx).startPlat()
    }
    return this.platforms
  }

  createStep() {
    for (var i = 0; i < 1; i++) {
      this.platforms[i] = new Platform(this.ctx).stepPlat()
    }
    return this.platforms
  }

  createBear() {
    this.bears.push(new Bears(this.ctx))
    return this.bears
  }

}
