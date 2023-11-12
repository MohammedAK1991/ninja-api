// ninja.schema.ts

import * as mongoose from 'mongoose';

export const NinjaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  weapon: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  // other fields...
});

export const NinjaModel = mongoose.model('Ninja', NinjaSchema);
