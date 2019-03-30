// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

const raf = function (entry) {
    window.requestAnimFrame(entry);
};
const caf = function (entry) {
    window.cancelAnimationFrame(entry);
};
const random = function (min, max) {
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
}
const min = function (arr) {
    return Math.min.apply(Math, arr); // 3
}
const max = function (arr) {
    return Math.max.apply(Math, arr); // 3
}
const cl = function (entry) {
    console.log(entry);
}