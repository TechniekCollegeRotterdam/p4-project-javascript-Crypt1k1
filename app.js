// uitleg voor je code?
document.addEventListener('DOMContentLoaded', () =>{
const grid = document.querySelector(".grid")
let squares = Array.from(document.querySelectorAll('.grid div'))
const scoreDisplay = document.querySelector('#score')
const StartBtn = document.querySelector('#startButton')
    const  width = 10;

// de figuren
    //nice dat je al je figuren aanduid met de letter die erop lijkt. (A)
    //code ziet er netjes uit (A)
const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
  let random =Math.floor(Math.random()*theTetrominoes.length)
  
  let currentPosition = 4
  let currentRot = 0
  let current = theTetrominoes[random][currentRot]

  console.log(theTetrominoes)
  //adding first figure  
  function draw() {
      current.forEach(index =>{
          squares[currentPosition + index].classList.add('figure')
      })
  }
  

  function undraw() {
    current.forEach(index =>{
        squares[currentPosition + index].classList.remove('figure')
    })
}

timerId = setInterval(moveDown, 1000)
function moveDown() {
    undraw()
    currentPosition += width
    draw()
}
// leg je function uit (wel nice dat je meer comments dan mij hebt over het algemeen ik moet dit ook echt handhaven) (A)
function freeze(){
    if(current.some(index => squares[currentPosition + index +width].classList.contains('taken'))){
        current.forEach()
    }
}







  
})

