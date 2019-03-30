document.body.addEventListener("click", allowClick, true);
function allowClick(event) {
    if (panMode) {
        event.stopPropagation();
    }
}