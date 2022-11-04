
document.addEventListener('DOMContentLoaded', function (event) {

    document.getElementById('submit').style.visibility = 'visible';

    document.getElementById('submit').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };


});


var num = "5";
function ratedValue(e) {
    document.getElementById("submit").removeAttribute("disabled");
    num = e.value;
    document.getElementById("val").innerHTML = num;
}
