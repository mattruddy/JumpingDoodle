
class Game {
  constructor(ctx) {
    this.platforms = []
    this.ctx = ctx
  }

  createPlat() {
    for (var i = 0; i < 6; i++) {
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

}
