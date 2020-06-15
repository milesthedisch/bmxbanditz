const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicBandits {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const banditTemplate = path.resolve('src/templates/bandit.jsx');

  pages.data.allPrismicBandits.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: banditTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
