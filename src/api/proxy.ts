export default async function handler(req, res) {
  const response = await fetch(`https://internal.gatsbyjs.com`)
  const data = await response.text()
  res.status(200).json({ data })
}
