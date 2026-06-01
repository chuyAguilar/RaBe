import { WhatsAppButton } from "../components/WhatsAppButton"

export function FinalCTA(props) {
	const { phone, message } = props
	return (
		<section className="bg-gradient-to-b from-blue-50 to-white">
			<div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-20 lg:py-28">
				{/* Línea superior */}
				<div className="border-t border-slate-200 mb-12"></div>

				{/* Layout horizontal: texto a la izquierda, botón a la derecha */}
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
					<div className="max-w-xl">
						<p className="text-slate-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
							¿Listo para viajar?
						</p>
						<h2 className="text-3xl sm:text-4xl font-bold text-blue-900 tracking-tight leading-tight">
							Agenda tu traslado<br className="hidden sm:block" /> hoy mismo
						</h2>
						<p className="text-slate-500 text-base font-light mt-4 leading-relaxed">
							Reserva rápida, directa y sin complicaciones vía WhatsApp.
						</p>
					</div>

					<div className="flex-shrink-0">
						<WhatsAppButton
							phone={phone}
							message={message}
							label="Solicitar viaje por WhatsApp"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}