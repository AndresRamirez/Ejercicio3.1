const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yugi', {
    useNewUrlParser: true
})
    .then(db => console.log(`DB cchucha verguer`))
    .catch(err => console.err(err));