import { PROFILES } from "./db/profiles";
import "./zine.scss";

function Picture({ src, offsetY }) {
  return (
    <picture-wrapper style={{ top: offsetY }}>
      <picture style={{ backgroundImage: `url('${src}')` }}></picture>
    </picture-wrapper>
  );
}

function ZingMe({ user, children }) {
  return (
    <zingme>
      <content>
        <profile>
          <avatar
            style={{
              backgroundImage: `url('${PROFILES[user].avatar}')`,
            }}
          ></avatar>
        </profile>
        <comment>
          <user>{PROFILES[user].name}</user> {children}
        </comment>
      </content>
      <fakeinfo>
        <img
          style={{ height: 35, verticalAlign: "bottom", marginBottom: -8 }}
          src={require("./assets/quote.png")}
        />
        &nbsp;&nbsp;
        {Math.floor(Math.random() * 5) + 4}:{Math.floor(Math.random() * 59)}{" "}
        sáng hôm qua • &nbsp;
        <img
          style={{ height: 20, verticalAlign: "bottom", marginBottom: 2 }}
          src={require("./assets/heart.png")}
        />
        &nbsp;Thích
      </fakeinfo>
    </zingme>
  );
}

function Window({ title, children, flip }) {
  return (
    <window
      style={
        flip
          ? {
              transform: "rotate(180deg)",
            }
          : {}
      }
    >
      <window2>
        <title>{title}</title>
        <winbuttons />
        <window-inner>
          <half>
            <inner>{children}</inner>
          </half>
        </window-inner>
      </window2>
    </window>
  );
}

export function Zine() {
  return (
    <zine>
      <Window title={"mẹGank - Page 4"} flip>
        <h1>A Game About Me</h1>
        <author>Thinh Bui</author>
        <review>
          <p>
            A story about the past and the creator’s connection to games and
            their parents. It is about things falling apart and being able to
            put things together, while maintaining a lightheartedness.
            <Picture
              offsetY={-110}
              src={require("./games/agameaboutme/preview.png")}
            />
          </p>
        </review>
        <ZingMe user={"PandaBeo04"}>
          I used to sneak over to my friend’s house to play Contra on his NES,
          and as I got older, I’d cut class to play League of Legends at a net
          café near home. Back then, getting lost in the world of games was such
          an exciting experience for me and that’s what sparked the passion for
          gaming I have today.
        </ZingMe>
        {/* <br /> */}
        <h1>First Principle</h1>
        <author>Nguyen Pham Thu Linh</author>
        <review>
          <p>
            A deceivingly simple puzzle game becomes complex when you realize
            you can set off a chain reaction of colliding molecules. You’ll feel
            like a mad scientist, pushing and restructuring chemicals to create
            gold.
            <Picture
              offsetY={-90}
              src={require("./games/firstprinciple/preview.png")}
            />
          </p>
        </review>
        <ZingMe user={"ArceStarwalker"}>
          I was probably the wildest card anybody has known, breaking through
          computer's security with ease and going as far as eavesdropping and
          secretly watching my parent as they type the computer's password, JUST
          to play games. But like, games were so funnnnn, especially those
          typing games and time management games. Nobody, and I meant NOBODY
          could beat me in speed.
        </ZingMe>
      </Window>
      <Window title={"mẹGank - Page 3"} flip>
        <h1>Căn Hộ Số 4</h1>
        <author>Khoa Tran Dang, Vỹ Trieu</author>
        <review>
          <p>
            Can Ho So 4 is a horror escape room type game that takes you through
            a creepy haunted Vietnamese apartment. The voice acting, and creepy
            level design creates a suspenseful and eerie atmosphere.
            <Picture
              offsetY={-110}
              src={require("./games/canhoso4/preview2.png")}
            />
          </p>
        </review>
        <ZingMe user={"khoatrandang"}>
          I remember back then we used to have a CRT PC set, it was so fun when
          me and my cousins fighting each other over it. I remember we used to
          play Neighbours from hell, helicopter, and running man, these game are
          so nostalgic. Oh I actually go out and ask my dad to buy a crack
          Minecraft that they download into a dvd and you just put it in the pc
          and play. Those time are so fun.
        </ZingMe>
        <br />
        <ZingMe user={"vytrieu"}>
          Until university, my family never bought a computer because my parents
          were worried I’d use it too much, and it would be bad for my eyes.
          <br />
          <br />
          Back then, I didn’t realize that you were supposed to pay for games or
          software. That changed during my first assignment about game
          development. I wanted to draw pixel art, but all the free tools were
          too difficult to use. A friend suggested I download a cracked version
          of Aseprite. At first, it felt like a smart solution. But then I
          started to feel that it was unfair to those who actually paid for it.
          I realized that paying for software is a way to support the developers
          who made it. It made me think: what would happen to my own game in the
          future if people just downloaded it illegally? So in the end, I
          decided to pay for Aseprite. I’m glad I did.
        </ZingMe>
      </Window>
      <Window title={"mẹGank - Page 2"} flip>
        <h1>Inside my 10 year old head</h1>
        <author>Nguyen Pham Thu Linh</author>
        <review>
          <p>
            Stretched across the screen are incredibly beautiful drawings that
            reveal more of its meaning in the details. The story is melancholic,
            but ultimately hopeful.
            <Picture
              offsetY={-110}
              src={require("./games/insidemy10yearoldhead/preview.png")}
            />
          </p>
        </review>
        <ZingMe user={"Lin_nguyenn"}>
          Back in elementary school, during computer class, my best friend and
          I’d usually pick computers at the back of the room to secretly play
          games :{")))"} Since the school computers didn’t have any games
          installed, our only option was to play web games. I remember the
          top-tier web games back then were Game24h, Y8, Sóc Nhí... While
          playing, we also need to keep an eye on the teacher, and whenever she
          got close, we’d quickly switch tabs and pretend to do something else
          more legal.
        </ZingMe>
        <br />
        <h1>D' Fishy Finals</h1>
        <author>Thinh Bui, Quyen Nguyen, Nguyen Pham Thu Linh</author>
        <review>
          <p>
            An incredibly beautiful and punny heist game filled with wacky
            characters and sets. You’re a student tasked with stealing exam
            answers from the Principle’s office, but you start to discover that
            the school is covered in… Anthropomorphic food. Part of the fun is
            seeing all the wacky memes the developers stuffed into this game –
            I’m pretty sure I did not see everything yet.{" "}
            <Picture
              offsetY={-110}
              src={require("./games/dfishyfinal/preview.png")}
            />
          </p>
        </review>
      </Window>
      <Window title={"mẹGank - Page 1"} flip>
        <h1>Blood, Tooth & Tears</h1>
        <author>Quyen Nguyen</author>
        <review>
          <p>
            A cute memory of going to the zoo with dad. The creator is very
            artistically talented, seriously the panoramic view of the creator’s
            ice-cream craving was delightful and very cinematic.
            <Picture
              offsetY={-110}
              src={require("./games/bloodtoothtears/vJnE5a.png")}
            />
          </p>
        </review>
        <h1>Something’s Fishy</h1>
        <author>Quyen Nguyen</author>
        <review>
          <p>
            This is the best aim trainer in the world. Whether you are looking
            to level up your skills in Valorant or practice dragging files into
            the recycle bin, this game’s fish sorting will have you covered. Can
            you beat my high-score of 185?
            <Picture
              offsetY={-110}
              src={require("./games/somethingsfishy/8OjcQ2.png")}
            />
          </p>
        </review>
        <ZingMe user={"Ciiverix"}>
          Back in 2010-something, I played a rhythm MMOG with graphics way too
          powerful for my potato PC: glitches everywhere, missing textures, and
          my character was always a purple ghost. So, during the week, I’d save
          my breakfast money all week just to hit the quán net for a weekend
          glow-up and shopping spree!
        </ZingMe>
      </Window>
      <Window title={"mẹGank - Page 5"}>
        <h1>Mama, Please Wait!</h1>
        <author>
          Bui Chi (Ashley) Lan, Duyen Le, <br />
          Vo Thai Phuong Anh
        </author>
        <review>
          <p>
            Move aside, QWOP and flappy bird, a new and addictively difficult
            game is about to take the throne. In this game you play as a
            different kind of bird that needs to follow its mom, all the while
            learning how to walk. My high-score is 9.3 km!
            <Picture
              offsetY={-110}
              src={require("./games/mamapleasewait/preview.png")}
            />
          </p>
        </review>
        <ZingMe user={"LAN4032"}>
          My earliest memory of gaming comes from playing pre-installed
          applications on my old school’s computer. Though they only had
          educational games like Spelling Sharks or Hangman, those were the
          highlights of my day as a primary student.
        </ZingMe>
        <br />
        <ZingMe user={"duyenle"}>
          The first two games that really stuck with me in 2012-2013 were Khu
          Vườn Trên Mây and Gunny. Khu Vườn Trên Mây gave me a sense of peace
          and simplicity such as planting trees, harvesting, taking care of pets
          and decorating my own garden. On the other hand, Gunny was interesting
          and fun. I loved simulating “chicken” , aiming the perfect shot with
          the cute layout design.
        </ZingMe>
        <br />
        <ZingMe user={"cam"}>
          y8.com and socnhi.com are my childhood. They helped a poor kid like me
          have an opportunity to play video games at that time. So nostalgic ~
        </ZingMe>
      </Window>
      <Window title={"mẹGank - Page 6"}>
        <h1>Mine Blast</h1>
        <author>Bao, Nhu Vu</author>
        <review>
          <p>
            <i>
              “Intuitive. Fun discovery process. Satisfying victories and even
              in failure, continued excitement.”
            </i>{" "}
            - Tín (High-score: 401 on Difficult)
            <Picture
              offsetY={-110}
              src={require("./games/mineblast/ITM77_.png")}
            />
          </p>
          <p>
            Mine Blast is a kind of game I would have gotten addicted to on
            Neopets if I was a kid. You play as a floating claw, picking up and
            combining rocks in order to make diamonds.
          </p>
        </review>
        <ZingMe user={"theguyser"}>
          I started getting interested in making video games when I was taught
          Scratch in a computer class in Middle School. Some Scratch games I
          made were a Pac Man clone, a horizontal SHMUP and a Frogger clone. I
          didn't make any games in High School but learned Python and Java in my
          computer science classes. I made a text adventure in Python and tried
          to make a Fire Emblem clone using Java but wasn't able to figure out
          rendering graphics and gave up on the project. However, the experience
          I had with these 2 programming languages made C# for Unity easier to
          pick up.
        </ZingMe>
        <br />
        <ZingMe user={"watehmeloan"}>
          I have an odd relationship with games ever since I was little, I
          didn't understand how computer games worked but I had a knack for
          making my own game interpretations from them using paper and clay. Not
          sure how that path set me off to playing and making games in pixel art
          now but it is what it is
        </ZingMe>
      </Window>
      <Window title={"mẹGank - About Us"}>
        <back>
          <p>
            <strong>Gank</strong> is a gaming term that meant "to be ambushed"
            by the enemy team. The phrase "mẹ gank" – or the more popular, "bị
            phụ huynh gank" – would be used to describe students who would be
            ambushed by their parents at an Internet Coffee Shop, probably
            because they're skipping class.
          </p>
          <p>
            This installation connects the past and future of video-games
            together. The student games provide a window into what the future of
            games from Vietnam could possibly look like. Tying to the past –
            Internet Coffee Shops (or Quan Net) were the main platforms for many
            of these students growing up in the 90's and early 2000's to play
            free online video-games and socialize. Those games that they played
            were mostly imported from outside of Vietnam.
          </p>
          <p>
            <strong>
              We imagine an alternate universe where all those old online games
              were instead made by Vietnamese developers.
            </strong>
          </p>
        </back>
      </Window>
      <Window title={"mẹGank - Welcome!"}>
        <img
          style={{
            width: 600,
            marginLeft: 80,
            marginTop: -40,
          }}
          src={require("./assets/megank_zine.png")}
        />
        <img
          style={{
            width: 500,
            marginTop: 0,
            marginLeft: 120,
          }}
          src={require("./assets/megank_coverx10.png")}
        />
        <megank-descript>
          <i>
            Games made by students at RMIT Vietnam and their stories about games
            and the internet.
          </i>
        </megank-descript>
      </Window>
    </zine>
  );
}
