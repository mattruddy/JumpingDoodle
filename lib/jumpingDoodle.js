
document.addEventListener("DOMContentLoaded", () => {
  let x = 275;
  let y = 500;
  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')
  function createGame() {
    new Game(ctx).createPlat()
  }
  function createHero() {
    new Hero(ctx, x, y, 10, 10).render()
  }
  createGame()
  createHero()
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        ctx.clearRect(x, y, 10, 10)
        x -= 25
        break;
      case "ArrowRight":
        ctx.clearRect(x, y, 10, 10)
        x += 25
        break;
      default:
    }
    ctx.fillRect(x, y, 10, 10)
  })
})
