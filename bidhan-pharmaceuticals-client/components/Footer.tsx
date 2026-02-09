import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";
export default function Footer() {
	return (
		<footer className="bg-slate-950 text-slate-300">
			{/* Top Section */}
			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div className="space-y-4">
						<div className="flex items-center gap-3">
													<Image src={'/bidhanlogo.png'} width={80} height={80} alt="./bidhan pharmacetuicals logo"/>
							
							{/* <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500" /> */}
							<div>
								<p className="text-lg font-semibold text-white">
									Bidhan Pharmaceuticals
								</p>
								<p className="text-xs text-slate-400 tracking-wide">
									Science • Care • Trust
								</p>
							</div>
						</div>
						<p className="text-sm text-slate-400 leading-relaxed">
							Bidhan Pharmaceuticals is committed to delivering high-quality,
							affordable, and innovative healthcare solutions with global
							standards of safety and efficacy.
						</p>
					</div>

					{/* Company */}
					<div>
						<h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
							Company
						</h4>
						<ul className="space-y-3 text-sm">
							<li><Link href="/about" className="hover:text-white">About Us</Link></li>
							<li><Link href="/products" className="hover:text-white">Products</Link></li>
							<li><Link href="/research" className="hover:text-white">Research & Quality</Link></li>
							<li><Link href="/careers" className="hover:text-white">Careers</Link></li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
							Resources
						</h4>
						<ul className="space-y-3 text-sm">
							<li><Link href="/compliance" className="hover:text-white">Compliance</Link></li>
							<li><Link href="/certifications" className="hover:text-white">Certifications</Link></li>
							<li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
							<li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
							Contact
						</h4>
						<ul className="space-y-4 text-sm">
							<li className="flex items-start gap-3">
								<MapPin size={18} className="mt-0.5 text-blue-500" />
								<span>Corporate Office, India</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone size={18} className="text-blue-500" />
								<span>+91 XXXXX XXXXX</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail size={18} className="text-blue-500" />
								<span>bidhanpharmaceuticalsofficial@gmail.com</span>
							</li>
						</ul>

						<div className="mt-6 flex items-center gap-4">
							<Link href="https://www.facebook.com/profile.php?id=61587370738131" className="rounded-full bg-slate-800 p-2 hover:bg-blue-600 transition">
								<Facebook size={16} />
							</Link>
							<Link href="https://www.linkedin.com/in/bidhan-pharmaceuticals-57b9a73a9/" className="rounded-full bg-slate-800 p-2 hover:bg-blue-600 transition">
								<Linkedin size={16} />
							</Link>
							<Link href="https://x.com/BidhanPharma" className="rounded-full bg-slate-800 p-2 hover:bg-blue-600 transition">
								<Twitter size={16} />
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-slate-800">
				<div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<p className="text-xs text-slate-500">
						© {new Date().getFullYear()} Bidhan Pharmaceuticals Pvt. Ltd. All rights reserved.
					</p>
					<p className="text-xs text-slate-500">
						Designed with precision for modern healthcare
					</p>
				</div>
			</div>
		</footer>
	);
}

