import styles from './Nav.module.css'

const links = [
  { label: 'prosjekter', href: '#prosjekter' },
  { label: 'om meg', href: '#om-meg' },
  { label: 'kontakt', href: '#kontakt' },
]

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>Tone-Lill Aarsheim</a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav