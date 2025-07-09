import "./friendlist.scss"

export function FriendsList() {
  return <div className="friends">
    <div className="panel">
      <div className="heading">Bai moi nhat</div>
      <p>Testing</p>
      <p>Testing</p>
    </div>
    <div className="panel" style={{width: 250}}>
      <div className="welcome">
        <div className="heading2">Fun Facts!</div>
        <div className="avatar">
          <div className="bubble"><div className="bubble-inner">I don't know anything. Sorry!</div></div>
        </div>
      </div>
    </div>
    <style dangerouslySetInnerHTML={{__html: `
      .megank .yahoo {
        background-image: url('${require("./assets/placeholders/bg_swirl.jpg")}');
        background-size: cover;
      }
    `}} />
  </div>
}
