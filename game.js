document.addEventListener("DOMContentLoaded", () => {

    const squares = document.querySelectorAll(".container div");
    const scoreTxt = document.querySelectorAll("#score");
    const StartBtn = document.querySelectorAll("#startBtn");

    let width = 10;
    let score = 0;

    let currentTail = 0;
    let snake = [2, 1, 0];
    let direction = 1;

    let intervalTime = 0;
    let interval = 0;
    let speed = 0.8;

    let apple = 10;

    function randomApple() {
        do {
            apple = Math.floor(Math.random() * squares.length);
        } while (squares[apple].classList.contains("snake"));
        squares[apple].classList.add("apple");
    }

    function setUpGame() {
        snake.forEach(i => squares[i].classList.remove("snake"));
        squares[apple].classList.remove("apple");
        clearInterval(interval);
        score = 0;
        scoreTxt.textContent = score;
        direction = 1;
        snake = [2,1,0];
        currentTail = 0;
        randomApple();
        snake.forEach(i => squares[i].classList.add("snake"));
        intervalTime = 500;
        interval = setInterval(moveSnake, intervalTime);
    }

    function moveSnake() {

        if ( 
            (snake[0] + direction > squares.length && direction === width ) ||
            (snake[0] - width < 0 && direction === -width)||
            (snake[0] % width === 9 && direction === 1) ||
            (snake[0] % 10 === 0 && direction === 1) ||
            (squares[snake[0] + direction].classList.contains("snake"))
        ) {
            return clearInterval(interval);
        }

        const tail = snake.pop();
        squares[tail].classList.remove("snake");
        snake.unshift(snake[0] + direction)

        if (squares[snake[0]].classList.contains("apple")) {
            squares[snake[0]].classList.remove("apple");
            squares[tail].classList.add("snake");
            snake.push(tail);
            score++;
            randomApple();
            scoreTxt.textContent = score;
            intervalTime *= speed; 
        }
        squares[snake[0]].classList.add("snake");
    } 

    function controls(e) {
        squares[currentTail].classList.remove("snake");

        if (e.keyCode === 37) {
            direction = -1;
        } else if (e.keyCode === 38) {
            direction = -width;
        } else if (e.keyCode === 39) {
            direction = 1;
        } else if (e.keyCode === 40) {
            direction = width;
        }
    } 

    document.addEventListener("keyup", controls);
    startBtn.addEventListener("click", setUpGame);
});