var mongoose = require('mongoose');
passportLocalMongooseEmail = require('passport-local-mongoose-email');
mongoose.connect('mongodb://localhost/User');


uschema = mongoose.Schema;

var User = new uschema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.US = mongoose.model('User', uschema);