import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
// import { Providers } from "./Providers";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">

				<Head />
				<Navbar />
				<main className="container mx-auto max-w-7xl px-6 flex-grow pt-8 mt-8">
					{children}
				</main>


			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://www.masterware.com.ec/"
					title="Masterware homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">JDC</p>
				</Link>
			</footer>
		</div>
	);
}
