import Link from 'next/link';
import logoImg from '../../assets/logofooter.svg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || 'The Zahra';
	return (
		<>
			<div className='page-footer__logo'>
				<Link href='/'>
						<img src={logoImg.src} width={logoImg.width} height={logoImg.height} alt={title} />
			
				</Link>
			</div>
			<div className='page-footer__company-info'>
				<p className='title'>{title}</p>
			</div>
			<div className='page-footer__disclaimer'>
			The Zahra - Your ultimate destination for the latest in fashion and beauty trends in Pakistan. Explore our curated collection of stylish clothing, makeup, and accessories designed to elevate your look. Shop with confidence and embrace your unique style with The Zahra.


			</div>
		</>
	);
}