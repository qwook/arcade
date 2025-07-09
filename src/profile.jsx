import "./profile.scss"

export function Profile() {
  return <div className="profile">
    <div className="left">
      <div className="panel">
        <div className="name">Henry Quoc Tran</div>
        <div className="fakenav">Top Page | Blog | Friends</div>
        <br />
        <img className="profile-pic" src={require("./profiles/qwook/profile.jpg")} />
      </div>
    </div>
    <div className="right">
      <div className="quote">i'm dancing  <img src={require("./assets/emojis/4.gif")} /> and crocheting~~~</div>
      <div className="panel">
        <div className="title">Blog</div>
        <div>
          <p>When I was a young boy, my father took me into the city to join the black parade. <img src={require("./assets/emojis/8.gif")} /> <img src={require("./assets/emojis/8.gif")} /></p>
        </div>
      </div>
      <div className="panel">
        <div className="title">Games</div>
        <div>
          Link and screenshot to games here...
        </div>
      </div>
    </div>
  </div>
}