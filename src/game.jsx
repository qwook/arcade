import escapeCssUrl from "sk2tch/utils/escapeCssUrl";
import { GAMES } from "./db/games";
import { Lag } from "./lag";

export function Game({ id, onGameSelect }) {
  const game = GAMES[id] || {};

  return (
    <Lag className="game" onClick={() => onGameSelect(id)}>
      <div
        className="preview"
        style={{
          backgroundImage: `url(${escapeCssUrl(
            game.preview || require("./games/bloodtoothtears/preview.png")
          )})`,
        }}
      />
      <div className="title">{game.title}</div>
      <div className="short">{game.short}</div>
    </Lag>
  );
}
