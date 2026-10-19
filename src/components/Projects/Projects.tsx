import styles from './Projects.module.css'
import Folder from '../Folder/Folder'
import { folders } from '../../data/projects'

function Projects() {
  return (
    <section id="prosjekter" className={styles.projects}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Prosjekter</h2>
        <div className={styles.grid}>
          {folders.map((folder) => (
            <Folder key={folder.label} {...folder} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects