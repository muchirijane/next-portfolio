import React from 'react';
import Layout from '../../layout/Layout';
import { SkeletonContainer, Image, Title, TagWrapper, SubTitle, Text } from './Skeleton.styles';
export default function Skeleton() {
	return (
		<Layout>
			<SkeletonContainer>
				<Image />
				<Title> </Title>
				<TagWrapper>
					<span />
					<span />
				</TagWrapper>
				<SubTitle />
				<Text />
				<Text />
				<Text />
				<Text />
			</SkeletonContainer>
		</Layout>
	);
}
