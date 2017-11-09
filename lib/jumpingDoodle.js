
document.addEventListener("DOMContentLoaded", () => {
  let x = 275;
  let y = 500;
  let newPlat = [];
  let hero = [];
  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')
  function startGame() {
    new Game(ctx).createPlat().forEach((plat) => {
      newPlat.push(plat)
    })
    return newPlat
  }

  function contGame() {
    new Game(ctx).createStep().forEach((plat) => {
      newPlat.push(plat)
    })
    return newPlat
  }
  startGame()

  function createHero() {
    let hero = new Hero(ctx, x, y).render();
  }
  createHero()
  function initPlat() {
    newPlat.forEach((plat) => {
      ctx.fillRect(plat.x, plat.y, plat.width, plat.height)
    })
  }
  initPlat()

  function makeMove() {
    newPlat.forEach((plat) => {
      ctx.clearRect(plat.x, plat.y, plat.width, plat.height)
      plat.y += 50
      ctx.fillRect(plat.x, plat.y, plat.width, plat.height)
    })
    return newPlat
  }

  function fall() {
    ctx.clearRect(x, y, 10, 10)
    y += 10
    ctx.fillRect(x, y, 10, 10)
  }

  setInterval(fall, 50)
  setInterval(makeMove, 1000)
  setInterval(contGame, 2000)
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        ctx.clearRect(x, y, 10, 10)
        x -= 50
        break;
      case "ArrowRight":
        ctx.clearRect(x, y, 10, 10)
        x += 50
        break;
      case "ArrowUp":
        ctx.clearRect(x, y, 10, 10)
        y -= 300
        break;
      case "p":
        handlePause()
        break
      default:
    }
    ctx.fillRect(x, y, 10, 10)
  })
})
