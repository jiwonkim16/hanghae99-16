import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <div>
      <h3>할일 목록</h3>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>
                {item.id}.&nbsp;
                <Link to={`/works/${item.id}`}>{item.todo}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
