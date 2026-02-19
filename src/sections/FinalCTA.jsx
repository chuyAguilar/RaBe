import { WhatsAppButton } from "../components/WhatsAppButton"
export function FinalCTA(props) {
    const {phone,message} = props
    return (
        <section className="flex flex-col justify-center items-center max-w-5xl mx-auto px-6 mb-15 bg-gradient-to-b from-blue-50 to-white max-w-6xl mx-auto">
            <div className="px-6"></div>
            <WhatsAppButton
                phone={phone}
                message={message}
                label="Solicitar viaje por WhatsApp"
            />
        </section>
    )
}