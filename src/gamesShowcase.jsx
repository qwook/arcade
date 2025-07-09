import { createContext, useCallback, useContext, useRef, useState } from "react";
import { Preview } from "./preview";
import { Game } from "./game";
import { ScreenSaver } from "./screensaver";
import { Profile } from "./profile";
import { FriendsList } from "./friendlist";
import { Lag } from "./lag";
import { Router, RouterProvider } from "./router";
import "./scrollbar/scrollbar.scss";
import { GAMES, GAMES_LIST } from "./db/games";

window.setFullscreen && window.setFullscreen(true);

function Games({onGameSelect}) {
  return <div className="games">
    {GAMES_LIST.map((id) => {
      return <Game
        id={id}
        onGameSelect={onGameSelect}
      />
    })}
    </div>
}

export default function App() {
  return <RouterProvider><GamesShowcase /></RouterProvider>
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
      <PreviewContext.Provider value={{onGameSelect}}>
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
                  https://mẹgank.cabin/{url.join("/")}
                </div>
              </div>
              <div className="body">
                <MeGank screen={url[0]} setScreen={(screen) => setUrl([screen])}>
                  {(() => {
                    if (url[0] === "friends") {
                      if (url[1]) {
                        return <Profile id={url[1]} />
                      }
                      return <FriendsList />
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
          id={previewData}
          show={showPreview}
          onCancel={onCancel}
        />
        <ScreenSaver />
      </PreviewContext.Provider>
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
      <Lag className="megank">
    {
      (() => {
        if (screen === "friends") {
          return <Lag className="yahoo">
            <Lag className="center">
              <Lag className="topbar">
                <Lag className="mainbar">
                  <Lag className="logo"></Lag>
                  <Lag>Xin chao ban! [ EN / VN ]</Lag>
                </Lag>
                <Lag className="subbar">
                  <Lag className="nav">
                  {
                    nav.map((item) => {
                      return <Lag className={item.name === screen ? "item selected" : "item"} onClick={() => setScreen(item.name)}>
                        <img src={item.icon} />
                        &nbsp;{item.text}
                      </Lag>
                    })
                  }
                  </Lag>
                </Lag>
              </Lag>
              {children}
            </Lag>
          </Lag>
        } else {
          
       return  (<Lag className="zing"><Lag className="left">
          <Lag className="logo"></Lag>
          <Lag className="sidebar">
            {
              nav.map((item) => {
                return <Lag className={item.name === screen ? "selected" : ""} onClick={() => setScreen(item.name)}>
                  <img src={item.icon} />
                  &nbsp;&nbsp;{item.text}
                </Lag>
              })
            }
          </Lag>
        </Lag>
        <Lag className="right">
          <Lag className="topbar">
            <Lag className="search">
              <input type="text" placeholder={"Tìm kiếm"} />
              <Lag className="search-button">
                <Lag className="search-icon"></Lag>
              </Lag>
            </Lag>
            <Lag>EN / VN</Lag>
          </Lag>
          <Lag className="content">{children}</Lag>
      </Lag></Lag>)
        }
      })()
    }
    </Lag>
  );
}
