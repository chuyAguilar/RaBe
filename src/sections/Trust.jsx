import { Card } from "../components/Card"
import { FacturaIcon } from "../components/FacturaIcon"
import { CalendarIcon } from "../components/CalendarIcon"
import { TransportIcon } from "../components/TransportIcon"
export function Trust() {

    return (
        <section className="flex flex-col justify-center min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-5 mt-5">
                    <h1 className="text-5xl text-white sm:text-7xl font-bold tracking-wide mb-5">Más que un taxi local</h1>
                    <h2 className="text-base text-white sm:text-lg font-semibold">Un servicio formal y organizado para empresas y traslados importantes.</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center mb-10">
                    <Card tittle={"Facturación empresarial"} subtittle={"Emitimos factura electrónica para empresas y servicios recurrentes, facilitando tu control administrativo."}>
                        <FacturaIcon className="h-16 w-16 text-green-500" />
                    </Card>

                    <Card tittle={"Servicio programado"} subtittle={"Confirmamos y programamos tus traslados para evitar retrasos en compromisos importantes."}>
                        <CalendarIcon className="h-16 w-16 text-green-500" />
                    </Card>

                    <Card tittle={"Transporte formal"} subtittle={"Operamos como servicio establecido en Tula, con atención directa y responsable."}>
                        <TransportIcon className="h-10 w-10 text-green-500" />
                    </Card>

                </div>
            </div>
        </section>
    )
}