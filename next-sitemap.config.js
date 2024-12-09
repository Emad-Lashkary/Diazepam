module.exports = {
  siteUrl: "https://diazepam.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/private" },
    ],
  },
};
