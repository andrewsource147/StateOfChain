import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Question List</a>
    </Link>
    <Link href="/ranking">
      <a style={linkStyle}>Ranking</a>
    </Link>
  </div>
)

export default Header
