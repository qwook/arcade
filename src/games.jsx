import { useCallback, useState } from "react";
import { Preview } from "./preview";
import { Game } from "./game";

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
          <div className="toolbar"></div>
          <div className="window-inner">
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
            <MeGank />
          </div>
        </div>
      </div>
      <Preview
        previewData={previewData}
        show={showPreview}
        onCancel={onCancel}
      />
    </>
  );
}

function MeGank() {
  return (
    <>
      <div className="megank">
        <div className="topbar">
          <div className="search">
            <input type="text" placeholder={"Tìm kiếm"} />
            <div className="search-button">
              <div className="search-icon"></div>
            </div>
          </div>
          <div>EN / VN</div>
        </div>
        <div className="logo"></div>
        <div className="sidebar">
          <div>
            <img src={require("./assets/icons/house.png")} />
            &nbsp;&nbsp;Bắt đầu
          </div>
          <div>
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
    </>
  );
}
