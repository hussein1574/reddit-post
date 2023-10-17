import "./Comments.scss";

export default function Comments() {
  return (
    <ul className="comments">
      <li className="comment">
        <div className="comment__author comment__show">AUTHOR</div>
        <p className="comment__text">TEXT</p>
        <p className="comment__buttons ">BUTTONS</p>
        <ul className="comment__replies">
          <li className="comment comment--child">
            <div className="comment__author comment__show">AUTHOR</div>
            <p className="comment__text">TEXT</p>
            <p className="comment__buttons ">BUTTONS</p>
            <ul className="comment__replies">
              <li className="comment comment--child">
                <div className="comment__author">AUTHOR</div>
                <p className="comment__text">TEXT</p>
                <p className="comment__buttons">BUTTONS</p>
              </li>
            </ul>
          </li>
          <li className="comment comment--child">
            <div className="comment__author comment__show">AUTHOR</div>
            <p className="comment__text">TEXT</p>
            <p className="comment__buttons ">BUTTONS</p>
            <ul className="comment__replies">
              <li className="comment comment--child">
                <div className="comment__author">AUTHOR</div>
                <p className="comment__text">TEXT</p>
                <p className="comment__buttons">BUTTONS</p>
              </li>
            </ul>
          </li>
          <li className="comment comment--child">
            <div className="comment__author comment__show">AUTHOR</div>
            <p className="comment__text">TEXT</p>
            <p className="comment__buttons ">BUTTONS</p>
            <ul className="comment__replies">
              <li className="comment comment--child">
                <div className="comment__author">AUTHOR</div>
                <p className="comment__text">TEXT</p>
                <p className="comment__buttons">BUTTONS</p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="comment">
        <div className="comment__author comment__show">AUTHOR</div>
        <p className="comment__text">TEXT</p>
        <p className="comment__buttons ">BUTTONS</p>
        <ul className="comment__replies">
          <li className="comment comment--child">
            <div className="comment__author comment__show">AUTHOR</div>
            <p className="comment__text">TEXT</p>
            <p className="comment__buttons ">BUTTONS</p>
            <ul className="comment__replies">
              <li className="comment comment--child">
                <div className="comment__author">AUTHOR</div>
                <p className="comment__text">TEXT</p>
                <p className="comment__buttons">BUTTONS</p>
              </li>
            </ul>
          </li>
          <li className="comment comment--child">
            <div className="comment__author comment__show">AUTHOR</div>
            <p className="comment__text">TEXT</p>
            <p className="comment__buttons ">BUTTONS</p>
            <ul className="comment__replies">
              <li className="comment comment--child">
                <div className="comment__author">AUTHOR</div>
                <p className="comment__text">TEXT</p>
                <p className="comment__buttons">BUTTONS</p>
              </li>
            </ul>
          </li>
          <li className="comment comment--child">
            <div className="comment__author comment__show">AUTHOR</div>
            <p className="comment__text">TEXT</p>
            <p className="comment__buttons ">BUTTONS</p>
            <ul className="comment__replies">
              <li className="comment comment--child">
                <div className="comment__author">AUTHOR</div>
                <p className="comment__text">TEXT</p>
                <p className="comment__buttons">BUTTONS</p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
