import { useContext, useEffect, useMemo, useRef, useState } from "react";
import escapeCssUrl from "sk2tch/utils/escapeCssUrl";
import { GAMES } from "./db/games";
import { Router } from "./router";
import { PROFILES } from "./db/profiles";
import { QRCodeSVG } from "qrcode.react";

const Launcher = window.Launcher;

export function Preview({ show, onCancel, id }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [gameguardProgress, setGameGuardProgress] = useState(0);
  const [showGameguard, setShowGameguard] = useState(false);
  const [showWebview, setShowWebview] = useState(false);

  const { setUrl } = useContext(Router);

  const game = GAMES[id] || {};

  const launcher = useRef();

  const startGame = () => {
    setPlaying(true);
    launcher.current = new Launcher(game.path);
    launcher.current.start();
    launcher.current.on("loaded", () => {
      setShowGameguard(false);
    })
    launcher.current.on("exit", () => {
      setPlaying(false);
    })
  }

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        if (Math.random() > 0.8) {
          setProgress((progress) =>
            progress < 150 ? progress + Math.random() * 4 : 150
          );
        }
        if (Math.random() > 0.8) {
          setGameGuardProgress((gameguardProgress) =>
            gameguardProgress < 100 ? gameguardProgress + Math.random() : 0
          );
        }
      }, 5);
      return () => {
        clearInterval(interval);
      };
    }
  }, [playing]);

  useEffect(() => {
    if (!playing) {
      setShowGameguard(false);
      setProgress(0);
      setShowWebview(false);
    } else {
      if (progress >= 150) {
        setShowGameguard(true);
        setShowWebview(true);
      }
    }
  }, [progress, playing]);

  useEffect(() => {
    setProgress(0);
    setPlaying(false);
  }, [game]);

  const mediaList = [...([game.preview] || []), ...(game.screenshots || [])];

  return (
    <div className={["preview-screen", show ? "show" : "hide"].join(" ")}>
      <div className="window-wrapper">
        <div className="window">
          <div className="bio">
            {
              game.authors && game.authors.map((author_id) => {
                const author = PROFILES[author_id];
                return <h1 onClick={(e) => {
                  setUrl(["friends", author_id]);
                  onCancel();
                }}>{author.name}</h1>
              })
            }
            <p>
              <i>Interactive mixed media, code on computer.</i>
            </p>
            {game.description}
            
            {game.url && <><h3>Play at Home:</h3><QRCodeSVG value={game.url} /></>}
          </div>
          {mediaList && (
            <div className="media">
              <div
                className="media-preview"
                style={{
                  backgroundImage: `url(${escapeCssUrl(
                    mediaList[currentMedia]
                  )})`,
                }}
              />
              <div className="media-list">
                {mediaList.map((media, idx) => {
                  return (
                    <div
                      className={[
                        "media-thumbnail",
                        currentMedia === idx ? "active" : "",
                      ].join(" ")}
                      onClick={() => setCurrentMedia(idx)}
                      style={{
                        backgroundImage: `url(${escapeCssUrl(media)})`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <div className="topbar">
            <div className="title">{game.title}</div>
            <div className="close-button" onClick={onCancel}>
              X
            </div>
          </div>
          <div className="playbar">
            <div className="fake-loader">
              <div className="fake-loading">
                <div
                  className="fake-loading-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="fake-loading">
                <div
                  className="fake-loading-bar"
                  style={{
                    width: `${
                      progress > 100 ? 100 : ((progress % 40) / 40) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
            <div
              className="play-button"
              onClick={(e) => {
                startGame();
              }}
            >
              <div className="play-inner">
                <b>CHƠI</b> NGAY
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={["gameguard", showGameguard && "show"].join(" ")}>
        <div className="gameguard-progress">
          <div>noProtect GameShield Update</div>
          <div className="progress-panel">
            <div className="resolving">
              <span>Updating</span>
            </div>
            <div className="loading-bar">
              <div
                className="progress"
                style={{ width: `${gameguardProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="bottom-bar">
            <div className="button"></div>
            <div style={{ flexGrow: 2 }}></div>
            <div className="button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
