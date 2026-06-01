import { Card } from "../components/Card"
import { FacturaIcon } from "../components/Icons/FacturaIcon"
import { CalendarIcon } from "../components/Icons/CalendarIcon"
import { TransportIcon } from "../components/Icons/TransportIcon"

export function Trust() {
	return (
		<section className="py-24 lg:py-32 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
			<div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">

				{/* Layout asimétrico: texto editorial a la izquierda + cards a la derecha */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

					{/* Columna izquierda — texto editorial */}
					<div className="flex flex-col gap-8 lg:sticky lg:top-24">
						<div className="flex items-center gap-4">
							<div className="w-10 h-px bg-white/30"></div>
							<span className="text-white/50 text-xs tracking-[0.3em] uppercase">Por qué elegirnos</span>
						</div>

						<h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.05]">
							Más que un<br />
							<span className="text-white/60">taxi local</span>
						</h2>

						<p className="text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-md">
							Un servicio formal y organizado para empresas y traslados importantes.
							Puntualidad y responsabilidad en cada viaje.
						</p>

						{/* Estadística decorativa */}
						<div className="border-t border-white/10 pt-8">
							<div className="flex gap-12">
								<div>
									<p className="text-3xl font-bold text-white">100%</p>
									<p className="text-white/50 text-xs tracking-wider uppercase mt-1">Viajes puntuales</p>
								</div>
								<div className="border-l border-white/10 pl-12">
									<p className="text-3xl font-bold text-white">CDMX</p>
									<p className="text-white/50 text-xs tracking-wider uppercase mt-1">Cobertura principal</p>
								</div>
							</div>
						</div>
					</div>

					{/* Columna derecha — cards verticales */}
					<div className="flex flex-col gap-6">
						<Card
							tittle="Facturación empresarial"
							subtittle="Emitimos factura electrónica para empresas y servicios recurrentes, facilitando tu control administrativo."
						>
							<FacturaIcon className="h-10 w-10 text-green-500" />
						</Card>

						<Card
							tittle="Servicio programado"
							subtittle="Confirmamos y programamos tus traslados para evitar retrasos en compromisos importantes."
						>
							<CalendarIcon className="h-10 w-10 text-green-500" />
						</Card>

						<Card
							tittle="Transporte formal"
							subtittle="Operamos como servicio establecido en Tula, con atención directa y responsable."
						>
							<TransportIcon className="h-10 w-10 text-green-500" />
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}