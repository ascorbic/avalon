const { synchronize } = require("@gatsby-cloud-pkg/merlin-synchronizer")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  cache,
}) => {
  const { ledgerExists } = await synchronize({
    siteId: "ba44531c-b84e-478d-9d08-65da49f478e3", // should be a site ID for a Gatsby Cloud site
    gatsbySitePath: process.cwd(), // should be an absolute path to a Gatsby site on disk
    cache, // needs cache.get and cache.set methods
    handleAction: (action) => {
      console.log(action)
      // do stuff with this action
      // it's a Gatsby core redux action which was emitted in Merlin and stored in GCS
    },
  })
  console.log({ ledgerExists })
}
