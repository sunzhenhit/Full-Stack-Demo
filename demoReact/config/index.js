var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname +':'+configValues.pwb+'@ds151004.mlab.com:51004/demosample'
    }

}