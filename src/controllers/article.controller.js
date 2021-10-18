import * as Cnt from "../constants";
import { getPagination } from "../lib/getPagination";
import Article from "../models/Article";
/********** Article Controller *************/

export const createArticle = async (req, res) => {
  try {
    const { title, text, author } = req.body;

    if (!title || !text) res.status(400).json({ sucess: false, message: Cnt.ER_CREATE_AR_REQ });

    const newArticle = new Article({ title, text, author });
    const savedArticle = await newArticle.save();
    res.json({ sucess: true, message: Cnt.TX_AR_CREATE, savedArticle });
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_CREATE_CAT, error });
  }
};

export const findAllArticles = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const { limit, offset } = getPagination(page, size);

    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};

    const data = await Article.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      articles: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_FINDALL, error });
  }
};

export const findOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findById(id);

    if (!article) return res.status(404).json({ message: Cnt.ER_NOTFOUND1 + id + Cnt.ER_NOTFOUND2 });

    res.json(article);
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_FINDONE, error });
  }
};

export const findArticleByName = async (req, res) => {
  try {
    let string = req.params.text;

    const articles = await Article.find({
      $or: [
        { "title": new RegExp(string), $options: "i" },
        { "text": new RegExp(string), $options: "i" },
      ],
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_FINDNAME, error });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    res.json({ message: deletedArticle.title + Cnt.TX_DELETE });
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_DELETE, error });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: updatedArticle.title + Cnt.TX_UPDATE });
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_UPDATE, error });
  }
};

/********** Article Controller *************/
