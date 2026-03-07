import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DatosBancarios() {
	const [copiedId, setCopiedId] = useState(null);

	const handleCopy = (text, id) => {
		// Clean whitespace for copying correctly (e.g. 16 digit cards vs displayed with spaces)
		const cleanText = text.replace(/\s+/g, '');
		navigator.clipboard.writeText(cleanText).then(() => {
			setCopiedId(id);
			setTimeout(() => setCopiedId(null), 2000); // Reset after 2s
		});
	};

	const copyFeedback = (id) => (
		copiedId === id ? (
			<span className="text-xs text-green-600 font-semibold absolute -top-5 right-0 bg-green-100 px-2 py-0.5 rounded shadow-sm opacity-100 transition-opacity">
				¡Copiado!
			</span>
		) : null
	);

	// Reusable component for each data row
	const DataRow = ({ label, value, copyId }) => (
		<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
			<div>
				<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
				<p className="text-slate-900 font-mono text-lg tracking-tight leading-none">{value}</p>
			</div>
			{copyId && (
				<div className="relative mt-2 sm:mt-0">
					<button
						onClick={() => handleCopy(value, copyId)}
						className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
						Copiar
					</button>
					{copyFeedback(copyId)}
				</div>
			)}
		</div>
	);

	return (
		<div className="min-h-screen bg-slate-50 py-12 px-4 flex flex-col items-center">

			{/* Header Title */}
			<div className="w-full max-w-5xl text-center mb-10">
				<h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">Datos Bancarios</h1>
				<p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
					Selecciona el banco de tu preferencia para realizar tu transferencia o depósito.
				</p>
			</div>

			{/* Cards Container */}
			<div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

				{/* Inbursa Card */}
				<div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300">
					{/* Card Header */}
					<div className="bg-slate-900 p-6 md:p-8 flex items-center justify-between">
						<div>
							<p className="text-slate-400 tracking-wider text-[10px] md:text-xs font-bold uppercase mb-1">Banco: Inbursa Visa</p>
							<h2 className="text-lg md:text-xl font-bold text-white leading-tight">Mayra Carmer Bernal Juárez</h2>
						</div>
						{/* Subtle Bank Icon Indicator */}
						<div className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
							<span className="text-white font-bold text-sm">INB</span>
						</div>
					</div>

					{/* Card Body */}
					<div className="p-6 md:p-8 flex-grow flex flex-col gap-6">
						<DataRow label="No. de Tarjeta" value="4658 2859 1373 5258" copyId="inbursa-tarjeta" />

						<div className="border-t border-slate-100 pt-6">
							<DataRow label="No. de Cuenta" value="50026549402" copyId="inbursa-cuenta" />
						</div>

						<div className="border-t border-slate-100 pt-6">
							<DataRow label="CLABE Interbancaria" value="036311500265494025" copyId="inbursa-clabe" />
						</div>
					</div>
				</div>

				{/* BBVA Card */}
				<div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300">
					{/* Card Header - Note the BBVA Dark Blue shade (approx #072146) */}
					<div className="bg-[#072146] p-6 md:p-8 flex items-center justify-between">
						<div>
							<p className="text-blue-200 tracking-wider text-[10px] md:text-xs font-bold uppercase mb-1">Banco: BBVA Bancomer</p>
							<h2 className="text-lg md:text-xl font-bold text-white leading-tight">David Sergio Ramirez del Rio</h2>
						</div>
						{/* Subtle Bank Icon Indicator */}
						<div className="h-10 w-10 bg-[#0A3066] rounded-full flex items-center justify-center border border-[#144385]">
							<span className="text-white font-bold text-sm">BBVA</span>
						</div>
					</div>

					{/* Card Body */}
					<div className="p-6 md:p-8 flex-grow flex flex-col gap-6">
						{/* In the image, the account number is formatted with spaces */}
						<DataRow label="Número de Cuenta / CLABE" value="012 180 01523943200 9" copyId="bbva-cuenta" />

						<div className="border-t border-slate-100 pt-6">
							<DataRow label="Número de Tarjeta de Débito" value="4152 3143 3099 6870" copyId="bbva-tarjeta" />
						</div>
					</div>
				</div>

			</div>

			{/* Back Button */}
			<div className="w-full max-w-5xl flex justify-center pb-8">
				<Link
					to="/"
					className="inline-flex items-center justify-center py-3 px-8 border border-slate-200 rounded-xl shadow-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					Volver al Inicio
				</Link>
			</div>

		</div>
	);
}
