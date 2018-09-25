main();
function main() {
    let timer;
    let frame = 0;

    function wink() {
        let element;
        element = document.getElementById('myIcon');
        if (0 === frame % 30) {
            element.src = "/static/img/icon3.png";
            frame = 0;
        } else {
            element.src = "/static/img/icon.png";
        }
        frame++;
    }
    timer = setInterval(wink, 200);
}