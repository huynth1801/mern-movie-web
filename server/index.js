"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var http_1 = __importDefault(require("http"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
// configures dotenv to work in your application
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
var PORT = process.env.PORT || 4000;
var server = http_1.default.createServer(app);
mongoose_1.default.connect(process.env.MONGODB_URL).then(function () {
    console.log('Mongodb is connected');
    server.listen(PORT, function () {
        console.log("Server is listening on PORT ".concat(PORT));
    });
}).catch(function (error) {
    console.log(error);
    process.exit(1);
});
