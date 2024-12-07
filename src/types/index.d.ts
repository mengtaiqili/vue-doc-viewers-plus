import { DefineComponent } from 'vue'

export declare const DocViewerPlus: DefineComponent<{
  fileUrl: string
  fileName?: string
  visible?: boolean
}>

declare const plugin: {
  install: (app: any) => void
}

export default plugin
