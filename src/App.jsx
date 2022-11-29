import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import User from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, done: true, title: "리액트 공부하기", contents: "기초공부합니다" },
    {
      id: 2,
      done: false,
      title: "리액트 공부하기",
      contents: "기초공부합니다",
    },
  ]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      contents: contents,
      done: true,
    };

    setUsers([...users, newUser]);
  };
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  const changeUserHandler = (id) => {
    setUsers(
      users.map((user) => {
        return user.id === id ? (user.done = false) : user;
      })
    );
  };

  return (
    <div className="main">
      <div className="header">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className="title-content">
        <div className="title">
          <h4>제목</h4>
          <input
            className="input-box"
            value={title}
            placeholder=""
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />
          <h4>내용</h4>
          <input
            className="input-box"
            value={contents}
            placeholder=""
            // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
            onChange={(e) => setContents(e.target.value)}
          />
        </div>
        <CustomButton color="#00796b" onClick={addUserHandler} padding>
          추가하기
        </CustomButton>
      </div>
      <h2>&nbsp;&nbsp;Working..🔥</h2>
      <ul className="app-style">
        {users.map((user) =>
          user.done === true ? (
            <User
              handleChange={changeUserHandler}
              handleDelete={deleteUserHandler}
              user={user}
              key={user.id}
            ></User>
          ) : null
        )}
      </ul>
      <h2>&nbsp;&nbsp;Done..!🎉</h2>
      <ul className="app-style">
        {users.map((user) =>
          user.done === false ? (
            <User
              handleChange={changeUserHandler}
              handleDelete={deleteUserHandler}
              user={user}
              key={user.id}
            ></User>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default App;
