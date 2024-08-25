import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';

export default function ShippingPage({mainMenu, footerMenu}: IPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1 page-heading_m-h1'>About The Zahra</h1>
				<div className='text-container'>
					<p>
						Welcome to <strong>The Zahra</strong>, your ultimate destination for trendy fashion and lifestyle products! Our mission is to provide you with a diverse range of high-quality items that cater to your unique style and preferences. Founded with the vision of bringing the latest fashion trends and essential lifestyle products to you, The Zahra is committed to offering an unparalleled shopping experience.
					</p>
					<p>
						At The Zahra, we believe that everyone deserves to express themselves through fashion. That's why we curate a wide selection of clothing, accessories, and beauty products that are not only stylish but also affordable. Whether you're looking for chic outfits for a special occasion, casual wear for everyday comfort, or stunning jewelry to elevate your look, we have something for everyone.
					</p>
					<p>
						Our team is dedicated to sourcing products that meet our high standards of quality and craftsmanship. We work closely with trusted suppliers and brands to ensure that every item you purchase from us is made to last. We take pride in offering products that you can wear and enjoy for years to come.
					</p>
					<p>
						Customer satisfaction is our top priority. We understand that shopping online can be a daunting experience, which is why we strive to provide exceptional service from the moment you visit our site. Our user-friendly interface, secure payment options, and fast shipping ensure that your shopping experience is seamless and enjoyable. If you have any questions or need assistance, our dedicated support team is here to help you every step of the way.
					</p>
					<p>
						We are also passionate about sustainability and ethical practices. At The Zahra, we aim to minimize our environmental impact by partnering with brands that share our values. We believe in responsible sourcing, and we are constantly exploring ways to improve our processes and reduce waste. By shopping with us, you are supporting a business that cares about the planet and the communities we serve.
					</p>
					<p>
						Join us on this exciting journey as we continue to grow and evolve. Follow us on social media to stay updated on the latest trends, exclusive offers, and new arrivals. We love connecting with our customers and hearing your feedback, so don't hesitate to reach out and share your thoughts with us.
					</p>
					<p>
						Thank you for choosing The Zahra as your go-to fashion destination. We are thrilled to have you as part of our community, and we look forward to providing you with an amazing shopping experience for years to come!
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}
