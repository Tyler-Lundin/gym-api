

interface IUser {
	username: string;
	email: string;
	password?: string;
    stats: IStats; 
	logs: ILogs;
}

interface IStats {
	weight: number;
	height: number;
	age: number;
}

interface ILogs {
	food: IFood[];
	exercise: IExercise[];
	stretch: IStretch[];
	sleep: ISleep[];
}

interface IFood {
	name: string;
	calories: number;
	protein: number;
	carbs: number;
	fat: number;
}

interface IExercise {
	name: string;










