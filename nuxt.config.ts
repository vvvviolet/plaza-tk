// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  {
    
    devtools: { enabled: true },
    pages:true,
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: [
      'nuxt-icon',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/i18n',
      '@ant-design-vue/nuxt'
    ],

    vite: {
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:3333',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          },
        },
      }
    },
    i18n: {
      vueI18n: './i18n.config.ts' // if you are using custom path, default 
    },
    antd:{
      
    }
}
)


