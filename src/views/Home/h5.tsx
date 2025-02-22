import share_black from "@/assets/images/home/share_black.svg";
import robot from "@/assets/images/home/robot.svg";
import creativity from "@/assets/images/home/creativity.svg";
import pic1 from "@/assets/images/home/pic1.png";
import pic2 from "@/assets/images/home/pic2.png";
import pic3 from "@/assets/images/home/pic3.png";
import pic4 from "@/assets/images/home/pic4.png";
import pic5 from "@/assets/images/home/pic5-h5.png";
import pic6 from "@/assets/images/home/pic6-h5.png";
import pic7 from "@/assets/images/home/pic7-h5.png";
import pic8 from "@/assets/images/home/pic8-h5.png";
import pic9 from "@/assets/images/home/pic9-h5.png";
import pic10 from "@/assets/images/home/pic10-h5.png";

const Home = () => {
  return (
    <div id="home" className="bg-[#101010]">
      <div className="px-5 pt-[27px] pb-3 text-white text-[76px] font-normal font-['Aldrich'] leading-[91.20px]">
        Hello,
        <br />
        Spati Ai
      </div>

      <div className="px-5">
        <div className="flex justify-center mb-6">
          <div className="h-14 px-4 py-3 bg-white rounded-[47px] justify-center items-center inline-flex w-full">
            <div className="text-black text-base font-normal font-['Aldrich'] leading-loose">
              Explore Ecosystem
            </div>
            <div data-svg-wrapper className="relative">
              <img src={share_black} className="size-6" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="px-3 py-2 text-white text-xs font-normal font-['Aldrich']">
            「Join the community」
          </div>
          <div className="px-3 py-2 text-white text-xs font-normal font-['Aldrich'] leading-[23px]">
            「Developer」
          </div>
        </div>
      </div>
      <div className="mb-[39px] relative">
        <img src={robot} className="max-w-[390px] h-auto" />
      </div>
    </div>
  );
};

const Vision = () => {
  return (
    <div id="vision">
      <div className="px-5 py-2.5 mb-[29px]">
        <div className="grow shrink basis-0 text-white text-xl font-normal font-['Aldrich'] leading-normal">
          Through space intelligence technology and blockchain,
          <br />
          <br />
          create an open, diverse, decentralized virtual world
          <br />
          <br />
          allow users to freely create, explore, interact, and own their own
          digital assets.
        </div>
      </div>

      <div className="space-y-4 px-5 mb-8">
        <div className="flex justify-center">
          <img src={creativity} className="size-[360px]" />
        </div>
        <div className="flex-col justify-start items-start gap-8 flex  text-white text-base font-normal font-['Aldrich'] leading-loose">
          <div className="">Stimulate user creativity</div>
          <div>Promoting innovation in spatial computing technology</div>
          <div>Building a decentralized creator economy</div>
          <div>Forming an open and inclusive multiverse community</div>
        </div>
      </div>

      <div className="px-5 flex-col justify-center items-start gap-3 flex mb-8">
        <div className="w-full h-[70px] px-12 py-[19px] bg-white rounded-[46px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-black text-base font-normal font-['Aldrich'] leading-loose">
            Join Community
          </div>
        </div>
        <div className="w-full px-12 py-[19px] rounded-[46px] border border-[#333333] justify-center items-center gap-2.5 flex">
          <div className="text-white text-base font-normal font-['Aldrich'] leading-loose">
            Contact Us
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <video
          src={
            "https://s3-figma-videos-production-sig.figma.com/video/TEAM/1412638242642833025/d78b4a752befe97734dccf0b7e5f29fe540ef1eb?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FsSzbZBL4htVCtD58JqbS-~lnupRbu9Oiw2o3fWcXjECpRMyYao9EVlaO5JzPnFGdOSkXSOnz7qg3gsKDsWnEL-82~~hvdpBvAG~BiNRTGzpxjebN6XrOb0tWfjwe2S86ovgSkgXhFmWP8Q42PzcXy-NleIpJDhZ3N1uwrqg4AtkHXcMVlNKY2s8rbrHiM7GQBDva4p-vuI6SHhh8NwoM4CzpygVNYtivewccp5aWgXpM6CtNHUWPcJltE-5PDKwqcVldj3sLYexMZ1~53tIWlGF-eSFXoi-aP8UwXoS2ea0NQyQwdLppOX3x8s5WDL1xurHos2pYuytuILAX7Vkww__"
          }
          autoPlay
          muted
          loop
          className="w-[360px] h-[292px] scale-[2]"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const Technology = () => {
  const items = [
    {
      img: pic1,
      title: "Spatial Intelligence",
      desc: [
        "3D reconstruction of large models",
        "Video generation of large models",
        "Interactive intelligence",
      ],
    },
    {
      img: pic2,
      title: "Spatial Intelligence",
      desc: ["Visual programming", "Smart contract support", "AI-driven NPC"],
    },
    {
      img: pic3,
      title: "Spatial Intelligence",
      desc: ["Asset bridging", "Unified identity system", "Resource sharing"],
    },
    {
      img: pic4,
      title: "Spatial Intelligence",
      desc: [
        "Miner layer: providing computing resources",
        "Validator layer: maintaining network integrity",
        "Model layer: hosting and trading AI models",
        "Application layer: providing end-user services",
        "Storage layer: managing data and assets",
      ],
    },
  ];

  return (
    <div  id="technology" className="px-5 space-y-[17px]">
      <div className="py-10">
        <div className="text-white text-xl font-normal font-['Aldrich'] leading-normal mb-6">
          Core Technology
        </div>
        <div className="flex gap-6  text-xs font-normal font-['Aldrich'] leading-[23px]">
          <div className="text-white">
            Reshape the spatial computing paradigm and build a decentralized
            creator economy
          </div>
          <div className="text-[#8e929a]">
            Allow everyone to freely explore and create the infinite
            possibilities of digital space.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-[41px]">
        {items.map((item) => {
          return (
            <div className="space-y-[15px]">
              <img
                className="h-[112.67px] rounded-lg border border-[#333333]"
                src={item.img}
              />
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-xl font-normal font-['Aldrich'] leading-normal">
                  Spatial Intelligence
                </div>
                {item.desc.map((desc) => {
                  return (
                    <div className="text-[#8e929a] text-xs font-normal font-['Aldrich'] leading-[23px]">
                      {desc}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Application = () => {
  const items = [
    {
      img: (
        <img
          className="w-[218px] h-[180.94px] left-[136px] top-[60px] absolute"
          src={pic5}
        />
      ),
      title: "Metaverse",
      desc: "Freely build a personalized virtual space",
      url: "",
    },
    {
      img: (
        <img
          className="w-[259px] h-[123.12px] left-[95px] top-[81px] absolute"
          src={pic6}
        />
      ),
      title: "GameFi",
      desc: "Freely build a personalized virtual space",
      url: "",
    },
    {
      img: (
        <img
          className="w-[215px] h-[160.49px] left-[143px] top-[80px] absolute"
          src={pic7}
        />
      ),
      title: "Video Creation",
      desc: "Freely build a personalized virtual space",
      url: "",
    },
    {
      img: (
        <img
          className="w-[233px] h-[155.66px] left-[121px] top-[80px] absolute"
          src={pic8}
        />
      ),
      title: "Smart furniture",
      desc: "Freely build a personalized virtual space",
      url: "",
    },
    {
      img: (
        <img
          className="w-[152px] h-[142.02px] left-[181px] top-[48px] absolute"
          src={pic9}
        />
      ),
      title: "Education and Training",
      desc: "Freely build a personalized virtual space",
      url: "",
    },
    {
      img: (
        <img
          className="w-[155px] h-[164.93px] left-[175px] top-[24px] absolute"
          src={pic10}
        />
      ),
      title: "VR / AR",
      desc: "Freely build a personalized virtual space",
      url: "",
    },
  ];
  return (
    <div id="application" className="mb-[96px]">
      <div className="px-5 space-y-5 my-[57px]">
        <div className="text-white text-xl font-normal font-['Aldrich'] leading-normal">
          Application Scenario
        </div>
        <div className="text-[#8e929a] text-xs font-normal font-['Aldrich'] leading-[23px]">
          Reshape the spatial computing paradigm and build a decentralized
          creator economy, allowing everyone to freely explore and create
          infinite possibilities in the digital space.
        </div>
      </div>

      <div className="px-[17px] space-y-3">
        {items.map((item) => {
          return (
            <div className="h-[180px] relative rounded-[20px] border border-[#333333]  overflow-hidden">
              {item.img}
              <div className="w-[354px] h-[114px] px-5 left-0 top-[19px] absolute justify-between items-start inline-flex">
                <div className="w-[321px] flex-col justify-start items-start gap-[11px] inline-flex">
                  <div className="self-stretch text-white text-xl font-normal font-['Aldrich'] leading-normal [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
                    {item.title}
                  </div>
                  <div className="w-40 text-[#8e929a] text-xs font-normal font-['Aldrich'] leading-[23px]">
                    {item.desc}
                  </div>
                </div>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <div className="w-9 h-9 shrink-0 relative bg-white rounded-[74px]  overflow-hidden flex items-center justify-center">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.04457 0.924696L5.19831 1.77095L9.81831 6.39094H0.489182L0.489182 7.58811L9.81831 7.58811L5.19831 12.2081L6.04457 13.0544L12.1094 6.98953L6.04457 0.924696Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="py-10 bg-[#141414] flex-col gap-16 flex">
      <div className="self-stretch h-[196px] flex-col gap-6 flex">
        <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
          <div className="text-white text-xs font-normal font-['Aldrich'] leading-[23px]">
            High-performance space intelligent computing network
          </div>
        </div>
        <div className="self-stretch px-5 justify-between items-center inline-flex">
          <div className="flex-col justify-center items-start gap-[37px] inline-flex">
            <div className="text-[#333333] text-base font-normal font-['Aldrich'] leading-loose">
              / Contact Us
            </div>
            <div data-svg-wrapper>
              <svg
                width="193"
                height="80"
                viewBox="0 0 193 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="80" rx="40" fill="#333333" />
                <path
                  d="M22.4484 38.0367C32.7987 33.4833 46.1929 27.9318 48.0418 27.1634C52.8916 25.1523 54.3798 25.5377 53.6378 29.9915C53.1049 33.1926 51.5674 43.7908 50.3419 50.3874C49.6147 54.2993 47.9833 54.763 45.4179 53.0706C44.1843 52.2561 37.9574 48.1383 36.606 47.1715C35.3723 46.2903 33.6709 45.2304 35.8047 43.1427C36.564 42.399 41.5415 37.6463 45.4196 33.947C45.9277 33.4611 45.2895 32.6631 44.7031 33.0526C39.476 36.5189 32.2288 41.3301 31.3064 41.9568C29.913 42.903 28.5747 43.3371 26.1725 42.6469C24.3574 42.1256 22.5843 41.5038 21.8941 41.2667C19.2365 40.3542 19.8674 39.1724 22.4484 38.0367Z"
                  fill="white"
                />
                <rect x="113" width="80" height="80" rx="40" fill="#333333" />
                <path
                  d="M157.684 36.9954L167.924 30.474C167.611 29.0583 166.348 28 164.839 28H141.161C139.652 28 138.39 29.0569 138.076 30.4712L148.461 37.0179C151.267 38.7869 154.887 38.7785 157.684 36.9968V36.9954Z"
                  fill="white"
                />
                <path
                  d="M158.971 39.0135C157.175 40.1562 155.117 40.7276 153.056 40.7276C150.996 40.7276 148.97 40.1647 147.186 39.0402L138 33.2506V48.8406C138 50.5857 139.415 52 141.161 52H164.839C166.585 52 168 50.5857 168 48.8406V33.2633L158.971 39.0135Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[416px] px-5 flex-col gap-6 flex">
        <div className="flex-col gap-6 flex">
          <div className="text-[#333333] text-base font-normal font-['Aldrich'] leading-loose">
            / Page Navigation
          </div>
          <div className="flex-col gap-1 flex">
            <div className="text-white text-base font-normal font-['Aldrich'] leading-loose">
              Home
            </div>
            <div className="text-white text-base font-normal font-['Aldrich'] leading-loose">
              Vision
            </div>
            <div className="text-white text-base font-normal font-['Aldrich'] leading-loose">
              Technology
            </div>
            <div className="text-white text-base font-normal font-['Aldrich'] leading-loose">
              Application
            </div>
          </div>
        </div>
        <div className="flex-col gap-6 flex">
          <div className="text-[#333333] text-base font-normal font-['Aldrich'] leading-loose">
            / Social
          </div>
          <div className="flex-col gap-1 flex">
            <div className="self-stretch text-white text-base font-normal font-['Aldrich'] leading-loose">
              X
            </div>
            <div className="text-white text-base font-normal font-['Aldrich'] leading-loose">
              Github
            </div>
            <div className="text-white text-base font-normal font-['Aldrich'] leading-loose">
              Instagram
            </div>
            <div className="self-stretch text-white text-base font-normal font-['Aldrich'] leading-loose">
              Linkedin
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[66px] px-5 flex-col gap-5 flex">
        <div className="text-[#333333] text-xs font-normal font-['Aldrich'] leading-[23px]">
          © 2025 Sptichain All rights reserved
        </div>
        <div className="text-[#333333] text-xs font-normal font-['Aldrich'] leading-[23px]">
          Terms and Conditions
        </div>
      </div>
    </div>
  );
};

export const H5 = () => {
  return (
    <>
      <Home />
      <Vision />
      <Technology />
      <Application />
      <Contact />
    </>
  );
};
