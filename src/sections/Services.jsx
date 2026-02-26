import { Card } from "../components/Card"
import { LocalIcon } from "../components/Icons/LocalIcon"
import { MapIcon } from "../components/Icons/MapIcon"
import { AirportIcon } from "../components/Icons/AirportIcon"
import { Teams } from "../components/Icons/Teams"
import { WhatsAppButton } from "../components/WhatsAppButton"
import { business } from "../config/business"
export function Services() {

    return (
        <section class="py-10 bg-gradient-to-b from-blue-800 to-blue-50 mt-0">
            <div class="max-w-6xl mx-auto px-6">

                <h2 class="text-3xl font-bold text-white">
                    Nuestros Servicios
                </h2>

                <p class="text-white mt-4 max-w-2xl mb-15">
                    Ofrecemos distintas modalidades de traslado adaptadas a tus necesidades.
                </p>

               <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    <Card
                        tittle="Traslados Locales"
                        subtittle="Servicio dentro de Tula de Allende y municipios cercanos, ideal para traslados diarios y compromisos importantes."
                    >
                        <LocalIcon className="h-12 w-12 text-blue-700" />
                    </Card>

                    <Card
                        tittle="Viajes Foráneos"
                        subtittle="Traslados programados a Ciudad de México y otras ciudades cercanas con servicio puntual y organizado."
                    >
                        <MapIcon className="h-12 w-12 text-blue-700" />
                    </Card>

                    <Card
                        className="col-span-2 lg:col-span-1"
                        tittle="Rutas de Alta Demanda"
                        subtittle="Traslados recurrentes a AIFA y Aeropuerto Internacional de la Ciudad de México, hospitales en CDMX y Pachuca, así como viajes constantes a Ciudad de México, Pachuca, Puebla y Querétaro."
                    >
                        <AirportIcon className="h-12 w-12 text-blue-700" />
                    </Card>

                    <Card
                        className="col-span-2 lg:col-span-1"
                        tittle="Empresas que Confían en Nosotros"
                        subtittle="•UNNE • Construcciones Industriales Frama S.A. de C.V. • First Plus Tula Hidalgo • Sika – Planta Tula • Empresas del sector industrial y logístico en la región."
                    >
                        <Teams className="h-12 w-12 text-blue-700"/>
                    </Card>

                </div>


                <div className="mt-20">
                    <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl p-8 text-center">

                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    ¿Ya viajaste y requieres factura?
                    </h3>
                        <p className="text-slate-600">
Si ya realizaste tu traslado y necesitas apoyo con tu factura, comunícate con nosotros y con gusto te asistimos.                        </p>


            <div className="mt-4">
 <WhatsAppButton
                phone={business.contact.phone2}
                message={business.contact.trackingMessages.factura}
                label="Informes"
            />
            </div>
                    </div>
                    
                </div>

            </div>
        </section>


    )
}