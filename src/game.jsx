import escapeCssUrl from "sk2tch/utils/escapeCssUrl";

export function Game({ preview, name, media, onGameSelect }) {
  return (
    <div className="game" onClick={() => onGameSelect({ title: name, media })}>
      <div
        className="preview"
        style={{
          backgroundImage: `url(${escapeCssUrl(
            preview || require("./games/bloodtoothtears/preview.png")
          )})`,
        }}
      />
      <div className="title">{name}</div>
    </div>
  );
}
