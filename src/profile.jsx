import { useContext } from "react";
import { PROFILES } from "./db/profiles"
import { Lag } from "./lag"
import "./profile.scss"
import { Link } from "./router"
import { PreviewContext } from "./gamesShowcase";
import { Game } from "./game";

export function Profile({id}) {
  const { onGameSelect } = useContext(PreviewContext);

  return <Lag className="profile">
    <Lag className="left">
      <Lag className="panel">
        <Lag className="name">{PROFILES[id].name}</Lag>
        <Lag className="fakenav">Top Page | Blog | Friends</Lag>
        <br />
        <img className="profile-pic" src={PROFILES[id].avatar} />
      </Lag>
    </Lag>
    <Lag className="right">
      <Lag className="quote">i'm dancing  <img src={require("./assets/emojis/4.gif")} /> and crocheting~~~</Lag>
      <Lag className="panel">
        <Lag className="title">Blog</Lag>
        <Lag>
          <p>When I was a young boy, my father took me into the city to join the black parade. <img src={require("./assets/emojis/8.gif")} /> <img src={require("./assets/emojis/8.gif")} /></p>
        </Lag>
      </Lag>
      <Lag className="panel">
        <Lag className="title">Games</Lag>
        <br />
        <Lag className="games">
          {PROFILES[id].games.map((game_id) => {
            return <Game id={game_id} onGameSelect={onGameSelect} />
          })}
        </Lag>
      </Lag>
    </Lag>
  </Lag>
}