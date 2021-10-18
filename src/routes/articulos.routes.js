import { Router } from "express";
import * as articlesCtrl from "../controllers/article.controller.js";
/********** ARTICLES ROUTER *************/

const articleRouter = Router();

articleRouter.post("/", articlesCtrl.createArticle);

articleRouter.get("/", articlesCtrl.findAllArticles);

articleRouter.get("/:id", articlesCtrl.findOneById);

articleRouter.get("/find/:text", articlesCtrl.findArticleByName);

articleRouter.delete("/:id", articlesCtrl.deleteArticle);

articleRouter.put("/:id", articlesCtrl.updateArticle);

export default articleRouter;

/********** ARTICLES ROUTER *************/
