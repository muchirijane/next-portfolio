import { createClient } from 'contentful';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import BlogCard from '../components/template/BlogCard';
import { BlogWrapper, BlogContainer } from '../styles/Blog.styles';
export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

	const res = await client.getEntries({ content_type: 'portfolio' });
	return {
		props: {
			blogs: res.items
		}
	};
}

export default function Blog({ blogs }) {
	console.log(blogs);
	return (
		<Layout>
			<Head>
				<title>My Blog</title>
			</Head>
			<BlogWrapper>
				<h1>
					My Blog{' '}
					<span role="img" alt="a writing emoji">
						✍🏼
					</span>{' '}
				</h1>
				<BlogContainer>{blogs.map((blog) => <BlogCard key={blog.sys.id} blog={blog} />)}</BlogContainer>
			</BlogWrapper>
		</Layout>
	);
}
