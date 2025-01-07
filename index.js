document.addEventListener("DOMContentLoaded", function() {
    const onload = document.getElementById("onload");
    const closeonload = document.getElementById("closeonload");
    const openonload = document.getElementById("openonload");
    onload.style.display = "flex";
    closeonload.addEventListener("click", function() {
        onload.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const onclick = document.getElementById("onclick");
    const closeonclick = document.getElementById("closeonclick");
    const openonclick = document.getElementById("openonclick");
    onclick.style.display = "none";
    closeonclick.addEventListener("click", function() {
        onclick.style.display = "none";
    });
    openonclick.addEventListener("click", function() {
        onclick.style.display = "flex";
    });
});
