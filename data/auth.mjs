let users = [
  {
    id: "1",
    userid: "apple",
    password: "1111",
    name: "김사과",
    email: "apple@apple.com",
    url: "",
  },
  {
    id: "2",
    userid: "banana",
    password: "1111",
    name: "반하나",
    email: "banana@banana.com",
    url: "",
  },
  {
    id: "3",
    userid: "orange",
    password: "1111",
    name: "오렌지",
    email: "orange@orange.com",
    url: "",
  },
  {
    id: "4",
    userid: "melon",
    password: "1111",
    name: "이메론",
    email: "melon@melon.com",
    url: "",
  },
  {
    id: "5",
    userid: "cherry",
    password: "1111",
    name: "채리",
    email: "cherry@cherry.com",
    url: "",
  },
];

export async function createUser(userid, password, name, email) {
  const user = {
    id: Date.now().toString(),
    userid,
    password,
    name,
    email,
    url: "",
  };
  users = [user, ...users];
  return users;
}

export async function login(userid, password) {
  const user = users.find(
    (user) => user.userid === userid && user.password === password,
  );
  return user;
}
