import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ChatPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPaperclip,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
function ChatPopup() {

  // State isShow quản lý việc ẩn/hiện khung chat
  const [isShow, setIsShow] = useState(false);

  // State isTouch xử lý khi người dùng hover vào icon chat
  const [isTouch, setIsTouch] = useState(false);

  return (
    <>
      <img
        src={`./images/${!isTouch ? "messenger" : "messenger-hover"}.png`}
        alt="chat messenger"
        width="25%"
        height="25%"
        onClick={() => setIsShow(!isShow)}
        onMouseOver={() => setIsTouch(true)}
        onMouseLeave={() => setIsTouch(false)}
        className="chatIcon"
      />
      {isShow && (
        <Card id="overlay-example" className="chatLayout bg-white">
          <Card.Header className="d-flex justify-content-between bg-white">
            <span className="fw-bold fs-4">Customer Support</span>
            <Button variant="outline-secondary">Let's Chat App</Button>
          </Card.Header>
          <Card.Body className="bg-white">
            <div className="w-75">
              <div className="d-flex justify-content-end align-items-center">
                <div className="userMessage p-2">Xin chào</div>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <div className="userMessage p-2">
                  Làm thế nào để xem các sản phẩm
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center p-2">
                <img
                  src="./images/customerIcon.png"
                  alt="customerIcon"
                  className="icon-customer"
                />
                <div className="adminMessage p-2">ADMIN: Chào bạn</div>
              </div>
              <div className="d-flex justify-content-start align-items-center p-2">
                <img
                  src="./images/customerIcon.png"
                  alt="customerIcon"
                  className="icon-customer"
                />
                <div className="adminMessage p-2">
                  ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                </div>
              </div>
            </div>
            <div className="w-25 bg-white" />
          </Card.Body>

          <Card.Footer className="bg-white ">
            <div className="d-flex justify-content-start align-items-center p-2">
              <img
                src="./images/customerIcon.png"
                alt="customerIcon"
                className="icon-customer"
              />
              <input type="text" placeholder="Enter Message!" />
              <button className="p-2 btn btn-light">
                <FontAwesomeIcon icon={faPaperclip} />
              </button>
              <button className="p-2 btn btn-light">
                <FontAwesomeIcon icon={faFaceSmile} />
              </button>
              <button className="p-2 btn btn-light">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "#2474ff" }}
                />
              </button>
            </div>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}
export default ChatPopup;
