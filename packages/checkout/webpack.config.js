const config = require('@salesforce/pwa-kit-dev/configs/webpack/config')

// Add your customizations here
const clientConfig = config.find((cnf) => {
  
  console.log(cnf)
  if(cnf.name === 'client'){

  }
})

module.exports = config