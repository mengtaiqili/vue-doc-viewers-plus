import type { App } from 'vue'
import DocViewerPlus from './components/DocViewerPlus.vue'

export { DocViewerPlus }

export default {
  install: (app: App) => {
    app.component('DocViewerPlus', DocViewerPlus)
  }
}
