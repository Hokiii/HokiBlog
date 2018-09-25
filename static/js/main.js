main();
function main() {
    var timer;
    function wink(){
        var interval;
       function change(){
            element=document.getElementById('myIcon')
            if (element.src.match("icon")) {
                element.src = "/static/img/icon3.png";
            } else {
                element.src = "/static/img/icon.png";
            }
        }
        interval = setInterval(change,600);
    }
    timer = setInterval(wink, 1000);
}