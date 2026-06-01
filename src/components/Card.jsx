
export function Card(props) {
	const { tittle, subtittle, children, className = "" } = props
	return (
		<div className={`group bg-white p-7 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md hover:border-blue-200 transition-all duration-300 ${className}`}>
			{/* Icono */}
			<div className="p-2 w-fit rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors duration-300">
				{children}
			</div>

			<div>
				<h5 className="text-lg font-semibold text-slate-800 leading-snug mb-2">
					{tittle}
				</h5>
				<p className="text-slate-500 text-sm leading-relaxed font-light">
					{subtittle}
				</p>
			</div>
		</div>
	)
}