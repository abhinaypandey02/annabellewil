module.exports = {
  siteMetadata: {
    title: `Paypal`,
    siteUrl: `https://www.yourdomain.tld`,
    description:"PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account."
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: 'gatsby-plugin-manifest', options: {
      "icon": "src/images/icon.png"
    }
  },]
};