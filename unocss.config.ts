import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  presets: [presetIcons(), presetUno(), presetAttributify()],
  transformers: [transformerAttributifyJsx()],
})
