import { SchemaOptions, Document } from 'mongoose';

const modelOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
    transform: (_: Document, obj: any): any => {
      delete obj._id;
      return obj;
    }
  },
  toObject: {
    virtuals: true,
    transform: (_: Document, obj: any): any => {
      delete obj._id;
      return obj;
    }
  },
  versionKey: false,
  timestamps: true
};

export default modelOptions;
