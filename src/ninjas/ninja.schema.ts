// ninja.schema.ts

import * as mongoose from 'mongoose';

export const NinjaSchema = new mongoose.Schema({
  name: String,
  weapon: String,
  // other fields...
});

export const NinjaModel = mongoose.model('Ninja', NinjaSchema);
