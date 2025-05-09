
const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.error('Error de conexión con la base de datos:', err));
};
