import { useContext, useEffect, useRef, useState } from "react";
import { GAMES, GAMES_LIST } from "./db/games";
import { PROFILES, PROFILES_LIST } from "./db/profiles";
import { Lag } from "./lag";
import { search } from "fast-fuzzy";
import * as _ from "lodash";
import { Router } from "./router";

const SEARCH_LIST = [
  ...GAMES_LIST.map((id) => ({
    id: id,
    search: GAMES[id].title,
    type: "game",
  })),
  ...PROFILES_LIST.map((id) => ({
    id: id,
    search: PROFILES[id].name,
    type: "profile",
  })),
  ...PROFILES_LIST.map((id) => ({
    id: id,
    search: id,
    type: "profile",
  })),
];

export function MeGank({ children, screen, setScreen, onGameSelect }) {
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
    // {
    //   name: "contact",
    //   text: "Tin nhắn",
    //   icon: require("./assets/icons/comments.png"),
    // },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { url, setUrl } = useContext(Router);

  const hoverCount = useRef();
  useEffect(() => {
    if (showSearch) {
      hoverCount.current = 0;
    }
  }, [showSearch]);

  return (
    <Lag className="megank">
      {(() => {
        if (screen === "friends") {
          return (
            <Lag className="yahoo">
              <Lag className="center">
                <Lag className="topbar">
                  <Lag className="mainbar">
                    <Lag
                      className="logo"
                      onClick={() => setScreen("home")}
                    ></Lag>
                    <Lag>Xin chao ban!</Lag>
                  </Lag>
                  <Lag className="subbar">
                    <Lag className="nav">
                      {nav.map((item) => {
                        return (
                          <Lag
                            className={
                              item.name === screen ? "item selected" : "item"
                            }
                            onClick={() => setScreen(item.name)}
                          >
                            <img src={item.icon} />
                            &nbsp;{item.text}
                          </Lag>
                        );
                      })}
                    </Lag>
                  </Lag>
                </Lag>
                {children}
              </Lag>
            </Lag>
          );
        } else {
          return (
            <Lag className="zing">
              <Lag className="left">
                <Lag className="logo" onClick={() => setScreen("home")}></Lag>
                <Lag className="sidebar">
                  {nav.map((item) => {
                    return (
                      <Lag
                        className={item.name === screen ? "selected" : ""}
                        onClick={() => setScreen(item.name)}
                      >
                        <img src={item.icon} />
                        &nbsp;&nbsp;{item.text}
                      </Lag>
                    );
                  })}
                </Lag>
              </Lag>
              <Lag className="right">
                <Lag className="topbar">
                  <Lag className="search">
                    <input
                      type="text"
                      placeholder={"Tìm kiếm"}
                      onFocus={(e) => {
                        setShowSearch(true);
                      }}
                      onBlur={(e) => {
                        if (hoverCount.current === 1) {
                          return;
                        }
                        setShowSearch(false);
                      }}
                      onChange={(e) => {
                        let results = search(e.target.value, SEARCH_LIST, {
                          keySelector: (obj) => obj.search,
                        });
                        results = _.uniqBy(results, (val) => val.type + val.id);
                        setSearchResults(results);
                      }}
                    />
                    {showSearch && (
                      <div
                        className="search-list"
                        onMouseOver={() => {
                          hoverCount.current = 1;
                        }}
                        onMouseOut={() => {
                          hoverCount.current = 0;
                        }}
                      >
                        {searchResults.map((result) => {
                          let title;
                          let cb;
                          if (result.type === "game") {
                            title = GAMES[result.id].title;
                            cb = () => {
                              onGameSelect(result.id);
                              setShowSearch(false);
                            };
                          } else if (result.type === "profile") {
                            title = PROFILES[result.id].name;
                            cb = () => {
                              setUrl(["friends", result.id]);
                              setShowSearch(false);
                            };
                          }
                          return (
                            <div onClick={cb} className="search-item">
                              {title}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    <Lag className="search-button">
                      <Lag className="search-icon"></Lag>
                    </Lag>
                  </Lag>
                  {/* <Lag>EN / VN</Lag> */}
                </Lag>
                <Lag className="content">{children}</Lag>
              </Lag>
            </Lag>
          );
        }
      })()}
    </Lag>
  );
}
