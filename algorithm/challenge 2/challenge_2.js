/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.undo = function (steps) {};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.redo = function (steps) {};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.undo(steps)
 * var param_3 = obj.redo(steps)
 */
