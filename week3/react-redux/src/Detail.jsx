import React from "react";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <div>
      <div>상세페이지</div>
      <button>
        <Link to="/">이전으로</Link>
      </button>
    </div>
  );
}

export default Detail;
