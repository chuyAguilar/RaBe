export function FacturaIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(90)"
    >
      <path
        d="M18 21V3L15 5L12 3L9 5L6 3V21L9 19.5L12 21L15 19.5L18 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 15H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
