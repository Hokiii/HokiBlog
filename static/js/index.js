index();
function index() {
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

function changeIcon() {
    element=document.getElementById('myIcon')
    if (element.src.match("icon2")) {
        element.src = "/static/img/icon.png";
    } else {
        element.src = "/static/img/icon2.png";
    }
}