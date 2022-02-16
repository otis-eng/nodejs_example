"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./../db/post");
class PostController {
    static createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let post = yield {
                id: req.body.id,
                title: req.body.title,
                content: req.body.content,
            };
            try {
                post_1.PostInstance.create(post);
                return res.status(200).send({ message: "sucess!" });
            }
            catch (err) {
                return res.status(400).send({ message: "Error: " + err });
            }
        });
    }
    readAllPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let post = yield post_1.PostInstance.findAll();
                return res.status(200).send({ message: "success", data: post });
            }
            catch (err) {
                return res.status(400).send({ message: "Error: " + err });
            }
        });
    }
}
exports.default = PostController;
