import Link from 'next/link';
import logoImg from '../../assets/logo.svg';

export default function FooterAbout({ companyTitle }: { companyTitle?: string }) {
    const title = companyTitle || 'The Zahra Store';
    return <>
        <div className='page-footer__logo'>
            <Link href='/'>
                <img src={logoImg.src} width={150} height={63} alt={title} />
            </Link>
        </div>
        <div className='page-footer__company-info'>
            <p className='title'>{title}</p>
        </div>
        <div className='page-footer__disclaimer'>
            <p className='text-muted small'>
                Welcome to The Zahra! Explore a wide range of high-quality clothing, jewelry, makeup,
                and more. Our commitment is to bring you the best in style and value. Shop with confidence
                and let us add a gleam to your shopping experience.
            </p>
        </div>
    </>;
}