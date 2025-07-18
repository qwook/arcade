import { Lag } from "./lag";
import { QRLink } from "./profile";

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
        <h1>The Vietnamese Internet</h1>
        <h2>
          written by{" "}
          <QRLink href="https://instagram.com/tanxnguyenn">Tân Nguyễn</QRLink>
        </h2>
      </Lag>
      <p>
        I remember going to English class one day and my friend said, "I made my
        first website."
      </p>
      <p>
        Living in the early 2000s in Việt Nam as a teenager is truly a blessing
        now that I think of it. We (mostly the typical Gen Z) have it figured
        out now, but the internet was a brand new thing back then. Every day
        after school, everyone would hop right onto their computers, whether
        it’s their home computers or at the café, didn’t matter. What mattered
        was all the sudden we had a mini life, outside of our physical life.
      </p>
      <img
        style={{ position: "absolute", left: 450, width: 300 }}
        src={require("./assets/home/yahoo360.png")}
      />
      <p>
        The technology wasn’t as advance as now – no 5G, no internet everywhere
        you go, no streaming services for every service possible – but the
        philosophy was always there from the start. Whether it’s to connect with
        each others, sharing songs on diendanlequydon.com, music videos on the
        early days of YouTube (shout out darapclub from Hanoi), playing online
        games (although I was never really into games), etc.
      </p>
      <p>
        Coming back to my friend's website; what my friend had was the early
        version of blog, the exact service or site he was using was xanga, if
        anyone still remembers. Not long after Xanga, Yahoo 360 became wildy
        popular in Vietnam, equivalent of MySpace in the West. But something
        about Xanga sticks out to me after all these years. It’s the sparkles
        and moving images and added music all through HTML which made it super
        unique. We later on moved to Facebook, pretty much a boring, adult
        version of all the ones I mentioned above. As high tech as Facebook,
        Instagram and all these current platforms that we have, something so
        charming and nostalgic and low tech / retro futurism about the early
        days social media. We as young kids living in the early 2000's really
        didn’t know what the futures would hold for us.
      </p>
      <h1>The Quán Net</h1>
      <img
        style={{ position: "absolute", left: 450, width: 300 }}
        src={require("./assets/home/quannet.png")}
      />
      <p>
        Internet café's (or Quán Net) were prolific in Vietnam even outside of
        video games. Not just a place to buy coffee, denizens of the Quán Net
        could treat themselves to snacks or cheap ramen noodles while they shoot
        virtual enemy terrorists or webcam chat with somebody across the
        country. The cost of entry? About 2,000 VND an hour.
      </p>
      <p>
        The advent of the cellphone has heavily impacted the culture of the Quán
        Net. The only advantage that Quán Net's have is their high-powered
        computers with strong GPU's. College students will often go to a Quán
        Net to render their 3D graphics. The Quán Net is no longer a place for
        people to connect socially, since you can do all that anywhere and
        anytime. The after-school students who used to venture into the Quán Net
        are now found huddled around in groups at outdoor food stands, playing
        mobile games together. As Vietnam continues to grow as a country, only
        time will tell what future holds for the beloved Quán Net.
      </p>
    </div>
  );
}
