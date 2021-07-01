import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogContent, BlogItems, BlogTagWrapper } from './BlogCard.styles';
export default function PortfolioCard({ blog }) {
	const { title, slug, tags, description, thumbnail } = blog.fields;
	return (
		<Link href={`/blog/${slug}`}>
			<BlogContent>
				<div>
					<Image
						src={`https:${thumbnail.fields.file.url}`}
						width={thumbnail.fields.file.details.image.width}
						height={thumbnail.fields.file.details.image.height}
					/>
				</div>
				<BlogItems>
					<h3>{title}</h3>
					<p>{description}</p>
					<BlogTagWrapper>{tags.map((tag) => <span key={tag}>#{tag}</span>)}</BlogTagWrapper>
				</BlogItems>
			</BlogContent>
		</Link>
	);
}
