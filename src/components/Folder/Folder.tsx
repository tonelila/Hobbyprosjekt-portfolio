import styles from './Folder.module.css'
import type { FolderData } from '../../data/projects'

function Folder({ label, meta, files }: FolderData) {
  return (
    <div className={styles.folder}>
      <div className={styles.back} />
      <div className={`${styles.paper} ${styles.paperBack}`} />
      <div className={styles.paper}>
        {files.map((file) => <span key={file}>{file}</span>)}
      </div>
      <div className={styles.front}>
        <span className={styles.label}>{label}</span>
        <span className={styles.meta}>{meta}</span>
      </div>
    </div>
  )
}

export default Folder