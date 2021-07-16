import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/LOGO.svg';
import { Header, NavItems, MenuWrapper, MenuButton, MenuBugger } from './Navbar.styles';
function Navbar() {
	const [ isOpen, setIsOpen ] = useState(false);

	const menuHandler = () => {
		setIsOpen(true);
	};
	return (
		<Header className="backgroundColour">
			<MenuWrapper>
				<Link href="/">
					<a>
						<Image src={Logo} alt="my logo" />
					</a>
				</Link>
				<MenuButton onClick={menuHandler} aria-label="menu">
					<MenuBugger />
				</MenuButton>
			</MenuWrapper>

			<nav isOpen={isOpen}>
				<ul>
					<NavItems onClick={menuHandler}>
						<Link href="/">
							<a>Home</a>
						</Link>
					</NavItems>
					<NavItems onClick={menuHandler}>
						<Link href="/about">
							<a>About</a>
						</Link>
					</NavItems>
					<NavItems onClick={menuHandler}>
						<Link href="/#portfolio">
							<a>Projects</a>
						</Link>
					</NavItems>
					<NavItems onClick={menuHandler}>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</NavItems>
					<NavItems onClick={menuHandler}>
						<Link href="/#contact">
							<a>Contact</a>
						</Link>
					</NavItems>
				</ul>
			</nav>
		</Header>
	);
}

export default Navbar;
