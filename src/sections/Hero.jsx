import { WhatsAppButton } from "../components/WhatsAppButton"
export function Hero(props) {
    const {
        title,
        subtitle,
        phone,
        message } = props
    return (
        <section
            className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-[position:65%_center] sm:bg-center"
            style={{ backgroundImage: "url('/heroImg.png')" }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative w-full max-w-4xl mx-auto text-center space-y-6 text-white">
                <h1 className="text-5xl sm:text-7xl font-bold tracking-wide">
                    {title}
                </h1>

                <h2 className="text-base sm:text-lg font-semibold">
                    {subtitle}
                </h2>

                <WhatsAppButton
                    phone={phone}
                    message={message}
                    label="Solicitar viaje por WhatsApp"
                />
            </div>
        </section>
    )
} 