import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col font-[aalaojiezhaopaiti] md:min-w-[1280px]">
      <Header />
      <div className="w-full grow overflow-hidden overflow-y-auto bg-[black]">
        <Outlet />
      </div>
    </div>
  )
}