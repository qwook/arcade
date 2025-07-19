import { WebContentsDidStartNavigationEventParams } from "electron";
import { JSX } from "react";

interface Profile {
  [id: string]: {
    name: string;
    avatar: string;
    games: string[];
    blurbEN: JSX.Element | string;
    blurbVN: JSX.Element | string;
    aboutMeEN: JSX.Element | string;
    aboutMeVN: JSX.Element | string;
    theme?: {
      color1: string;
      color2: string;
      color3: string;
      backgroundImage: string;
    };
    location?: string;
    age?: string;
    social?: {
      ig?: string;
      fb?: string;
      itch?: string;
    };
  };
}

export const PROFILES: Profile = {
  PandaBeo04: {
    name: "Thinh Bui",
    avatar: require("../profiles/pandabeo/avatar.jpg"),
    age: "21",
    location: "Ho Chi Minh City",
    games: ["agameaboutme", "dfishyfinal"],
    blurbEN: (
      <>
        getting lost in the world of games was such an exciting experience for
        me and that’s what sparked the passion for gaming I have today
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        My childhood was all about those days I skipped school to play video
        games. I used to sneak over to my friend’s house to play Contra on his
        NES, and as I got older, I’d cut class to play League of Legends at a
        net café near home. Back then, getting lost in the world of games was
        such an exciting experience for me and that’s what sparked the passion
        for gaming I have today.
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
    social: {
      fb: "truongthinh.bui.98",
      itch: "pandabeo04",
    },
  },
  Ciiverix: {
    name: "Quyen Nguyen",
    avatar: require("../profiles/quyennguyen/congchuabanggia.jpg"),
    games: ["bloodtoothtears", "dfishyfinal", "somethingsfishy"],
    location: "Ho Chi Minh City",
    age: "20",
    blurbEN: (
      <>
        I played a rhythm MMOG with graphics way too powerful for my potato PC
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        Back in 2010-something, I played a rhythm MMOG with graphics way too
        powerful for my potato PC: glitches everywhere, missing textures, and my
        character was always a purple ghost. So, during the week, I’d save my
        breakfast money all week just to hit the quán net for a weekend glow-up
        and shopping spree!
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
    social: {
      fb: "cvrix",
      ig: "ciiverix",
      itch: "quyen-cvrix-nguyen",
    },
  },
  Lin_nguyenn: {
    name: "Nguyen Pham Thu Linh",
    age: "20",
    location: "Ho Chi Minh City",
    avatar: require("../profiles/linnguyen/avatar.png"),
    games: ["insidemy10yearoldhead", "dfishyfinal"],
    blurbEN: (
      <>
        Because there was only one computer in the house, my brother and I
        always fought over it — to the point where we even came up with sneaky
        plans to “borrow” the computer behind my Mom’s back just to play more
        games :))
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        Back in elementary school, during computer class, my best friend and I’d
        usually pick computers at the back of the room to secretly play games :
        {")))"} Since the school computers didn’t have any games installed, our
        only option was to play web games. I remember the top-tier web games
        back then were Game24h, Y8, Sóc Nhí... While playing, we also need to
        keep an eye on the teacher, and whenever she got close, we’d quickly
        switch tabs and pretend to do something else more legal.
      </>
    ),
    aboutMeVN: <></>,
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
    social: {
      fb: "lukas.kebnersol",
    },
  },
  LAN4032: {
    name: "Bui Chi (Ashley) Lan",
    location: "Ho Chi Minh City",
    age: "21",
    avatar: require("../profiles/ashley/avatar.jpg"),
    games: ["mamapleasewait"],
    blurbEN: (
      <>
        they only had educational games like Spelling Sharks or Hangman, those
        were the highlights of my day as a primary student
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        <p>
          <img
            style={{ width: 300 }}
            src={require("../profiles/ashley/Hangman.gif")}
          />
          <img
            style={{ width: 300 }}
            src={require("../profiles/ashley/Spelling Shark.jpg")}
          />
        </p>
        <p>
          My earliest memory of gaming comes from playing pre-installed
          applications on my old school’s computer. Though they only had
          educational games like Spelling Sharks or Hangman, those were the
          highlights of my day as a primary student.
        </p>
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
  },
  duyenle: {
    name: "Duyen Le",
    location: "Ho Chi Minh City",
    age: "23",
    avatar: require("../profiles/duyenle/avatar.jpg"),
    games: ["mamapleasewait"],
    blurbEN: (
      <>
        the first two games that really stuck with me in 2012-2013 were Khu Vườn
        Trên Mây and Gunny.
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        <p>
          <img
            style={{ width: 300 }}
            src={require("../profiles/duyenle/khuvuon.png")}
          />
          <img
            style={{ width: 300 }}
            src={require("../profiles/duyenle/gunny.jpg")}
          />
        </p>
        <p>
          When I was a child, my parents didn’t allow me to use the computer
          often, fearing it would harm my eyes and affect my studies. But once I
          was finally allowed, the first two games that really stuck with me in
          2012-2013 were Khu Vườn Trên Mây and Gunny. Khu Vườn Trên Mây gave me
          a sense of peace and simplicity such as planting trees, harvesting,
          taking care of pets and decorating my own garden. On the other hand,
          Gunny was interesting and fun. I loved simulating “chicken” , aiming
          the perfect shot with the cute layout design. Even though there are
          more modern games now, the excitement I felt back then remains one of
          my fondest childhood memories.
        </p>
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
  },
  cam: {
    name: "Vo Thai Phuong Anh",
    location: "Ho Chi Minh City",
    age: "20",
    avatar: require("../profiles/vothaiphuonganh/avatar.jpg"),
    games: ["mamapleasewait"],
    blurbEN: <>y8.com and socnhi.com are my childhood</>,
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        <p>
          y8.com and socnhi.com are my childhood. They helped a poor kid like me
          have an opportunity to play video games at that time. So nostalgic ~
        </p>
        <p>
          <img
            style={{ width: 300 }}
            src={require("../profiles/vothaiphuonganh/y8.png")}
          />
          <img
            style={{ width: 300 }}
            src={require("../profiles/vothaiphuonganh/socnhi.png")}
          />
        </p>
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
  },
  ArceStarwalker: {
    name: "Maple Nguyen",
    location: "Hanoi",
    age: "26 bánh chýng pot",
    avatar: require("../profiles/Maple.jpg"),
    games: ["firstprinciple"],
    blurbEN: (
      <>
        eavesdropping and secretly watching my parent as they type the
        computer's password, JUST to play games
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        I was probably the wildest card anybody has known, breaking through
        computer's security with ease and going as far as eavesdropping and
        secretly watching my parent as they type the computer's password, JUST
        to play games. But like, games were so funnnnn, especially those typing
        games and time management games. Nobody, and I meant NOBODY could beat
        me in speed.
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
    social: {
      fb: "Maplesayer",
      ig: "arcenguyen",
    },
  },
  theguyser: {
    name: "Bao",
    age: "26",
    location: "Ho Chi Minh City",
    avatar: require("../profiles/baochua/avatar.png"),
    games: ["mineblast"],
    blurbEN: (
      <>
        It was a blast as getting to share these experiences with others,
        especially since the games were meant to be played in a group
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        <p>
          During the Wii and Wii U era, I would invite friends and family to
          play games such as Wii Sports, Nintendo Land and Super Smash Bros. I
          acquired both my Wii and Wii U from game stores on Pasteur Street, Ho
          Chi Minh City. Halo Shop which is still here today and Mimigames which
          moved to another location in the city though they both no longer sell
          bootleg games. It was a blast as getting to share these experiences
          with others, especially since the games were meant to be played in a
          group, which shaped my nostalgia and enjoyment of Nintendo games. I am
          nostalgic for those days as in-person gaming has become less popular
          and harder to set up as everyone is busier or no longer nearby.
        </p>
        <p>
          My first experience with video games was from school. In Kindergarten,
          I was introduced to educational games on the web. I was hooked
          immediately and asked how to access them at home though wasn't told
          how. This would lead into my experiences messing with the family
          computer by surfing the early 2000s web, leading to countless viruses
          but also my love for computers and gaming. When I was a little older,
          my first experiences with online games would be with Audition Online
          and Boom Online. I wasn't very good at these games but enjoyed playing
          with random players online.
        </p>
        <p>
          I started getting interested in making video games when I was taught
          Scratch in a computer class in Middle School. Some Scratch games I
          made were a Pac Man clone, a horizontal SHMUP and a Frogger clone. I
          didn't make any games in High School but learned Python and Java in my
          computer science classes. I made a text adventure in Python and tried
          to make a Fire Emblem clone using Java but wasn't able to figure out
          rendering graphics and gave up on the project. However, the experience
          I had with these 2 programming languages made C# for Unity easier to
          pick up.
        </p>
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
  },
  watehmeloan: {
    name: "Nhu Vu",
    avatar: require("../profiles/nhuvu/it_me.png"),
    games: ["mineblast"],
    blurbEN: (
      <>
        {" "}
        I had a knack for making my own game interpretations [...] using paper
        and clay
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        I have an odd relationship with games ever since I was little, I didn't
        understand how computer games worked but I had a knack for making my own
        game interpretations from them using paper and clay. Not sure how that
        path set me off to playing and making games in pixel art now but it is
        what it is
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
  },
  khoatrandang: {
    name: "Khoa Tran Dang",
    avatar: require("../profiles/TranDangKhoa.jpg"),
    games: ["canhoso4"],
    blurbEN: (
      <>
        Oh I actually go out and ask my dad to buy a crack Minecraft that they
        download into a dvd and you just put it in the pc and play.
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        I remember back then we used to have a CRT PC set, it was so fun when me
        and my cousins fighting each other over it. I remember we used to play
        Neighbours from hell, helicopter, and running man, these game are so
        nostalgic. Oh I actually go out and ask my dad to buy a crack Minecraft
        that they download into a dvd and you just put it in the pc and play.
        Those time are so fun.
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
    social: {
      fb: "tran.james.522",
    },
  },
  vytrieu: {
    name: "Vỹ Trieu",
    avatar: require("../profiles/VyTrieu.jpg"),
    games: ["canhoso4"],
    blurbEN: (
      <>
        my family never bought a computer because my parents were worried I’d
        use it too much, and they believed it would be bad for my eyes.
      </>
    ),
    blurbVN: <>tui lam game!!</>,
    aboutMeEN: (
      <>
        Before high school, my family never bought a computer because my parents
        were worried I’d use it too much, and they believed it would be bad for
        my eyes. So, when I was young, I had very little experience with PC
        games. It wasn’t until I went to university that I finally had my own
        laptop. Back then, I didn’t realize that you were supposed to pay for
        games or software, I honestly thought it wasn’t necessary. That changed
        during my first assignment about game development. I wanted to draw
        pixel art, but all the free tools I found online were too difficult to
        use. That’s when a friend suggested I download a cracked version of
        Aseprite. At first, it felt like a smart solution. But then I started to
        feel that it was unfair to those who actually paid for it. I also began
        to understand that paying for software is a way to support the
        developers who made it. It made me think: what would happen to my own
        game in the future if people just downloaded it illegally? So in the
        end, I decided to pay for Aseprite and I’m glad I did.
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
    social: {
      fb: "trieu.vy.593455",
    },
  },
  qwook: {
    name: "Henry Quoc Tran",
    location: "San Jose, California",
    avatar: require("../profiles/qwook/profile.jpg"),
    games: [],
    blurbEN: (
      <>
        I grew up on neopets and habbo hotel, and got really into garry's mod
        when I was a teenager!
      </>
    ),
    blurbVN: <></>,
    social: {
      ig: "nohurryhen",
    },
    aboutMeEN: (
      <>
        <p>
          Thanks so much for coming out and supporting student game developers!
          My college used to have retro arcade cabinets that showcased
          student-made games, and I wanted to do the same in Vietnam.
        </p>
        <p>When I was growing up I played a lot of games that steathily taught me how to program. Neopets for example taught me how to write HTML and CSS. Garry's Mod taught me how to write Lua, and how logic gates work. And now I'm here! Crazy right?</p>
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
  },
  toby: {
    name: "Dzuy Anh Do (Toby)",
    avatar: require("../profiles/toby.jpg"),
    games: [],
    blurbEN: <>My top 5 games are Devotion, Katamari Damacy, All Our Asias, Lost Memories Dot Net, and Pokemon Crystal. </>,
    blurbVN: <></>,
    social: {
      ig: "dzuyanhdo",
    },
    aboutMeEN: (
      <>
        <p>
          When I was 5 or 6, my family went on a road trip from Los Angeles to San Francisco. I was playing Pokemon Gold in the car walking around Golden Rod City. That game has a real time clock so whatever time it is in real life, is what time it is in game. We were nearing the end of our trip and as the sun was setting outside, the game was turning to night as well. Seeing people turn on the lights of their apartment outside the car window and then seeing the same thing happen in game left a big impression on me and I guess was the first time I really felt how magical games could be.
        </p>
      </>
    ),
    aboutMeVN: "",
    theme: {
      color1: "",
      color2: "",
      color3: "",
      backgroundImage: "",
    },
  },
};

export const PROFILES_LIST = Object.keys(PROFILES);
