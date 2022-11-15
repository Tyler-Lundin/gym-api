import { Schema, model } from 'mongoose';

const StatsSchema = new Schema({
	weight: [
		{
			weight: Number,
			date: Date,
		},
	],
	height: Number,
	bodyFat: [
		{
			bodyFat: Number,
			date: Date,
		},
	],
});

export const Stats = model('Stats', StatsSchema);
export default Stats;
