import { useEffect, useState } from "react";
import escapeCssUrl from "sk2tch/utils/escapeCssUrl";

export function Preview({ show, onCancel, previewData }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [gameguardProgress, setGameGuardProgress] = useState(0);
  const [showGameguard, setShowGameguard] = useState(false);

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
    } else {
      if (progress >= 150) {
        setShowGameguard(true);
      }
    }
  }, [progress, playing]);

  useEffect(() => {
    setProgress(0);
    setPlaying(false);
  }, [previewData]);

  return (
    <div className={["preview-screen", show ? "show" : "hide"].join(" ")}>
      <div className="window-wrapper">
        <div className="window">
          <div className="bio">
            <h1>Henry Quoc Tran</h1>
            Saigon, Vietnam
            <h1>Dzuy</h1>
            Vietnam
            <p>
              <i>Interactive mixed media, code on computer.</i>
            </p>
            <p>
              A flatgame about family betrayal, made for my 2nd-year's first
              assignment at RMIT Vietnam.
            </p>
            <p>
              Keys: [WASD] to move [Space] to speed up dialogues/ turn pages in
              Credits
            </p>
          </div>
          {previewData.media && (
            <div className="media">
              <div
                className="media-preview"
                style={{
                  backgroundImage: `url(${escapeCssUrl(
                    previewData.media[currentMedia]
                  )})`,
                }}
              />
              <div className="media-list">
                {previewData.media.map((media, idx) => {
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
            <div className="title">{previewData.title}</div>
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
                setPlaying(true);
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
