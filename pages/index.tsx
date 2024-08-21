import {IProduct} from 'boundless-api-client';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import ProductsList from '../components/ProductsList';
import MainLayout from '../layouts/Main';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
// import VerticalMenu from '../components/VerticalMenu';
import {IMenuItem} from '../@types/components';
import SwiperSlider from '../components/SwiperSlider';
import thezahrhero from '../assets/thezahrhero.jpeg';
import sliderimage1 from '../assets/sliderimage1.jpeg';
import sliderimage2 from '../assets/sliderimage2.jpeg';
import sliderimage3 from '../assets/sliderimage3.jpeg';
import sliderimage4 from '../assets/sliderimage4.jpeg';
// import CoverTextInCenter from '../components/CoverTextInCenter';
// import bgImg from '../assets/cover-bg.jpeg';
// import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
import ProductsSliderByQuery from '../components/ProductsSliderByQuery';
import TextWithIcons from '../components/TextWithIcons';
import {faBug} from '@fortawesome/free-solid-svg-icons/faBug';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import {faSmile} from '@fortawesome/free-solid-svg-icons/faSmile';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Reviews from '../components/Reviews';
import {IBasicSettings} from '../@types/settings';

import reviewWoman1 from '../assets/review-woman-1.jpg';
import reviewMan1 from '../assets/review-man-1.jpg';
import reviewMan2 from '../assets/review-man-2.jpg';

export default function IndexPage({products, mainMenu, footerMenu, basicSettings}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu} basicSettings={basicSettings}>
			<div className='container-xxl'>
				<MainPageSlider />
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>The Zahra Store</h1>
				<ProductsList
					products={products}
					className={'page-block'}
					itemClassName={'products__item_4-in-row'}
				/>
			</div>
		
			<div className='container-xxl'>
				<ProductsSliderByQuery
					query={{collection: ['main-page'], sort: 'in_collection'}}
					title={'Special offers:'}
					wrapperClassName='page-block'
				/>
			
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IIndexPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {products} = await apiClient.catalog.getProducts({collection: ['main-page'], sort: 'in_collection'});
	const basicSettings = await apiClient.system.fetchSettings(['system.locale', 'system.currency']) as IBasicSettings;

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			products,
			basicSettings,
			...menus
		}
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}

function 	MainPageSlider() {
	const slides = [
	
		{
			'img': sliderimage1.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		},
		{
			'img': sliderimage2.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		},
		{
			'img': sliderimage3.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		},
		{
			'img': sliderimage4.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		},
		{
			'img': thezahrhero.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'useFilling': false,
			'fillingColor': '#000000',
			'fillingOpacity': 0
		},
	];

	return (
		<SwiperSlider
			showPrevNext
			// pagination='progressbar'
			size={'large'}
			slides={slides}
			className={'mb-4'}
		/>
	);
}