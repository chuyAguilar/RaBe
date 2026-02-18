import { Card } from "../components/Card"
import { LocalIcon } from "../components/LocalIcon"
import { MapIcon } from "../components/MapIcon"
import { AirportIcon } from "../components/AirportIcon"

export function Services() {

    return (
        <section class="py-24 bg-gradient-to-b from-blue-800 to-blue-50">
            <div class="max-w-6xl mx-auto px-6">

                <h2 class="text-3xl font-bold text-white">
                    Nuestros Servicios
                </h2>

                <p class="text-white mt-4 max-w-2xl">
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
                        tittle="Aeropuerto y Ejecutivos"
                        subtittle="Traslados a AIFA, CDMX y compromisos empresariales con atención puntual y directa."
                    >
                        <AirportIcon className="h-12 w-12 text-blue-700" />
                    </Card>

                </div>


                <div className="mt-20">
                    <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl p-8 text-center">

                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Disponible para empresas
                        </h3>

                        <p className="text-slate-600">
                            Servicio con facturación electrónica y pago con tarjeta para traslados recurrentes o programados.
                        </p>

                    </div>
                </div>

            </div>
        </section>


    )
}