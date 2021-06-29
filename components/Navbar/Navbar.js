import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/LOGO.svg';
import { Header, NavItems } from './Navbar.styles';
export default function Navbar() {
	return (
		<Header className="backgroundColour">
			<Link href="/">
				<a>
					<Image src={Logo} alt="my logo" />
				</a>
			</Link>
			<nav>
				<ul>
					<NavItems>
						<Link href="/">
							<a>Home</a>
						</Link>
					</NavItems>
					<NavItems>
						<Link href="/about">
							<a>About</a>
						</Link>
					</NavItems>
					<NavItems>
						<Link href="/portfolio">
							<a>Projects</a>
						</Link>
					</NavItems>
					<NavItems>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</NavItems>
					<NavItems>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</NavItems>
				</ul>
			</nav>
		</Header>
	);
}
