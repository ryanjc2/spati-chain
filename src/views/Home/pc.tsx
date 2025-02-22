import pic1 from '@/assets/images/home/pic1.png'
import pic2 from '@/assets/images/home/pic2.png'
import pic3 from '@/assets/images/home/pic3.png'
import pic4 from '@/assets/images/home/pic4.png'
import pic5 from '@/assets/images/home/pic5.jpeg'
import pic6 from '@/assets/images/home/pic6.jpeg'
import pic7 from '@/assets/images/home/pic7.png'
import pic8 from '@/assets/images/home/pic8.jpeg'
import pic9 from '@/assets/images/home/pic9.png'
import pic10 from '@/assets/images/home/pic10.jpeg'
import tg from '@/assets/images/home/tg.png'
import email from '@/assets/images/home/email.png'
import zoom from '@/assets/images/home/Zone.png'
import { useState } from 'react'
import bg from '@/assets/images/home/bg.jpeg'

export const PC = () => {
  const [index, setIndex] = useState<number>(0)

  return <>
    <div className="max-w-[1440px] w-[full] my-[0] mx-[auto]" style={{ background: `url(${bg})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
      <div className='h-[864px]'>
        <p className="text-[white] text-[76px] text-center font-[aldrich] pt-[56px]">Hello,Spati Ai</p>
        <div className="flex justify-center cursor-[pointer] itmes-center border-[1px] border-[#333333] w-[280px] rounded-[47px] mx-[auto] my-[12px] py-[12px] duration-[1s] bg-[black] hover:bg-[white] text-[white] hover:text-[black]">
          <span>Explore Ecosystem</span>
        </div>
        <div className="flex justify-center itmes-center gap-x-[26px]">
          <span className="text-[white] hover:text-[#FFAE00] cursor-[pointer] duration-[0.5s]">「Join the community」</span>
          <span className="text-[white] hover:text-[#FFAE00] cursor-[pointer] duration-[0.5s]">「Developer」</span>
        </div>
      </div>
      <div className="text-white font-[aldrich] text-[28px] w-[880px] mt-[50px]">
        <p>Through space intelligence technology and blockchain,</p>
        <p className="mt-[20px]">create an open, diverse, decentralized virtual world</p>
        <p className="mt-[20px]">allow users to freely create, explore, interact, and own their own digital assets.</p>
      </div>
      <div className='flex justify-between items-center mt-[117px]'>
        <div className='font-[aldrich]'>
          <p className='text-[#333333] hover:text-[white] cursor-[pointer]' style={{ color: index === 0 ? 'white' : '#333333' }} onClick={() => setIndex(0)}>Stimulate user creativity</p>
          <p className='text-[#333333] hover:text-[white] mt-[98px] cursor-[pointer]' style={{ color: index === 1 ? 'white' : '#333333' }} onClick={() => setIndex(1)}>Promoting innovation in spatial computing technology</p>
          <p className='text-[#333333] hover:text-[white] mt-[98px] cursor-[pointer]' style={{ color: index === 2 ? 'white' : '#333333' }} onClick={() => setIndex(2)}>Building a decentralized creator economy</p>
          <p className='text-[#333333] hover:text-[white] mt-[98px] cursor-[pointer]' style={{ color: index === 3 ? 'white' : '#333333' }} onClick={() => setIndex(3)}>Forming an open and inclusive multiverse community</p>
        </div>
        <img src={zoom} alt="" />
      </div>
      <div className="flex justify-between items-center font-[aldrich]">
        <div className="flex flex-col w-[360px] text-[white]">
          <p className="text-[28px]">Core Technology</p>
          <p className="mt-[48px] text-[28px]">Reshape the spatial computing paradigm and build a decentralized creator economy</p>
          <p className="mt-[24px] text-[#8E939A] text-[12px]">Allow everyone to freely explore and create the infinite possibilities of digital space.</p>
        </div>
        <video src={'https://s3-figma-videos-production-sig.figma.com/video/TEAM/1412638242642833025/d78b4a752befe97734dccf0b7e5f29fe540ef1eb?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FsSzbZBL4htVCtD58JqbS-~lnupRbu9Oiw2o3fWcXjECpRMyYao9EVlaO5JzPnFGdOSkXSOnz7qg3gsKDsWnEL-82~~hvdpBvAG~BiNRTGzpxjebN6XrOb0tWfjwe2S86ovgSkgXhFmWP8Q42PzcXy-NleIpJDhZ3N1uwrqg4AtkHXcMVlNKY2s8rbrHiM7GQBDva4p-vuI6SHhh8NwoM4CzpygVNYtivewccp5aWgXpM6CtNHUWPcJltE-5PDKwqcVldj3sLYexMZ1~53tIWlGF-eSFXoi-aP8UwXoS2ea0NQyQwdLppOX3x8s5WDL1xurHos2pYuytuILAX7Vkww__'} autoPlay muted loop className='w-[746px] h-[695px]'>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-[18px] font-[aldrich]">
        <div className="px-[49px] py-[65px] border-[#333333] border-[1px] w-[671px] group relative overflow-hidden h-[400px] rounded-[24px]">
          <p className="relative z-[500] text-[white] text-[28px]">Spatial Intelligence</p>
          <div className="absolute z-[200] inset-x-0 bottom-0 text-white px-[49px] transform translate-y-full transition-transform duration-300 group-hover:translate-y-[-152px] w-[360px]" >
            <p>3D reconstruction of large models
              Video generation of large models
              Interactive intelligence</p>
          </div>
          <div
            className="absolute z-[100] inset-0 bg-cover bg-center transform scale-95 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
            style={{ backgroundImage: `url(${pic1})` }}
          ></div>
        </div>
        <div className="px-[49px] py-[65px] border-[#333333] border-[1px] w-[671px] group relative overflow-hidden h-[400px] rounded-[24px]">
          <p className="relative z-[500] text-[white] text-[28px]">Programmable virtual world</p>
          <div className="absolute z-[200] inset-x-0 bottom-0 text-white px-[49px] transform translate-y-full transition-transform duration-300 group-hover:translate-y-[-152px] w-[360px]" >
            <p>Visual programming
              Smart contract support
              AI-driven NPC</p>
          </div>
          <div
            className="absolute z-[100] inset-0 bg-cover bg-center transform scale-95 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
            style={{ backgroundImage: `url(${pic2})` }}
          ></div>
        </div>
        <div className="px-[49px] py-[65px] border-[#333333] border-[1px] w-[671px] group relative overflow-hidden h-[400px] rounded-[24px]">
          <p className="relative z-[500] text-[white] text-[28px]">Interoperability</p>
          <div className="absolute z-[200] inset-x-0 bottom-0 text-white px-[49px] transform translate-y-full transition-transform duration-300 group-hover:translate-y-[-202px] w-[360px]" >
            <p>Asset bridging
              Unified identity system
              Resource sharing</p>
          </div>
          <div
            className="absolute z-[100] inset-0 bg-cover bg-center transform scale-95 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
            style={{ backgroundImage: `url(${pic3})` }}
          ></div>
        </div>
        <div className="px-[49px] py-[65px] border-[#333333] border-[1px] w-[671px] group relative overflow-hidden h-[400px] rounded-[24px]">
          <p className="relative z-[500] text-[white] text-[28px]">Chain architecture</p>
          <div className="absolute z-[200] inset-x-0 bottom-0 text-white px-[49px] transform translate-y-full transition-transform duration-300 group-hover:translate-y-[-52px] w-[360px]" >
            <p>Miner layer: providing computing resources
              Validator layer: maintaining network integrity
              Model layer: hosting and trading AI models
              Application layer: providing end-user services
              Storage layer: managing data and assets</p>
          </div>
          <div
            className="absolute z-[100] inset-0 bg-cover bg-center transform scale-95 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
            style={{ backgroundImage: `url(${pic4})` }}
          ></div>
        </div>
      </div>
      <div className='mt-[52px] pb-[150px] overflow-hidden font-[aldrich]'>
        <img className='w-[542px] h-[542px] mt-[-271px] mx-[auto]' src="https://s3-alpha-sig.figma.com/img/1e9e/0ae3/a0cb76e0d97f2d2be6cae6aa9fa72e97?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=APcuNpUMJ3L7Pe2TUXu1Z9QMF63LyDW4BrZXzC2wQqFWMYNxRQCfMChmwuVoStTftyfQc7YkjDPogHyqdpokbd4haESgtpi7z619s5OrjjAXQfcOGLGqZTlWe8hTOErpXhzQPC3MEeQs83Sh2TFxmg1AlEfgAz~2-NY2i2J1sHndu9STzc3dY9sEjl5qzupMn28fOfYITWY44U5sp2Ps2P2mNblxuKB~qnUkz3zoqp7IPUAxU0YfDul09FgSTTRxx585jcV8U959ijAG6gu7ToSgqtJAg~jg2M2~5WhtRSlMdfge2MXNQcBt3wK8C59kPZnZcXWqwGR7UyH-Asi3lA__" alt="" />
        <div className='flex justify-center items-center gap-x-[62px]'>
          <p className='text-[white] text-[28px]'>
            Application Scenario
          </p>
          <div className='h-[142px] flex flex-col justify-center'>
            <p className='text-[#0F0F0F] text-[28px]'>Education and Training</p>
            <p className='text-[white] text-[28px]'>Metaverse</p>
            <p className='text-[#0F0F0F] text-[28px]'>GameFi</p>
          </div>
        </div>
        <div className='flex justify-end'>
          <p className='w-[494px] text-[#8E939A]'>Reshape the spatial computing paradigm and build a decentralized creator economy, allowing everyone to freely explore and create infinite possibilities in the digital space.</p>
        </div>
        <div className='mt-[123px] flex flex-wrap gap-[12px]'>
          <div className='relative  overflow-hidden border-[#333333] border-[1px] rounded-[20px] px-[24px] group py-[36px] w-[445px] h-[240px] '>
            <p className="relative z-[500] text-[white] text-[28px] w-[321px] bg-[transparent]">Metaverse</p>
            <p className='text-[12px] text-[white] mt-[11px] w-[160px] bg-[transparent]'>Freely build a personalized virtual space</p>
            <div
              className="absolute z-[100] w-[172px] h-[172px] duration-[1s] right-[50px] bottom-[-66px] bg-cover bg-center transform scale-[1] transition-all group-hover:scale-[1.2]"
              style={{ backgroundImage: `url(${pic5})` }}
            ></div>
          </div>
          <div className='relative overflow-hidden group border-[#333333] border-[1px] rounded-[20px] px-[24px] py-[36px] w-[445px] h-[240px]'>
            <p className="relative z-[500] text-[white] text-[28px] w-[321px]">GameFi</p>
            <p className='text-[12px] text-[white] mt-[11px] w-[160px]'>Intelligent NPC, dynamic environment</p>
            <div
              className="absolute z-[100] w-[272px] duration-[1s] h-[172px] right-[50px] bottom-[-46px] bg-cover bg-center transform rotate-[0] scale-95 transition-all group-hover:rotate-[3deg] group-hover:scale-105"
              style={{ backgroundImage: `url(${pic6})` }}
            ></div>
          </div>
          <div className='relative  overflow-hidden group border-[#333333] border-[1px] rounded-[20px] px-[24px] py-[36px] w-[445px] h-[240px]'>
            <p className="relative z-[500] text-[white] text-[28px] w-[321px]">Video Creation</p>
            <p className='text-[12px] text-[white] mt-[11px] w-[160px]'>Intelligent editing and special effects generation</p>
            <div
              className="absolute z-[100] w-[272px] h-[205px] duration-[1s] right-[0] bottom-[-46px] bg-cover bg-center transform scale-1 transition-all group-hover:scale-105 group-hover:bottom-[-48.3px]  group-hover:right-[5px]"
              style={{ backgroundImage: `url(${pic7})` }}
            ></div>
          </div>
          <div className='relative overflow-hidden group border-[#333333] border-[1px] rounded-[20px] px-[24px] py-[36px] w-[445px] h-[240px]'>
            <p className="relative z-[500] text-[white] text-[28px] w-[321px]">Smart furniture</p>
            <p className='text-[12px] text-[white] mt-[11px] w-[160px]'>Automation</p>
            <div
              className="absolute z-[100] w-[272px] h-[205px] duration-[1s] right-[0] bottom-[-46px] bg-cover bg-center transform scale-1 transition-all group-hover:scale-150"
              style={{ backgroundImage: `url(${pic8})` }}
            ></div>
          </div>
          <div className='relative overflow-hidden group border-[#333333] border-[1px] rounded-[20px] px-[24px] py-[36px] w-[445px] h-[240px]'>
            <p className="relative z-[500] text-[white] text-[28px] w-[321px]">Education and Training</p>
            <p className='text-[12px] text-[white] mt-[11px] w-[160px]'>Immersive learning and simulation training</p>
            <div
              className="absolute z-[100] w-[272px] h-[205px] duration-[1s] right-[-10px] bottom-[0] bg-cover bg-center transform scale-[1] transition-all group-hover:scale-[1.1] group-hover:right-[-5px]"
              style={{ backgroundImage: `url(${pic9})` }}
            ></div>
          </div>
          <div className='relative overflow-hidden group border-[#333333] border-[1px] rounded-[20px] px-[24px] py-[36px] w-[445px] h-[240px]'>
            <p className="relative z-[500] text-[white] text-[28px] w-[321px]">VR / AR</p>
            <p className='text-[12px] text-[white] mt-[11px] w-[160px]'>Virtual tours, augmented reality experiences</p>
            <div
              className="absolute z-[100] w-[272px] h-[205px] duration-[1s] right-[-10px] bottom-[20px] bg-cover bg-center transform scale-[1] transition-all group-hover:scale-[1.1] group-hover:right-[-5px]"
              style={{ backgroundImage: `url(${pic10})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#141414] w-full pb-[40px] pt-[80px] font-[aldrich]'>
      <div className='flex justify-between items-center px-[40px]'>
        <p className='text-[white] text-[12px]'>High-performance space intelligent computing network</p>
        <div className='flex justify-between items-center gap-x-[37px]'>
          <span className='text-[#333333] text-[16px]'>/Contact Us</span>
          <img className='w-[80px]' src={tg} alt="" />
          <img className='w-[80px]' src={email} alt="" />
        </div>
      </div>
      <div className='flex justify-between items-center px-[40px] mt-[64px]'>
        <div className='flex gap-x-[64px]'>
          <p className='text-[#333333] text-[16px]'>/ Page Navigation</p>
          <div>
            <p className='text-[white] text-[16px]'>Home</p>
            <p className='text-[white] text-[16px] mt-[4px]'>Vision</p>
            <p className='text-[white] text-[16px] mt-[4px]'>Technology</p>
            <p className='text-[white] text-[16px] mt-[4px]'>Application</p>
          </div>
        </div>

        <div className='flex gap-x-[64px]'>
          <p className='text-[#333333] text-[16px]'>/ Social</p>
          <div>
            <p className='text-[white] text-[16px]'>X</p>
            <p className='text-[white] text-[16px] mt-[4px]'>Github</p>
            <p className='text-[white] text-[16px] mt-[4px]'>Instagram</p>
            <p className='text-[white] text-[16px] mt-[4px]'>Linkedin</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center px-[40px] mt-[64px] text-[#333333]'>
        <p className='text-[12px]'>© 2025 Sptichain All rights reserved</p>
        <p className='text-[12px]'>Terms and Conditions</p>
      </div>
    </div>
  </>
}