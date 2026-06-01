export function WhatsAppButton(props) {
	const {
		phone,
		message,
		label } = props

	const encodedMessage = encodeURIComponent(message)
	const url = `https://wa.me/${phone}?text=${encodedMessage}`

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center gap-3 rounded-xl px-7 py-3.5 font-semibold text-sm bg-green-500 text-white hover:bg-green-600 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 flex-shrink-0">
				<path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256c0 45.4 11.9 88.5 32.7 126.5L0 512l137.2-36.5c36.7 20.4 78.4 31.1 120.9 31.1C397.4 506.6 512 392 512 256S397.4 0 256 0zm117.3 358.5c-9.1 24.3-34.1 41.7-60.8 41.7-6.2 0-12.2-1.1-17.9-2.6-28.5-7.6-60.9-25.9-88-53s-45.4-59.5-53-88c-1.5-5.7-2.6-11.7-2.6-17.9 0-26.7 17.4-51.7 41.7-60.8 5.7-2.1 11.7-3.2 17.9-3.2 4.3 0 8.5.6 12.5 1.5 6.7 1.5 13 4.2 18.5 8.1 3.5 2.5 6.4 5.6 8.7 9.1l29.4 44.1c3.5 5.3 5.4 11.6 5.4 18 0 8.3-3.2 16.3-8.8 22.3l-16.7 17.6c-1.3 1.3-2.6 2.7-3.7 4.1-.7 1.1-1.4 2.2-2 3.4 5.9 11.5 15.6 21.2 27.1 27.1 1.2-.6 2.3-1.3 3.4-2l17.6-16.7c6-5.6 14-8.8 22.3-8.8 6.4 0 12.7 1.9 18 5.4l44.1 29.4c3.5 2.3 6.6 5.2 9.1 8.7 3.9 5.5 6.6 11.8 8.1 18.5 1 4 1.5 8.2 1.5 12.5 0 6.2-1.1 12.2-3.2 17.9z" />
			</svg>
			{label}
		</a>
	)
}