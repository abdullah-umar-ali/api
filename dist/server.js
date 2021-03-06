"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var Products_1 = require("./handlers/Products");
var Users_1 = require("./handlers/Users");
var orders_1 = require("./handlers/orders");
var app = (0, express_1.default)();
var address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
(0, Products_1.ProductRoutes)(app);
(0, orders_1.OrderRoutes)(app);
(0, Users_1.UsersRoutes)(app);
exports.default = app;
