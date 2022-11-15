import { Schema, model } from 'mongoose';

const LogsSchema = new Schema({
	exercises: [
		{
			exercise: {
				type: Schema.Types.ObjectId,
				ref: 'exercises',
			},
			sets: [
				{
					weight: {
						type: Number,
						required: true,
					},
					reps: {
						type: Number,
						required: true,
					},
				},
			],
		},
	],
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},

