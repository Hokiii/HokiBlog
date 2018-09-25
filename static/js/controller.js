function changeIcon() {
    element=document.getElementById('myIcon')
    if (element.src.match("icon2")) {
        element.src = "/static/img/icon.png";
    } else {
        element.src = "/static/img/icon2.png";
    }
}

// function changeInner(){
//     document.getElementById("myBtn").addEventListener("click", displayDate);
//     function displayDate() {
//         document.getElementById("demo").innerHTML = Date();
//      }
// }


