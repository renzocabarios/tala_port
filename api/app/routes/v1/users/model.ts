import { Schema, model } from 'mongoose';
import { RESOURCE } from '../../../constants';

const option = {
  timestamps: true,
};

const schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    walletAddress: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option,
);

export default model(RESOURCE.USERS, schema);
