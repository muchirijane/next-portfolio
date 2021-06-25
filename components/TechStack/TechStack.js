import Image from 'next/image';

import html from '../../public/icons/html.svg';
import css from '../../public/icons/css.svg';
import sass from '../../public/icons/scss.svg';
import js from '../../public/icons/js.svg';
import react from '../../public/icons/react.svg';
import styled from '../../public/icons/styled.svg';
import graphql from '../../public/icons/graphql.svg';
import gatsby from '../../public/icons/gatsby.svg';
import git from '../../public/icons/git.svg';
import npm from '../../public/icons/npm.svg';
import terminal from '../../public/icons/terminal.svg';
import vscode from '../../public/icons/vscode.svg';
import photoshop from '../../public/icons/photoshop.svg';
import xd from '../../public/icons/xd.svg';
import figma from '../../public/icons/figma.svg';
import zeplin from '../../public/icons/zeplin.svg';
import github from '../../public/icons/github.svg';
import next from '../../public/icons/next.svg';

import { TechContainer, TechContent, TechIconItem, TechIconImage } from './TechStack.styles';

export default function TechStack() {
	return (
		<TechContainer>
			<h2>My Tech stack and tools</h2>
			<TechContent>
				<TechIconItem>
					<TechIconImage>
						<Image src={html} alt="HTML" width={32} height={32} />
					</TechIconImage>

					<h3>HTML</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={css} alt="CSS" width={32} height={32} />
					</TechIconImage>
					<h3>CSS</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={sass} alt="sass" width={32} height={32} />
					</TechIconImage>
					<h3>SCSS</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={js} alt="Javascript" width={32} height={32} />
					</TechIconImage>
					<h3>JavaScript</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={react} alt="React Js" width={32} height={32} />
					</TechIconImage>
					<h3>React JS</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={styled} alt="styled-components" width={32} height={32} />
					</TechIconImage>
					<h3>Styled Components</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={graphql} alt="graphql" width={32} height={32} />
					</TechIconImage>
					<h3>Graphql</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={gatsby} alt="gatsby" width={32} height={32} />
					</TechIconImage>
					<h3>Gatsby JS</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={git} alt="git tool" width={32} height={32} />
					</TechIconImage>
					<h3>Git</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={npm} alt="Npm tool" width={32} height={32} />
					</TechIconImage>
					<h3>Npm</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={terminal} alt="terminal tool" width={32} height={32} />
					</TechIconImage>
					<h3>Terminal</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={vscode} alt="Vs code text editor" width={32} height={32} />
					</TechIconImage>
					<h3>Vs-Code</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={github} alt="github software" width={32} height={32} />
					</TechIconImage>
					<h3>Github</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={next} alt="Next Js framework" width={32} height={32} />
					</TechIconImage>
					<h3>Next Js</h3>
				</TechIconItem>
			</TechContent>

			<h2>My Design tools</h2>

			<TechContent>
				<TechIconItem>
					<TechIconImage>
						<Image src={photoshop} alt="photoshop tool" width={32} height={32} />
					</TechIconImage>
					<h3>PhotoShop</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={xd} alt="adobe xd tool" width={32} height={32} />
					</TechIconImage>
					<h3>Adobe Xd</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={figma} alt="figma tool" width={32} height={32} />
					</TechIconImage>
					<h3>Figma</h3>
				</TechIconItem>
				<TechIconItem>
					<TechIconImage>
						<Image src={zeplin} alt="zeplin tool" width={32} height={32} />
					</TechIconImage>
					<h3>Zeplin</h3>
				</TechIconItem>
			</TechContent>
		</TechContainer>
	);
}
