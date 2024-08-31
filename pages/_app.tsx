import { Provider } from 'react-redux';
import { store } from '../redux/store';
import 'nprogress/nprogress.css';
import '../styles/styles.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'animate.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'boundless-checkout-react/dist/index.css';

import '@fortawesome/fontawesome-free/css/svg-with-js.css';

import { AppProps } from 'next/app';
import RouterListener from '../components/RouterListener';
import LoadingLine from '../components/LoadingLine';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>The Zahra - Your Shopping Destination</title>
				<meta property="og:title" content="The Zahra - Your Shopping Destination" key="title" />
				<meta name="description" content="Welcome to The Zahra! Explore a wide range of high-quality clothing, jewelry, makeup, and more. Your go-to destination for style and value." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<RouterListener />
			<LoadingLine />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
