import {ReactNode} from 'react';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import {faShippingFast} from '@fortawesome/free-solid-svg-icons/faShippingFast';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function MarsTopNav() {
	return (
		<nav className={'mars-top-nav'}>
			<div className={'container-xxl mars-top-nav__container'}>
			<div className={'mars-top-nav__contacts'}>
  {/* <Contact href={'tel:+923212897737'}
           label={'+92 (321) 289-77-37'}
           icon={<FontAwesomeIcon icon={faPhoneAlt} />}
  /> */}
  <Contact href={'https://api.whatsapp.com/send?phone=93128788038&text=hello'}
           label={'+92 312 8788038'}
           icon={<FontAwesomeIcon icon={faWhatsapp} />}
  />
</div>

				<div className={'mars-top-nav__note'}>
					<p>
						Opening hours 9 a.m. - 10 p.m. <FontAwesomeIcon icon={faShippingFast} className={'text-theme-color ms-1'} />
					</p>
				</div>
				<ul className={'mars-top-nav__menu list-unstyled'}>
					<li className={'mars-top-nav__menu-item'}>
						<Link href={'/shipping'} className='mars-top-nav__menu-link'>
							Shipping
						</Link>
					</li>
					<li className={'mars-top-nav__menu-item'}>
						<Link href={'/about'} className='mars-top-nav__menu-link'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

const Contact = ({href, label, icon}: {href: string, label: string, icon?: ReactNode}) => {
	return (
		<div className={'mars-top-nav__contact'}>
			{icon &&
			<a className={'mars-top-nav__contact-icon'} href={href}>{icon}</a>}
			<a className={'mars-top-nav__contact-txt'} href={href}>
				{label}
			</a>
		</div>
	);
};