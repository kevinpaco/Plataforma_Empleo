const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/plataformaEmpleo';
mongoose.connect(URI)
.then(db=>console.log('DB esta conectado'))
.catch(error=>console.error(error))

module.exports = mongoose;