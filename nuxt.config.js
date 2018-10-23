const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/design-assets/'
  }
} : {}

module.exports = {
  ...routerBase,
  head: {
    titleTemplate: '%s - WordCamp Tokyo Design Assets 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WordCamp Tokyo Design Assets 2018' }
    ]
  }
}
