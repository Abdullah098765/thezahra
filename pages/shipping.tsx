import MainLayout from "../layouts/Main";
import { IMenuItem } from "../@types/components";
import { GetServerSideProps } from "next";
import { apiClient } from "../lib/api";
import { makeAllMenus } from "../lib/menu";

export default function ShippingPage({
	mainMenu,
	footerMenu,
}: IShippingPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={"container-xxl"}>
				<h1 className="page-heading page-heading_h1  page-heading_m-h1">
					Shipping Information
				</h1>
				<div className="text-container">
					<h2>Domestic Shipping (Pakistan)</h2>
					<p>
						<strong>Within Karachi Shipping:</strong>
						<br />
						Delivery Time: 4-8 business days.
						<br />
						Shipping Fee: PKR 210 (within Karachi).
						<br />
						Courier Services: We partner with reputable courier services to
						ensure timely delivery.
					</p>
					<p>
						<strong>Across Pakistan Shipping:</strong>
						<br />
						Delivery Time: 4-8 business days.
						<br />
						Shipping Fee: PKR 310.
						<br />
					</p>

					<h2>International Shipping</h2>
					<p>
						<strong>Standard International Shipping:</strong>
						<br />
						Delivery Time: 7-14 business days.
						<br />
						Shipping Fee: Calculated at checkout based on the destination.
						<br />
						Courier Services: We use reliable international couriers like DHL
						and FedEx.
					</p>
					<p>
						<strong>Customs and Duties:</strong>
						<br />
						Please note that international orders may be subject to customs
						duties or taxes upon arrival in the destination country. These
						charges are the responsibility of the customer.
					</p>

					<h2>Order Processing Time</h2>

					<h2>Shipping Restrictions</h2>

					<h2>Lost or Damaged Packages</h2>
					<p>
						We take great care in packaging your orders. However, if your
						package is lost or damaged during transit, please contact our
						customer service team immediately at{" "}
						<a href="https://wa.me/923128788038"> WhatsApp </a>
						with your order details. We will work to resolve the issue promptly.
					</p>

					<h2>Contact Us</h2>
					<p>
						For any questions regarding shipping or your order, please reach out
						to us at <a href="https://wa.me/923128788038"> WhatsApp +92 (312) 8788038</a>
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<
	IShippingPageProps
> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({
		menu: "category",
	});

	const menus = makeAllMenus({ categoryTree });

	return {
		props: {
			...menus,
		},
	};
};

interface IShippingPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}
