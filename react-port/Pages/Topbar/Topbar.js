import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#"> Home </a>
        </div>
        <div className="middle">
          <h3> Welcome </h3>
        </div>
        <div className="right"> Right</div>
      </div>
    </div>
  );
}
