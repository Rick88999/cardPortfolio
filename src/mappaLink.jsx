import whatsappIcon from './whatsapp-svgrepo-com.svg'

function GithubIcon({size}) {
  return (
    <svg
      aria-label="GitHub"
      width={size}
      height={size}
      viewBox="0 0 19 19"
      style={{ filter: 'brightness(0) invert(1)' }}
    >
      <use href="/icons.svg#github-icon" />
    </svg>
  )
}

function LinkedinIcon({size}) {
  return (
    <svg
      aria-label="LinkedIn"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color: 'white' }}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V8.999h3.564v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({size}) {
  return (
    <svg
      aria-label="Instagram"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'white' }}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

function WhatsappIcon({size}) {
  return (
    <img
      aria-label="WhatsApp"
      alt="WhatsApp"
      src={whatsappIcon}
      width={size}
      height={size}
      style={{ filter: 'invert(1)' }}
    />
  )
}

const MAPPALINKS = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  WhatsApp: WhatsappIcon,
}

export default MAPPALINKS
