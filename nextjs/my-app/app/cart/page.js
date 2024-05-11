import insa from "./data.js";
import 작명 from "./data.js";

export default function cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner content="현대카드" />
      <Button btnColor = "blue"/>
    </div>
  );
}

//컴포넌트 만드는 법
//반복되는 html를 컴포넌트화 시키자 재사용 가능 할 것 같다면!
//props 오직 부모 > 자식에게 데이터 전달 따라서 최상위 컴포넌트에 데이터 저장하는게 좋음
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

//next에서는 서버 컴포넌트, 클라이언트 컴포넌트 두가지가 있다.
//위의 아무대나 만든 컴포넌트는 전부 서버 컴포넌트가 된다.
//문서 최상단에 'use client'를 작성하면 그 아래는 모두 클라이언트 컴포넌트가 된다.
//서버 컴포넌트와 클라이언트 컴포넌트의 차이
//서버 컴포넌트에선 자바스크립트 기능을 집어넣을 수 없다. ex) onClick, useEffect, useState...

//props는 함수의 파라미터와 유사하다.
function Banner(props) {
  return <h4>{props.content} 결제 행사중</h4>;
}

function Button(props) {
  return (
    <div>
      <button
        style={{ padding: "15px", background: props.btnColor, width: "100px" }}>파란색으로</button>
    </div>
  );
}
