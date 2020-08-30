import mongoose, {Schema} from 'mongoose';

const SampleSchema: Schema = new Schema({
  title: {type: String, required: true},
});

export default mongoose.model('family', SampleSchema);
