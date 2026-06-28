const CircuitDecor = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M-20 120 C 80 40, 180 200, 280 100 S 420 60, 440 180"
      stroke="url(#circuitBlue)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.85"
    />
    <path
      d="M-10 280 C 100 360, 200 180, 320 300 S 400 340, 420 260"
      stroke="url(#circuitOrange)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.85"
    />
    <path
      d="M60 0 C 120 80, 40 160, 100 240 S 180 320, 140 400"
      stroke="#00d4ff"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.35"
    />
    <path
      d="M300 20 C 340 100, 260 140, 300 220 S 360 300, 320 400"
      stroke="#ff6b35"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.35"
    />
    <circle cx="280" cy="100" r="4" fill="#00d4ff" opacity="0.9" />
    <circle cx="320" cy="300" r="4" fill="#ff6b35" opacity="0.9" />
    <circle cx="100" cy="240" r="3" fill="#00d4ff" opacity="0.7" />
    <defs>
      <linearGradient id="circuitBlue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="circuitOrange" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#ff6b35" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
);

export default CircuitDecor;
