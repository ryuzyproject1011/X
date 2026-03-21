import express from "express";

const router = express.Router();

// 해당 아이디에 대한 포스트 가져오기
// GET
// http://127.0.0.1:8080/post/:userid

// 글번호 포스트 가져오기
// GET
// http://127.0.0.1:8080/post/:id

// 포스트 작성
// POST
// http://127.0.0.1:8080/post
// json 형태로 입력 후 추가된 데이터를 모두 json 출력

// 포스트 수정
// put
// http://127.0.0.1:8080/post/:id
// json 형태로 입력 후 추가된 데이터를 모두 json 출력

// 포스트 삭제
// delete
// http://17.0.0.1:8080/post/:id

export default router;
