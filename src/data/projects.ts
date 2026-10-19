export interface FolderData {
  label: string
  meta: string
  files: string[]
}

export const folders: FolderData[] = [
  { label: 'Bachelor', meta: '[x] prosjekter', files: ['helseapp/', 'gruppeprosjekt/'] },
  { label: 'Hobby', meta: '1 prosjekt', files: ['portfolio/'] },
  { label: 'Språk', meta: '[x] språk', files: ['typescript.ts', 'python.py'] },
]