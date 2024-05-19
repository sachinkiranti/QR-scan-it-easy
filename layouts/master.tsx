import { NavBar } from "@/components/navbar";
import { Link } from "@nextui-org/link";

export default function MasterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<NavBar />
			<main className="container mx-auto flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="#"
					title="QR - Scan It Easy"
				>
					<span className="text-default-600">All Right Reserved.</span>
					<p className="text-primary">QR - Scan It Easy</p>
				</Link>
			</footer>
		</div>
	);
}