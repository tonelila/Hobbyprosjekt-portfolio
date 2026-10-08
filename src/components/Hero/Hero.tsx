import styles from './Hero.module.css'

function Hero() {
    return (
        <section className= {styles.hero}>
            <p className={styles.greeting}> Hei, jeg er</p>
            <h1 className={styles.name}>Tone</h1>
            <p className={styles.tagline}> Informatikkstudent </p>
        </section>
    )
}

export default Hero