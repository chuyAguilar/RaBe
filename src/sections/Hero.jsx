import { Link } from "react-router-dom"
import { WhatsAppButton } from "../components/WhatsAppButton"

export function Hero(props) {
	const {
		title,
		subtitle,
		phone,
		message } = props

	return (
		<section
			className="relative min-h-screen flex flex-col justify-end px-8 sm:px-16 lg:px-24 pb-20 bg-cover bg-[position:65%_center] sm:bg-center"
			style={{ backgroundImage: "url('/heroImg.png')" }}
		>
			{/* Overlay degradado hacia abajo, más intenso en la parte inferior */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>

			{/* Línea decorativa superior */}
			<div className="absolute top-10 left-8 sm:left-16 lg:left-24 right-8 sm:right-16 lg:right-24 flex items-center gap-4">
				<span className="text-white/70 text-xs tracking-[0.3em] uppercase font-light">
					Tula de Allende · Hidalgo
				</span>
				<div className="flex-1 h-px bg-white/20"></div>
			</div>

			{/* Contenido principal — alineado a la izquierda */}
			<div className="relative z-10 max-w-3xl space-y-6">

				{/* Eyebrow */}
				<p className="text-white/60 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
					Servicio de Traslado Privado
				</p>

				<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
					{title}
				</h1>

				<p className="text-white/80 text-base sm:text-lg font-light max-w-md leading-relaxed">
					{subtitle}
				</p>

				<div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
					<WhatsAppButton
						phone={phone}
						message={message}
						label="Solicitar viaje por WhatsApp"
					/>

					{/* Botón secundario — Datos bancarios */}
					<Link
						to="/datos-bancarios"
						className="inline-flex items-center gap-3 rounded-xl px-7 py-3.5 font-semibold text-sm bg-white/10 text-white border border-white/30 hover:bg-white/20 active:scale-[0.98] backdrop-blur-sm transition-all duration-200"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
						</svg>
						Pagar / Transferir
					</Link>

					{/* Indicador de scroll */}
					<div className="hidden sm:flex items-center gap-2 text-white/50 text-xs tracking-widest self-center">
						<div className="w-6 h-px bg-white/40"></div>
						<span>Scroll</span>
					</div>
				</div>
			</div>
		</section>
	)
}