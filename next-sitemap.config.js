module.exports = {
  // add envoirnment variable in .env file and add your website URL

  siteUrl: process.env.SITE_URL || "https://sampathweerasekara.dev",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
