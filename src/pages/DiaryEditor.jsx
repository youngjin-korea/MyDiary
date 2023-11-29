import React, { useState, useRef, useEffect } from "react";

const DiaryEditor = ({ onCreate }) => {
  // useEffect(() => {
  //   console.log("에디터 마운트");
  // }, []);
  const [state, setState] = useState({ author: "", content: "", emotion: 1 });

  const authorRef = useRef();
  const contentRef = useRef();

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorRef.current.focus();
      return;
    }
    if (state.content.length < 1) {
      contentRef.current.focus();
      return;
    }
    alert("저장 성공!");

    onCreate(state.author, state.content, state.emotion);
    setState({ author: "", content: "", emotion: 1 });
  };

  return (
    <div className="DiaryEditor">
      <h2>일기 쓰기 🔑</h2>
      <div>
        <input
          placeholder="이름"
          name="author"
          value={state.author}
          onChange={handleChangeState}
          ref={authorRef}
        />
      </div>
      <div>
        <textarea
          placeholder="내용"
          name="content"
          value={state.content}
          onChange={handleChangeState}
          ref={contentRef}
        />
      </div>
      <div>
        <span>오늘의 감정점수: </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>제출하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
