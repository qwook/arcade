import { useState } from "react";
import { PROFILES, PROFILES_LIST } from "./db/profiles";
import "./friendlist.scss";
import { Lag } from "./lag";
import { Link } from "./router";

export function FriendsList() {
  const [funFact, setFunFact] = useState(0);
  const funFacts = [
    <>
      60% of Vietnam's internet is connected from Vũng Tàu to California by a
      20,000 KM underwater cable.
    </>,
    <>
      The first female video game protagonist was created by Vietnamese
      programmer Van Mai.
    </>,
    <>
      The Phong shader, developed by Bui Tuong Phong, was essential to rendering
      3D graphics – especially on the PS2.
    </>,
    <>
      Flappy Bird was the first the highest selling game made by a Vietnamese
      developer.
    </>,
    <>
      Counter-Strike was co-created as a Half-Life mod by Lê "Gooseman" Minh.
    </>,
  ];

  return (
    <div className="friends">
      <Lag className="panel friend-list">
        <Lag className="heading">Bai moi nhat</Lag>
        {PROFILES_LIST.map((id) => {
          const profile = PROFILES[id];
          return (
            <Link className="friend" href={["friends", id]}>
              <Lag className="person">
                <Lag className="avatar-wrapper">
                  <Lag
                    className="avatar"
                    style={{ backgroundImage: `url('${profile.avatar}')` }}
                  />
                </Lag>
                <Lag className="name">{profile.name}</Lag>
              </Lag>
              <Lag className="quote">{profile.blurbEN}</Lag>
            </Link>
          );
        })}
      </Lag>
      <Lag className="panel" style={{ width: 250 }}>
        <Lag className="welcome">
          <Lag className="heading2">Fun Facts!</Lag>
          <Lag className="avatar">
            <Lag className="bubble">
              <Lag className="bubble-inner">
                {funFacts[funFact % funFacts.length]}
                <br />
                <br />
                <div
                  className="link"
                  onClick={(e) => {
                    setFunFact((funFact) => (funFact + 1) % funFacts.length);
                  }}
                >
                  Next ►
                </div>
              </Lag>
            </Lag>
          </Lag>
        </Lag>
      </Lag>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .megank .yahoo {
        background-image: url('${require("./assets/placeholders/bg_swirl.jpg")}');
        background-size: cover;
      }
      .games-screen .body {
        background-color: #af3582;
      }
    `,
        }}
      />
    </div>
  );
}
