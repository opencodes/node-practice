import mongoose, {Schema} from 'mongoose';

const UserSchema: Schema = new Schema({
  title: {type: String, required: true},
});

export default mongoose.model('user', UserSchema);
