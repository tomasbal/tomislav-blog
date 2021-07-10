import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Linkedin from './linkedin.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  linkedin: Linkedin,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600 h-3 w-3"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
