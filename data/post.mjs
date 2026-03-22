let posts = [
  {
    id: "1",
    name: "김사과",
    userid: "apple",
    text: "Node.js 배우는 중",
    createdAt: Date.now().toString(),
    url: "",
  },
  {
    id: "2",
    name: "반하나",
    userid: "banana",
    text: "Node.js 배우는 중",
    createdAt: Date.now().toString(),
    url: "",
  },
  {
    id: "3",
    name: "오렌지",
    userid: "orange",
    text: "Node.js 배우는 중",
    createdAt: Date.now().toString(),
    url: "",
  },
  {
    id: "4",
    name: "이메론",
    userid: "melon",
    text: "Node.js 배우는 중",
    createdAt: Date.now().toString(),
    url: "",
  },
  {
    id: "5",
    name: "채리",
    userid: "cherry",
    text: "Node.js 배우는 중",
    createdAt: Date.now().toString(),
    url: "",
  },
];

// 모든 포스트를 반환
export async function getAll() {
  return posts;
}

// 글 번호(id)에 대한 포스트를 반환
export async function getById(id) {
  return posts.find((post) => post.id === id);
}

// 사용자 아이디(userid)에 대한 포스트를 반환
export async function getAllByUserid(userid) {
  return posts.filter((post) => post.userid === userid);
}

// 포스트를 작성
export async function create(userid, name, text) {
  const post = {
    id: Date.now().toString(),
    userid,
    name,
    text,
    createdAt: Date.now().toString(),
  };
  posts = [post, ...posts];
  return post;
}

// 포스트 변경
export async function update(id, text) {
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.text = text;
  }
  return post;
}

// 포스트 삭제
export async function remove(id) {
  posts = posts.filter((post) => post.id !== id);
}
