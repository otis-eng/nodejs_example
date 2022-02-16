"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers = express_1.default.Router();
const postController_1 = __importDefault(require("../controller/postController"));
// useing with static
routers.post("/createPost", postController_1.default.createPost);
// useing with not static
routers.get("/", (new postController_1.default).readAllPost);
exports.default = routers;
