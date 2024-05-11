"use client";

import { useState } from "react";

export default function list() {
  let product = ["Tomatos", "Pasta", "Coconut"];
  let [Count, chgCount] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item, i) => {
        return (
          <div className="food" key={i}>
            <h4>{item} $40</h4>
            <img className="food-img" src={`food${i}.png`} />
            <span> {Count[i]} </span>
            <button
              onClick={() => {
                let copy = [...Count];
                copy[i]++;
                chgCount(copy);
              }}>
              +
            </button>
            <button
              onClick={() => {
                let copy = [...Count];
                copy[i]--;
                chgCount(copy);
              }}>
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

//useState 문법을 사용하면 자동재랜더링이 가능함
//자주 변하지 않는 내용은 그냥 변수사용하자
