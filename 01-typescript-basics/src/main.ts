import './style.css'
import './topics/01-basics-types.ts'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
hola mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
