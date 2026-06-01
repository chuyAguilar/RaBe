import { Card } from "../components/Card";
import { LocalIcon } from "../components/Icons/LocalIcon";
import { MapIcon } from "../components/Icons/MapIcon";
import { AirportIcon } from "../components/Icons/AirportIcon";
import { Teams } from "../components/Icons/Teams";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { business } from "../config/business";

export function Services() {
	return (
		<section className="py-24 lg:py-32 bg-gradient-to-b from-blue-800 to-blue-50">
			<div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">

				{/* Encabezado de sección — horizontal */}
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20 border-b border-white/20 pb-12">
					<div>
						<div className="flex items-center gap-4 mb-5">
							<div className="w-10 h-px bg-white/40"></div>
							<span className="text-white/60 text-xs tracking-[0.3em] uppercase">Lo que ofrecemos</span>
						</div>
						<h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
							Nuestros<br />Servicios
						</h2>
					</div>
					<p className="text-white/70 text-base font-light leading-relaxed max-w-sm sm:text-right">
						Distintas modalidades de traslado adaptadas a tus necesidades, con puntualidad y formalidad.
					</p>
				</div>

				{/* Grid editorial de servicios */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<Card
						tittle="Traslados Locales"
						subtittle="Servicio dentro de Tula de Allende y municipios cercanos, ideal para traslados diarios y compromisos importantes."
					>
						<LocalIcon className="h-10 w-10 text-blue-700" />
					</Card>

					<Card
						tittle="Viajes Foráneos"
						subtittle="Traslados programados a Ciudad de México y otras ciudades cercanas con servicio puntual y organizado."
					>
						<MapIcon className="h-10 w-10 text-blue-700" />
					</Card>

					<Card
						tittle="Rutas de Alta Demanda"
						subtittle="Traslados recurrentes a AIFA y AICM, hospitales en CDMX y Pachuca, así como viajes constantes a Puebla y Querétaro."
					>
						<AirportIcon className="h-10 w-10 text-blue-700" />
					</Card>

					<Card
						tittle="Empresas que Confían"
						subtittle="UNNE · Frama · First Plus · Sika. Empresas del sector industrial y logístico en la región."
					>
						<Teams className="h-10 w-10 text-blue-700" />
					</Card>
				</div>

				{/* Bloque de factura — separado, con más espacio */}
				<div className="mt-20 lg:mt-28">
					<div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-10 text-center">
						<p className="text-blue-800/60 text-xs tracking-[0.25em] uppercase font-medium mb-4">Después de tu viaje</p>
						<h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">
							¿Requieres factura?
						</h3>
						<p className="text-slate-600 text-base font-light leading-relaxed mb-8 max-w-md mx-auto">
							Si ya realizaste tu traslado y necesitas apoyo con tu factura, comunícate con nosotros y con gusto te asistimos.
						</p>
						<WhatsAppButton
							phone={business.contact.phone2}
							message={business.contact.trackingMessages.factura}
							label="Informes de facturación"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
