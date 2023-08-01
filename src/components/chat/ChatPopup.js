import { useState, useRef } from "react";
import {Overlay, Card, Button} from "react-bootstrap";
import "./ChatPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip , faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function ChatPopup() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  
  return (
    <>
      <img src="./images/messenger.png" alt="chat messenger" width="25%" height="25%" ref={target}
      onClick={() => setShow(!show)}
      className="chatIcon"/>
      <Overlay target={target.current} show={show} placement="top" className="chatPopup">
        {(props) => (
          <Card style={{ width: '18rem' }} id="overlay-example" {...props} >
            <Card.Header className="d-flex justify-content-between">
              <span className="fw-bold fs-4">Customer Support</span>
              <Button variant="outline-secondary">Let's Chat App</Button>
            </Card.Header>
          <Card.Body className="w-75">
          <div className="d-flex justify-content-end align-items-center">
            <div className="userMessage p-2">Xin chào</div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
            <div className="userMessage p-2">Làm thế nào để xem các sản phẩm</div>
            </div>
            <div className="d-flex justify-content-start align-items-center p-2">
            <img src="./images/customerIcon.png" alt="customerIcon" className="icon-customer"/>
            <div className="adminMessage p-2">ADMIN: Chào bạn</div>
            </div>
            <div className="d-flex justify-content-start align-items-center p-2">
            <img src="./images/customerIcon.png" alt="customerIcon" className="icon-customer"/>
            <div className="adminMessage p-2">ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</div>
            </div>
          </Card.Body>
       
          <Card.Footer>
          <div className="d-flex justify-content-start align-items-center p-2">
            <img src="./images/customerIcon.png" alt="customerIcon" className="icon-customer"/>
            <input type="text" placeholder="Enter Message!" />
            <button className="p-2 btn btn-light"><FontAwesomeIcon icon={faPaperclip} /></button>
            <button className="p-2 btn btn-light"><FontAwesomeIcon icon={faFaceSmile} /></button>
            <button className="p-2 btn btn-light"><FontAwesomeIcon icon={faPaperPlane} style={{color: "#2474ff",}}  /></button>
          </div>
          </Card.Footer>
        </Card>
        )}
      </Overlay>
    </>
  );
}
export default ChatPopup;
