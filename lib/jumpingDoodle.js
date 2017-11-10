
document.addEventListener("DOMContentLoaded", () => {
  let x = 275;
  let y = 500;
  let start = null;
  let newPlat = [];
  let gamePaused = true;
  let count = 0;
  let canvas = document.getElementById('canvas');
  let score = document.getElementById('score');
  let ctx = canvas.getContext('2d')
  let hero = new Hero(ctx).setPos(x, y).render();;

  function onStart() {
    if (gamePaused) {
      return
    } else {
      ctx.clearRect(x, y, 10, 10)
      hero.setPos(x, y -= 300)
      ctx.fillRect(x, y, 10, 10)
    }
  }

  function restart() {
    location.reload()

  }

  function startGame() {
    new Game(ctx).createPlat().forEach((plat) => {
      newPlat.push(plat)
    })
    return newPlat
  }

  startGame()
  function contGame() {
    if (gamePaused) {
      return
    } else {
      new Game(ctx).createStep().forEach((plat) => {
        newPlat.push(plat)
      })
      return newPlat
    }
  }
  function initPlat() {
    newPlat.forEach((plat) => {
      ctx.fillRect(plat.x, plat.y, plat.width, plat.height)
    })
  }



  initPlat()
  function makeMove() {
    if (gamePaused) {
      return
    } else {
      newPlat.forEach((plat) => {
        ctx.clearRect(plat.x, plat.y, plat.width, plat.height)
        plat.y += 1
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height)
        if ((plat.y - 10 <= hero.y && plat.y >= hero.y) && (hero.isFalling )) {
          if (hero.x >= plat.x && hero.x <= plat.x + 100) {
            ctx.clearRect(x, y, 10, 10)
            hero.setPos(x, y-= 300)
            ctx.fillRect(x, y, 10, 10)
          }
        }
      })
    }
    return newPlat
  }

  function fall() {
    if (gamePaused || hero.y >= 590) {
      if (hero.y >= 590) {
        ctx.font='70px serif';
        ctx.fillText('You Lose', 180, 300);
        gamePaused = true
      }
      gamePaused = true
      return;
    } else {
      ctx.clearRect(x, y, 10, 10)
      hero.setPos(x, y += 1)
      hero.isFalling = true;
      hero.isJumping = false;
      ctx.fillRect(x, y, 10, 10)
    }
  }

  function moveLeft() {
    hero.setPos(x -= 50, y)
  }

  function moveRight() {
    hero.setPos(x += 50)
  }

  function pauseGame() {
    gamePaused = true;
  }

  function unPauseGame() {
    gamePaused = false;
  }

  function setCount() {
    if (gamePaused) {
      return
    } else {
      score.textContent = count += 1
    }
  }

  setInterval(setCount, 10)
  setInterval(fall, 1)
  setInterval(makeMove, 15)
  setInterval(contGame, 2000)
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        ctx.clearRect(x, y, 10, 10)
        moveLeft()
        break;
      case "ArrowRight":
        ctx.clearRect(x, y, 10, 10)
        moveRight()
        break;
      case "p":
        pauseGame()
        break;
      case "c":
        unPauseGame()
        break;
      case " ":
        unPauseGame()
        onStart()
        break;
      case "r":
        restart()
        break;
      default:
    }
    ctx.fillRect(x, y, 10, 10)
  })
})
