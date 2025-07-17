import { Lag } from "./lag";

export function Home() {
  return (
    <div
      className="home"
      style={{ padding: 40, width: 340, position: "relative" }}
    >
      <Lag>
        <h1>Mẹ Gank</h1>
      </Lag>
      <img
        style={{ position: "absolute", left: 450, width: 300 }}
        src={require("./assets/home/gank.png")}
      />
      <p>
        <strong>Gank</strong> is a gaming term that meant "to be ambushed" by
        the enemy team. The phrase "mẹ gank" – or the more popular, "bị phụ
        huynh gank" – would be used to describe students who would be ambushed
        by their parents at an Internet Coffee Shop, probably because they're
        skipping class.
      </p>
      <Lag>
        <p>
          This installation connects the past and future of video-games
          together. Internet Coffee Shops (or Quan Net) were the main platforms
          for many youths growing up in the 90's and early 2000's to play free
          online video-games and socialize. These online games were mainly
          imported from other countries and made available through Vietnamese
          publishers such as ZingMe.{" "}
          <strong>
            We imagine an alternate universe where all the online games were
            instead made in Vietnam.
          </strong>
        </p>
      </Lag>
      <p>
        Play through games made by students at RMIT Vietnam on an old internet
        coffee shop setup!
      </p>
      <Lag>
        <h1>History of the Quan Net</h1>
      </Lag>
      <p>
        Before the advent of the cellphone, the Quan Net was the only way you
        could connect to the internet... Blah blah blah :)
      </p>
    </div>
  );
}
