import React from 'react';
import { FiGithub, FiGlobe, FiLinkedin, FiTwitter } from 'react-icons/fi';

import data from '../data/Contact.json';
import Button from '../components/UI/Button/Button';
import {
	ContactContainer,
	ContactText,
	ContactContent,
	DevLink,
	ContactSocials,
	ContactForm
} from '../styles/Contact.styles';
export default function Contact() {
	return (
		<ContactContainer id="contact">
			<h2>Let's Connect</h2>
			<ContactContent>
				{data.map((data) => (
					<ContactText key={data.id}>
						<div>
							<p>{data.text}</p>
							<p>
								{data.text2}
								<DevLink className="link-animated" href={data.devLink}>
									{data.devProfile}
								</DevLink>
							</p>

							<ContactSocials>
								<h3>{data.subTitle}</h3>
								<span>
									<a
										className="link-animated"
										href={data.githubLink}
										aria-label="Github link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiGithub />
									</a>
									<a
										className="link-animated"
										href={data.twitterLink}
										aria-label="Twitter link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiTwitter />
									</a>
									<a
										className="link-animated"
										href={data.devLink}
										aria-label="Dev link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiGlobe />
									</a>
									<a
										className="link-animated"
										href={data.linkedinLink}
										aria-label="Linkedin link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiLinkedin />
									</a>
								</span>
							</ContactSocials>
						</div>
					</ContactText>
				))}
				<ContactForm>
					<form action="https://formsubmit.co/3bc402a874576ccd1df4877537be69be" method="POST">
						<div>
							<label>
								<span>Full Name</span>
								<input name="full name" type="text" placeholder="Full Name" required />
							</label>
						</div>
						<div>
							<label>
								<span>Email Address</span>
								<input type="hidden" name="_subject" value="Portfolio Email 😎!" />

								<input name="email" type="email" placeholder="Email Address" required />
							</label>
						</div>
						<div>
							<label>
								<span>Message</span>
								<textarea name="mesaage" cols="29" rows="6" placeholder="Message" required />
							</label>
						</div>
						<input type="hidden" name="_next" value="https://jane.vercel.app/thankyou" />
						<Button type="submit">Send Message</Button>
					</form>
				</ContactForm>
			</ContactContent>
		</ContactContainer>
	);
}
