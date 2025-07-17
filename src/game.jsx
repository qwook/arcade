import escapeCssUrl from "sk2tch/utils/escapeCssUrl";
import { GAMES } from "./db/games";
import { Lag } from "./lag";
import { useEffect, useRef } from "react";

export function Game({ id, onGameSelect }) {
  const game = GAMES[id] || {};
  const video = useRef();

  return (
    <Lag className="game" onClick={() => onGameSelect(id)}>
      <div
        className="preview"
        style={{
          backgroundImage: `url(${escapeCssUrl(
            game.preview || require("./games/bloodtoothtears/preview.png")
          )})`,
        }}
      >
        {game.video && <video onMouseEnter={() => {
          video.current.play();
        }} ref={video} className="gameplay" src={game.video} autoplay loop muted />}
      </div>
      <div className="title">{game.title}</div>
      <div className="sticky">
        <div className="abs">
          <div className="short">{game.short}</div>
        </div>
      </div>
    </Lag>
  );
}
