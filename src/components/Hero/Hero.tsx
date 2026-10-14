import styles from './Hero.module.css'
import profilbilde from '../../assets/bilde portfolio.png'

const skills = ['TypeScript', 'React', 'UX-design', 'Figma']

function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.status}>
          <span className={styles.dot} />
          Ser etter sommerjobb 2027
        </p>
        <h1 className={styles.title}>
        Hei, jeg er <em>Tone-Lill.</em>
        </h1>
        <p className={styles.subtitle}>
        Informatikkstudent ved NTNU med fokus på interaksjonsdesign.
        </p>
        <ul className={styles.chips}>
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>

      <div className={styles.photoWrap}>
        <div className={styles.arch}>
          <img src={profilbilde} alt="Portrett av Tone-Lill" />
        </div>
      </div>
    </section>
  )
}

export default Hero