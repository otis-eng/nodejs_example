"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postRouter_1 = __importDefault(require("./router/postRouter"));
const app = (0, express_1.default)();
app.use("/post", postRouter_1.default);
app.listen(8088, () => {
    console.log("App listten port: " + 8088);
});
