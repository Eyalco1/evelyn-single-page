import './assets/css/app.css'
import './assets/css/fonts.css'
// @ts-ignore
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
