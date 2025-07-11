import { PROFILES, PROFILES_LIST } from "./db/profiles"
import "./friendlist.scss"
import { Lag } from "./lag"
import { Link } from "./router";

export function FriendsList() {
  return <div className="friends">
    <Lag className="panel friend-list">
      <Lag className="heading">Bai moi nhat</Lag>
      {
        PROFILES_LIST.map((id) => {
          const profile = PROFILES[id];
          return (
            <Link className="friend" href={["friends", id]}>
              <Lag className="person">
                <Lag className="avatar-wrapper">
                  <Lag className="avatar" style={{backgroundImage: `url('${profile.avatar}')`}} />
                </Lag>
                <Lag className="name">
                  {profile.name}
                </Lag>
              </Lag>
              <Lag className="quote">{profile.blurbEN}</Lag>
            </Link>
        )
      })
    }
    </Lag>
    <Lag className="panel" style={{width: 250}}>
      <Lag className="welcome">
        <Lag className="heading2">Fun Facts!</Lag>
        <Lag className="avatar">
          <Lag className="bubble"><Lag className="bubble-inner">I don't know anything. Sorry!</Lag></Lag>
        </Lag>
      </Lag>
    </Lag>
    <style dangerouslySetInnerHTML={{__html: `
      .megank .yahoo {
        background-image: url('${require("./assets/placeholders/bg_swirl.jpg")}');
        background-size: cover;
      }
      .games-screen .body {
        background-color: #af3582;
      }
    `}} />
  </div>
}
