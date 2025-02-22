import logo from '@/assets/images/header/logo.svg'

export const Header = () => (
  <div className="hidden md:flex items-center px-[40px] py-[32px] bg-[black] text-[white] justify-between">
    <img src={logo} className='w-[180px] h-auto' />
    <div className='flex items-center justify-between gap-[53px]'>
      <div className='flex items-center justify-center gap-[40px] text-[16px] font-[400] text-[white] font-[Aldrich]'>
        <span>Home</span>
        <span>Vision</span>
        <span>Technology</span>
        <span>Application</span>
        <span>Contact</span>
      </div>
    </div>
  </div>
)