function Car(image, top, left, size, speed) {
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getCarElement = function () {
        return '<image width="' + this.sizeWidth + '" height="' + this.sizeHeight + '"' +
            ' src="' + this.image + '"' +
            ' style="top:' + this.top + 'px' + ';left:' + this.left + 'px' + ';position: absolute"' + ' />';
    }
    this.moveRight = function () {
        this.image = image + '-right.png';
        this.sizeWidth = this.size;
        this.sizeHeight = this.size / 2
        this.left += this.speed;

    }
    this.moveDown = function () {
        this.image = image + '-down.png';
        this.sizeWidth = this.size / 2;
        this.sizeHeight = this.size;
        this.top += this.speed;
    }
    this.moveLeft = function () {
        this.image = image + '-left.png';
        this.sizeWidth = this.size;
        this.sizeHeight = this.size / 2
        this.left -= this.speed;
    }
    this.moveUp = function () {
        this.image = image + '-up.png';
        this.sizeWidth = this.size / 2;
        this.sizeHeight = this.size;
        this.top -= this.speed
    }
}

let car = new Car('car', 20, 20, 200, 20);

function start() {
    if (car.top == 20 &&car.left < window.innerWidth-(window.innerWidth%car.speed)-car.size/2) {
        car.moveRight();
    }
    if (car.left == (window.innerWidth-(window.innerWidth%car.speed)-car.size/2) && car.top<(window.innerHeight-(window.innerHeight%car.speed)-car.size/2)){
        car.moveDown();
    }
    if (car.top == (window.innerHeight-(window.innerHeight%car.speed)-car.size/2)&& car.left>20) {
        car.moveLeft();
    }
    if (car.left==20 && car.top>20) {
        car.moveUp();
    }

    document.getElementById('game').innerHTML = car.getCarElement();
    setTimeout(start, 10);
}

start();