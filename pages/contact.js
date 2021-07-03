import Button from '../components/UI/Button/Button';

export default function Contact() {
	return (
		<div>
			<h2>Reach out and connect</h2>
			<div>
				<div>
					<p>title</p>
					<p>text</p>
					<div>
						<h3>connect</h3>
						<span>icon</span>
					</div>
				</div>
				<div>
					<form action="https://formsubmit.co/3bc402a874576ccd1df4877537be69be" method="POST">
						<div>
							<label>
								<input name="full name" type="text" placeholder="Full Name" required />
							</label>
						</div>
						<div>
							<label>
								<input type="hidden" name="_subject" value="Portfolio Email 😎!" />

								<input name="email" type="email" placeholder="Email Address" required />
							</label>
						</div>
						<div>
							<label>
								<input type="hidden" name="_captcha" value="false" />
								<textarea name="mesaage" cols="35" rows="5" placeholder="Mesaage" required />
							</label>
						</div>
						<input type="hidden" name="_next" value="http://localhost:3000/thankyou" />
						<Button type="submit">Send Message</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
