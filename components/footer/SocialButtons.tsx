import { faYoutube } from '@fortawesome/free-brands-svg-icons';
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
					<a className='page-footer__social-link' target='_blank' href='https://www.facebook.com/people/The-Zahra/61564468238188/'>
						<FontAwesomeIcon className='social-icon' icon={faFacebook}/>
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://www.instagram.com/thezahrafashion'>
						<FontAwesomeIcon className='social-icon' icon={faInstagram}/>
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://youtube.com'>
						<FontAwesomeIcon className='social-icon' icon={faYoutube}/>
					</a>
				</div>
			</div>
			<p className='page-footer__social-buttons company-info'>
				All rights reserved. © The-Zahra-Store
			</p>
		</>
	);
}