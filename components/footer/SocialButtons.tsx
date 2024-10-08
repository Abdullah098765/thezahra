import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function SocialButtons() {
	return (
		<>
			<h3 className='page-footer__header'>Follow us</h3>
			<div className='page-footer__social-buttons'>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://www.facebook.com/WixzanTech'>
						<FontAwesomeIcon className='social-icon' icon={faFacebook} />
					</a>
				</div>
				
			</div>
			<p className='text-muted'>All rights reserved. © The Zahra-Commerce</p>
		</>
	);
}