const projects = require('./showcases')

exports.createPages = async ({ actions: { createPage } }) => {
  projects.forEach((project) => {
    createPage({
      path: `/showcase/${project.slug}`,
      component: require.resolve('./src/templates/showcase.tsx'),
      context: { project },
    })
  })
}
