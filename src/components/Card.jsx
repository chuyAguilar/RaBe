
export function Card(props) {
    const { tittle, subtittle,children, className = "" } = props
    return (
        <div className={`bg-white max-w-sm p-6  rounded-lg shadow-xs flex flex-col items-center hover:bg-blue-200 ${className}`}>

            {children}
            <h5 className="text-center mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{tittle}</h5>
            <p className="text-center">{subtittle}</p>
        </div>
    )
}