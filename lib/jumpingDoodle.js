
document.addEventListener("DOMContentLoaded", () => {
  let x = 275;
  let y = 500;
  let start = null;
  let newPlat = [];
  let gamePaused = true;
  let gameStarted = false;
  let leftRun = 0;
  let rightRun = 0;
  let count = 0;
  let count2 = 0;
  let speed = 10;
  let bears = 0;
  let timesRun = 0;
  let count3 = 0;
  let canvas = document.getElementById('canvas');
  let score = document.getElementById('score');
  let ctx = canvas.getContext('2d')
  let hero = new Hero(ctx).setPos(x, y).render();;
  let newBears = [];
  function onStart() {
    if (gamePaused || count > 0 ) {
      return
    } else {
      if (hero.isJumping === false) {

        timesRun = 0
        hero.isJumping === true;
        setJump = setInterval(function() {
          timesRun += 1
          if (timesRun >= 85) {
            clearInterval(setJump)
          } else {
            ctx.clearRect(x, y, 70, 70)
            hero.setPos(x, y -= 5)
            ctx.drawImage(hero.image, x, y, 70, 70)
          }

        }, 1)
      }
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

  function makeBear() {
    if (gamePaused) {
      return
    } else {
      new Game(ctx).createBear().forEach((b) => {
        newBears.push(b)
      })
      return newBears;
    }
  }

  function bearMove() {
    if (gamePaused) {
      return;
    } else if (newBears.length === 0) {
      return
    } else {
      newBears.forEach((bear, i) => {
        ctx.clearRect(bear.x, bear.y, bear.width, bear.height)
        if (bear.y <= hero.y && bear.y + 50 >= hero.y) {
          if (bear.x - 50 <= hero.x && bear.x + 50 >= hero.x) {
            newBears.splice(i, 1)
            score.textContent = bears += 20
          }
        } else {
          if (bear.y > 600 ) {
            newBears.splice(i, 1)
          } else {
            bear.y += 1
            ctx.drawImage(bear.image, bear.x, bear.y, bear.width, bear.height)
          }
        }
      })
    }
  }

  // setInterval(makeBear, 1000)
  setInterval(makeBear, (Math.random() * ((17000 - 7000) + 1) + 7000 ) )
  setInterval(bearMove, 9)
  function initPlat() {
    newPlat.forEach((plat) => {
      ctx.drawImage( plat.image ,plat.x, plat.y, plat.width, plat.height)
    })
  }



  initPlat()
  function makeMove() {
    if ( count3++ >= 300 ) {
      count3 = 0
      speed -= 9
    }
    if (gamePaused) {
      return
    } else {
      newPlat.forEach((plat, i) => {
        if (plat.y > 600 ) {
          newPlat.splice(i, 1)
        }
        ctx.clearRect(plat.x, plat.y, plat.width, plat.height)
        plat.y += 1
        ctx.drawImage(plat.image, plat.x, plat.y, plat.width, plat.height)
        if ((plat.y - 40 <= hero.y && plat.y >= hero.y) && (hero.isFalling )) {
          if (hero.x > plat.x - 70 && hero.x < plat.x + 100) {
            if (hero.isFalling === true) {
              timesRun = 0
              setJump = setInterval(function() {
                timesRun++
                if (timesRun >= 135) {
                  clearInterval(setJump)
                } else {
                  ctx.clearRect(x, y, 70, 70)
                  hero.setPos(x, y -= 3)
                  ctx.drawImage(hero.image, x, y, 70, 70)
                  hero.isFalling = false
                }
              }, 1)
            }
          }
        }
      })
    }
    return newPlat
  }

  function fall() {
    if (gamePaused || hero.y >= 590) {
      if (hero.y >= 590) {
        let c1 = ctx;
        let c2 = ctx;
        c2.font='70px serif'
        c2.fillText('You Saved', 170, 250)
        c1.font='30px serif';
        if (bears === 1) {
          c1.fillText(`${bears} Polar Bear` , 150, 300);
        } else {
          c1.fillText(`${bears} Polar Bears` , 230, 300);
        }
        c1.font='20px serif';
        c1.fillText(`press r to restart`, 250, 330);
        gamePaused = true
      }
      gamePaused = true
      return;
    } else {
      ctx.clearRect(x, y, 70, 70)
      hero.setPos(x, y += 2)
      hero.isFalling = true;
      hero.isJumping = false;
      ctx.drawImage(hero.image, x, y, 70, 70)
    }
  }

  function moveLeft() {
    leftRun = 0;
    leftTimer = setInterval(function() {
      if ( leftRun++ > 40 ) {
        clearInterval(leftTimer)
      } else {
        if (x >= - 30) {
          ctx.clearRect(x, y, 70, 70)
          hero.setPos(x -= 1.3, y)
          ctx.drawImage(hero.image, x, y, 70, 70)
        } else {
          ctx.clearRect(x, y, 70, 70)
          x = 530
          hero.setPos(x, y)
          ctx.drawImage(hero.image, x, y, 70, 70)
        }
      }
    }, 1)
  }

  function moveRight() {
    rightRun = 0;
    rightTimer = setInterval(function() {
      if ( rightRun++ > 40 ) {
        clearInterval(rightTimer)
      } else {
        if (x + 20 < 600) {
          ctx.clearRect(x, y, 70, 70)
          hero.setPos(x += 1.3, y)
          ctx.drawImage(hero.image, x, y, 70, 70)
        }
        else {
          ctx.clearRect(x, y, 70, 70)
          x = 0
          hero.setPos(x, y)
          ctx.drawImage(hero.image, x, y, 70, 70)
        }
      }
    }, 1)
  }


  function mL() {
    if (gamePaused) {
      return
    } else {
      moveLeft()
    }
  }

  function mR() {
    if (gamePaused) {
      return
    } else {
      moveRight()
    }
  }
  // setInterval(moveLeft, 1)


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
      if (count2 === 1000) {
        count2 = 0;
        score.textContent = bears += 1
        // speed -= 1;
      }
      count2 += 1
      count += 1
    }
  }

  setInterval(makeMove, speed)
  setInterval(setCount, 10)
  setInterval(fall, 1)
  setInterval(contGame, 1500)
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        ctx.clearRect(x, y, 70, 70)
        mL()
        break;
      case "ArrowRight":
        ctx.clearRect(x, y, 70, 70)
        mR()
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
    ctx.drawImage(hero.image, x, y, 70, 70)
  })
})
