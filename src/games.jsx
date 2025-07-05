import { useCallback, useState } from "react";
import { Preview } from "./preview";
import { Game } from "./game";
import { ScreenSaver } from "./screensaver";

export default function Games() {
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState({});

  const onGameSelect = useCallback((previewData) => {
    setShowPreview(true);
    setPreviewData(previewData);
  }, []);

  const onCancel = useCallback(() => {
    setShowPreview(false);
  }, []);

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
                https://mẹgank.cabin/games
              </div>
            </div>
            <div className="body">
              <MeGank>
                <div className="games">
                  <Game
                    name="Blood, Tooth & Tears"
                    preview={require("./games/bloodtoothtears/preview.png")}
                    media={[
                      require("./games/bloodtoothtears/preview.png"),
                      require("./games/agameaboutme/preview.png"),
                      require("./games/bloodtoothtears/preview.png"),
                    ]}
                    onGameSelect={onGameSelect}
                  />
                  <Game
                    name="a game about me"
                    preview={require("./games/agameaboutme/preview.png")}
                    onGameSelect={onGameSelect}
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
                </div>
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

function MeGank({ children }) {
  return (
    <>
      <div className="megank">
        <div className="left">
          <div className="logo"></div>
          <div className="sidebar">
            <div>
              <img src={require("./assets/icons/house.png")} />
              &nbsp;&nbsp;Bắt đầu
            </div>
            <div className="selected">
              <img src={require("./assets/icons/controller.png")} />
              &nbsp;&nbsp;Games
            </div>
            <div>
              <img src={require("./assets/icons/user.png")} />
              &nbsp;&nbsp;Bạn Bè
            </div>
            <div>
              <img src={require("./assets/icons/comments.png")} />
              &nbsp;&nbsp;Tin nhắn
            </div>
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
        </div>
      </div>
    </>
  );
}
