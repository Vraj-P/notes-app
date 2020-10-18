module.exports = {
    env: {
        MONGO_URI: "mongodb+srv://Vraj:Vraj123@cluster0.mzr2p.mongodb.net/<dbname>?retryWrites=true&w=majority"
    },
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty'
        }
    
        return config
      }
}