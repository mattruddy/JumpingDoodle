
class Game {
  constructor(ctx) {
    this.platforms = []
    this.ctx = ctx
  }

  createPlat() {
    for (var i = 0; i < 5; i++) {
      this.platforms.push(new Platform(this.ctx).render())
    }
  }

}
