import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [openEmojis, setOpenEmojis] = useState(false);
  const [msgText, setMsgText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const addEmojiToText = (e) => {
    setMsgText((prev) => prev + e.emoji);
    setOpenEmojis(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <h3>Jane Doe</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa ex, quidem officia iure nisi hic tempora, natus fuga beatae
              perspiciatis delectus dolorum doloribus quisquam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa ex, quidem officia iure nisi hic tempora, natus fuga beatae
              perspiciatis delectus dolorum doloribus quisquam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa ex, quidem officia iure nisi hic tempora, natus fuga beatae
              perspiciatis delectus dolorum doloribus quisquam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa ex, quidem officia iure nisi hic tempora, natus fuga beatae
              perspiciatis delectus dolorum doloribus quisquam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa ex, quidem officia iure nisi hic tempora, natus fuga beatae
              perspiciatis delectus dolorum doloribus quisquam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa ex, quidem officia iure nisi hic tempora, natus fuga beatae
              perspiciatis delectus dolorum doloribus quisquam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/7502118/pexels-photo-7502118.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa ex, quidem officia iure nisi hic tempora, natus fuga beatae
              perspiciatis delectus dolorum doloribus quisquam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="img.png" alt="" />
          <img src="camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>

        <input
          type="text"
          name="msg"
          id="msg"
          placeholder="Type a message..."
          value={msgText}
          onChange={(e) => setMsgText(e.target.value)}
        />

        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmojis((prev) => !prev)}
          />
          <div className="emojiPicker">
            <EmojiPicker open={openEmojis} onEmojiClick={addEmojiToText} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
