import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { ErrorContainer, ErrorContent, ErrorText, PageLink } from '../styles/Error.styles';
import errorImg from '../public/error.svg';
export default function ErrorPage() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, []);
	return (
		<Layout>
			<ErrorContainer className="error-container">
				<Image src={errorImg} height={800} width={900} alt="a 3d design for error illustartion" />
				<ErrorContent className="error-content">
					<ErrorText>
						<h1> UGH! Looks like you are lost</h1>
						<p className="error-text">
							The page you are looking for can't be found. It was either deleted or doesn't exist.
						</p>
					</ErrorText>
					<Link href="/">
						<PageLink className="link">
							Go back Home
							<span>&rarr;</span>
						</PageLink>
					</Link>
				</ErrorContent>
			</ErrorContainer>
		</Layout>
	);
}
