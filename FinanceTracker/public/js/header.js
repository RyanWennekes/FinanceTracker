document.onload = pushDownContent();

function pushDownContent() {
    let content = document.getElementsByClassName('content')[0];
    let bodyWidth = document.body.clientWidth;
    content.style.width = bodyWidth * 0.8 + "px";
    content.style.left = (bodyWidth / 2 - bodyWidth * 0.8 / 2) + "px";
    content.style.position = "absolute";
    content.style.top = document.getElementsByClassName('header')[0].offsetHeight + "px";
}
