import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Preview } from "./preview";
import { Game } from "./game";
import { ScreenSaver } from "./screensaver";
import { Profile } from "./profile";
import { FriendsList } from "./friendlist";
import { Lag } from "./lag";
import { Router, RouterProvider } from "./router";
import "./scrollbar/scrollbar.scss";
import { GAMES, GAMES_LIST } from "./db/games";
import { Home } from "./home";
import { MeGank } from "./megank";

window.setFullscreen && window.setFullscreen(true);

function Games({ onGameSelect }) {
  return (
    <div className="games">
      {GAMES_LIST.map((id) => {
        return <Game id={id} onGameSelect={onGameSelect} />;
      })}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <GamesShowcase />
    </RouterProvider>
  );
}

export const PreviewContext = createContext();

export function GamesShowcase() {
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const history = useRef(["games"]);

  const onCancel = useCallback(() => {
    // setUrl(["games"]);
    setShowPreview(false);
  }, []);

  const [screen, setScreen] = useState("games");
  const { url, setUrl } = useContext(Router);

  const onGameSelect = useCallback((previewData) => {
    // setShowPreview(true);
    // setUrl(["games", "test"]);
    setShowPreview(true);
    setPreviewData(previewData);
  }, []);

  return (
    <>
      <PreviewContext.Provider value={{ onGameSelect }}>
        <div className={["games-screen", showPreview ? "blur" : ""].join(" ")}>
          <div className="window">
            <div className="window-inner">
              <div className="title-bar">
                <img
                  src={require("./assets/ie_icon.png")}
                  style={{
                    height: 19,
                    marginRight: 7,
                    verticalAlign: "bottom",
                  }}
                />
                mẹGank
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
                  https://mẹgank.cabin/{url.join("/")}
                </div>
              </div>
              <div className="body">
                <MeGank
                  screen={url[0]}
                  setScreen={(screen) => setUrl([screen])}
                  onGameSelect={onGameSelect}
                >
                  {(() => {
                    if (url[0] === "friends") {
                      if (url[1]) {
                        return <Profile id={url[1]} />;
                      }
                      return <FriendsList />;
                    } else if (url[0] === "home") {
                      return <Home />;
                    } else {
                      return <Games onGameSelect={onGameSelect} />;
                    }
                  })()}
                </MeGank>
              </div>
            </div>
          </div>
        </div>
        <Preview id={previewData} show={showPreview} onCancel={onCancel} />
        <ScreenSaver />
      </PreviewContext.Provider>
    </>
  );
}
