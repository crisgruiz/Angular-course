import './style.css'
import './topics/03-functions.ts'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
hola mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
