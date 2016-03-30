var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var styles = require('./style.css');
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        _super.apply(this, arguments);
    }
    Home.prototype.render = function () {
        console.log('styles = ', styles);
        return React.createElement("div", null, React.createElement("h1", {"className": styles.red}, "App"), React.createElement("h2", {"className": styles.blue}, "Blue"), this.props.extra);
    };
    return Home;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
;
//# sourceMappingURL=Home.js.map