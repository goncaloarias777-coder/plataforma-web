/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gonzaloarias.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*'],
}
