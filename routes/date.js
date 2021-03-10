exports.myDateTime = function () {
    var date = new Date();
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};