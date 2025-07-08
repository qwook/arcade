import { useCallback, useState } from "react";
import { Preview } from "./preview";
import { Game } from "./game";
import { ScreenSaver } from "./screensaver";
import { Profile } from "./profile";

window.setFullscreen && window.setFullscreen(true);

function Games({onGameSelect}) {
  return <div className="games">
      <Game
        name="Blood, Tooth & Tears"
        preview={require("./games/bloodtoothtears/preview.png")}
        media={[
          require("./games/bloodtoothtears/preview.png"),
          require("./games/agameaboutme/preview.png"),
          require("./games/bloodtoothtears/preview.png"),
        ]}
        path="bloodtoothtears\\Blood, Tooth & Tears.exe"
        onGameSelect={onGameSelect}
      />
      <Game
        name="mineblast"
        preview={require("./games/bloodtoothtears/preview.png")}
        onGameSelect={onGameSelect}
        path="file://C://Program Files (x86)//arcade//games//mineblast//index.html"
        webgame
      />
      <Game
        name="inside my 10 year old headd"
        preview={require("./games/insidemy10yearoldheadd/preview.png")}
        onGameSelect={onGameSelect}
      />
      <Game
        name="inside my 10 year old headd"
        preview={require("./games/insidemy10yearoldheadd/preview.png")}
        onGameSelect={onGameSelect}
      />
      <Game
        name="a game about me"
        preview={require("./games/agameaboutme/preview.png")}
        onGameSelect={onGameSelect}
      />
      <Game
        name="Blood, Tooth & Tears"
        preview={require("./games/bloodtoothtears/preview.png")}
        onGameSelect={onGameSelect}
      />
      <Game
        name="Blood, Tooth & Tears"
        preview={require("./games/bloodtoothtears/preview.png")}
        onGameSelect={onGameSelect}
      />
      <Game
        name="Blood, Tooth & Tears"
        preview={require("./games/bloodtoothtears/preview.png")}
        onGameSelect={onGameSelect}
      />
      <Game
        name="Blood, Tooth & Tears"
        preview={require("./games/bloodtoothtears/preview.png")}
        onGameSelect={onGameSelect}
      />
      <Game
        name="Blood, Tooth & Tears"
        preview={require("./games/bloodtoothtears/preview.png")}
        onGameSelect={onGameSelect}
      />
    </div>
}

export default function GamesShowcase() {
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState({});

  const onGameSelect = useCallback((previewData) => {
    setShowPreview(true);
    setPreviewData(previewData);
  }, []);

  const onCancel = useCallback(() => {
    setShowPreview(false);
  }, []);

  const [screen, setScreen] = useState("games");

  return (
    <>
      <div className={["games-screen", showPreview ? "blur" : ""].join(" ")}>
        <div className="window">
          <div className="window-inner">
            <div className="title-bar">
              <img
                src={require("./assets/ie_icon.png")}
                style={{ height: 19, marginRight: 7, verticalAlign: "bottom" }}
              />
              mẹGank - Games
            </div>
            <div className="toolbar">
              <div className="address-text">
                A<u>d</u>dress
              </div>
              <div className="address">
                <img
                  src={require("./assets/ie_icon.png")}
                  style={{
                    height: 19,
                    marginRight: 7,
                    verticalAlign: "bottom",
                  }}
                />
                https://mẹgank.cabin/{screen}
              </div>
            </div>
            <div className="body">
              <MeGank screen={screen} setScreen={setScreen}>
                {(() => {
                  if (screen === "friends") {
                    return <Profile />
                  } else {
                    return <Games onGameSelect={onGameSelect} />
                  }
                })()}
              </MeGank>
            </div>
          </div>
        </div>
      </div>
      <Preview
        previewData={previewData}
        show={showPreview}
        onCancel={onCancel}
      />
      <ScreenSaver />
    </>
  );
}

function MeGank({ children, screen, setScreen }) {
  const nav = [
    {
      name: "home",
      text: "Bắt đầu",
      icon: require("./assets/icons/house.png"),
    },
    {
      name: "games",
      text: "Games",
      icon: require("./assets/icons/controller.png"),
    },
    {
      name: "friends",
      text: "Bạn Bè",
      icon: require("./assets/icons/user.png"),
    },
    {
      name: "contact",
      text: "Tin nhắn",
      icon: require("./assets/icons/comments.png"),
    },
  ]

  return (
      <div className="megank">
    {
      (() => {
        if (screen === "friends") {
          return <div className="yahoo">
            <div className="center">
              <div className="topbar">
                <div className="mainbar">
                  <div className="logo"></div>
                  <div>Xin chao ban! [ EN / VN ]</div>
                </div>
                <div className="subbar">
                  <div className="nav">
                  {
                    nav.map((item) => {
                      return <div className={item.name === screen ? "item selected" : "item"} onClick={() => setScreen(item.name)}>
                        <img src={item.icon} />
                        &nbsp;{item.text}
                      </div>
                    })
                  }
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
        } else {
          
       return  (<div className="zing"><div className="left">
          <div className="logo"></div>
          <div className="sidebar">
            {
              nav.map((item) => {
                return <div className={item.name === screen ? "selected" : ""} onClick={() => setScreen(item.name)}>
                  <img src={item.icon} />
                  &nbsp;&nbsp;{item.text}
                </div>
              })
            }
          </div>
        </div>
        <div className="right">
          <div className="topbar">
            <div className="search">
              <input type="text" placeholder={"Tìm kiếm"} />
              <div className="search-button">
                <div className="search-icon"></div>
              </div>
            </div>
            <div>EN / VN</div>
          </div>
          <div className="content">{children}</div>
      </div></div>)
        }
      })()
    }
    </div>
  );
}
