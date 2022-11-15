import { Schema, model } from 'mongoose';

const UserSchema = newSchema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	statsID: {
		type: ObjectId,
		ref: 'Stats',
	},
	logsID: {
		type: ObjectId,
		ref: 'Logs',
	},
});

const User = model('User', UserSchema);
export default User;
