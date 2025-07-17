import { useContext } from "react";
import { PROFILES } from "./db/profiles";
import { Lag } from "./lag";
import "./profile.scss";
import { Link } from "./router";
import { PreviewContext } from "./gamesShowcase";
import { Game } from "./game";

export function Profile({ id }) {
  const { onGameSelect } = useContext(PreviewContext);
  const profile = PROFILES[id];

  return (
    <Lag className="profile">
      <Lag className="left">
        <Lag className="panel">
          <Lag className="name">{profile.name}</Lag>
          <Lag className="fakenav">Top Page | Blog | Friends</Lag>
          <br />
          <img className="profile-pic" src={PROFILES[id].avatar} />
        </Lag>
      </Lag>
      <Lag className="right">
        <Lag className="quote">{profile.blurbEN}</Lag>
        <Lag className="panel">
          <Lag className="title">Blog</Lag>
          <Lag>{profile.aboutMeEN}</Lag>
        </Lag>
        <Lag className="panel">
          <Lag className="title">Games</Lag>
          <br />
          <Lag className="games">
            {PROFILES[id].games.map((game_id) => {
              return <Game id={game_id} onGameSelect={onGameSelect} />;
            })}
          </Lag>
        </Lag>
      </Lag>
    </Lag>
  );
}
