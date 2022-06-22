import { FC } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

 
interface Props {
  className?: string
  children?: any
}

const Layout: FC<Props> = ({ className}) => {

  return (
    <div className="w-full">
      <Navbar/>
      <Footer/>

    </div>
  )
}

export default Layout
