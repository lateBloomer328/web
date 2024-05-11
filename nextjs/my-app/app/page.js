import Link from "next/link";

export default function home() {
  let name = "park";
  return (
    <div>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
