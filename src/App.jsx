import "@/App.css";
import banner from "@/assets/banner.png";
import { useState, useRef } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const menuItems = useRef(null);
  const navBar = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    menuItems.current.classList.toggle("menu-open");
    navBar.current.classList.toggle("active");
  };

  const navItems = [
    "白頭翁的特性",
    "白頭翁的故事",
    "白頭翁的美照",
    "白頭翁的危機",
  ];

  const paragraphs = [
    {
      title: "外 觀",
      content:
        "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。",
    },
    {
      title: "棲 地",
      content:
        "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。",
    },
    {
      title: "食 性",
      content:
        "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。",
    },
  ];

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="content" ref={navBar}>
          <div
            className="icon"
            style={
              {
                // zIndex: 1,
              }
            }
          >
            <div
              style={{
                position: "relative",
                marginLeft: "0.5rem",
                marginTop: "0.75rem",
                transform: `scale(1.2)`,
              }}
            >
              <div className="bird-eyes"></div>
              <div className="bird-beak">
                <div className="white1"></div>
                <div className="white2"></div>
                <div className="white3"></div>
              </div>
              <div className="bird-head">
                <div className="white1"></div>
              </div>
            </div>
          </div>
          <p className="title">白頭翁不吃小米</p>
          <button className="menu-toggle" onClick={handleToggle}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
              >
                <line
                  y1="-2"
                  x2="28.6924"
                  y2="-2"
                  transform="matrix(0.730323 0.683102 -0.702025 0.712152 0.379639 2.8696)"
                  stroke="black"
                  strokeWidth="4"
                />
                <line
                  y1="-2"
                  x2="28.0896"
                  y2="-2"
                  transform="matrix(0.716329 -0.697763 0.716329 0.697763 3.2583 22.4695)"
                  stroke="black"
                  strokeWidth="4"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
              >
                <line
                  x1="0.379578"
                  y1="2.8696"
                  x2="24.3796"
                  y2="2.8696"
                  stroke="black"
                  strokeWidth="4"
                />
                <line
                  x1="0.379578"
                  y1="20.8696"
                  x2="24.3796"
                  y2="20.8696"
                  stroke="black"
                  strokeWidth="4"
                />
                <line
                  x1="0.379578"
                  y1="11.8696"
                  x2="15.6523"
                  y2="11.8696"
                  stroke="black"
                  strokeWidth="4"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="menu-items" ref={menuItems}>
          {navItems.map((item, index) => (
            <p
              className={index === selected ? "item selected" : "item"}
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="banner">
          <img
            src={banner} // 替換成你的圖片 URL
            alt="Banner Image"
            className="image"
          />
          <div className="content">
            <p className="title">白頭翁 (Chinese bulbul)</p>
            <p className="sub-title">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
            </p>
          </div>
        </div>

        <div className="paragraphs-container">
          {paragraphs.map((paragraph, index) => (
            <div className="paragraph" key={index}>
              <div className="title">
                <span>
                  {paragraph.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="circle"
                  >
                    <circle
                      cx="13"
                      cy="13"
                      r="8"
                      stroke="#AA6666"
                      strokeOpacity="0.6"
                      strokeWidth="8"
                    />
                  </svg>
                </span>
              </div>

              <div className="content">{paragraph.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
