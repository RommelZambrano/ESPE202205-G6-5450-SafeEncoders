const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  profit: {
    type: Number,
    required: true
  }
});

productosSchema.set('toJSON', {
  virtuals: true,     
  versionKey: false, 
  transform: (doc, ret) => {
    delete ret._id;
  }
});

module.exports = mongoose.model('Productos', productosSchema, 'Productos');