import express from "express";
import * as postController from "../controller/post.mjs";

const router = express.Router();

// 전체 포스트 가져오기
// 해당 아이디에 대한 포스트 가져오기
// GET
// http://127.0.0.1:8080/posts/:userid
router.get("/", postController.getPosts);

// 글번호 포스트 가져오기
// GET
// http://127.0.0.1:8080/post/:id
router.get("/:id", postController.getPost);

// 포스트 작성
// POST
// http://127.0.0.1:8080/post
// json 형태로 입력 후 추가된 데이터를 모두 json 출력
router.post("/", postController.createPost);

// 포스트 수정
// put
// http://127.0.0.1:8080/post/:id
// json 형태로 입력 후 추가된 데이터를 모두 json 출력
router.put("/:id", postController.updatePost);

// 포스트 삭제
// delete
// http://17.0.0.1:8080/post/:id
router.delete("/:id", postController.deletePost);

export default router;
