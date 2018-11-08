import Link from 'next/link';
import logo from '../assets/images/logo.svg';

const Header = () => (
  <div className={"home-header"}>
    <div className={"home-logo"}>
      <Link href="/">
        <img src={logo} alt="StackChain" className={"home-logo-img"}/>
      </Link>
    </div>
    <div className={"sign-in"}>
      <div className={"text"}>Sign in</div>
    </div>
  </div>
)

export default Header
