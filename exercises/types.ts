// PUSH //

type Grips = "overhand" | "underhand" | "neutral" | "narrow" | "wide";

type Action = "pull" | "push" | "press" | "curl" | "extension" | "row" | "hold";

type Equipment =
	| "barbell"
	| "dumbbell"
	| "kettlebell"
	| "bodyweight"
	| "cable"
	| "machine"
	| "band"
	| "plate"
	| "ball"
	| "ab-wheel"
	| "jump-rope"
	| "punching bag"
	| "pull-up bar"
	| "bench"
	| "box"
	| "chair"
	| "rack"
	| "sled"
	| "stairs"
	| "treadmill"
	| "wall"
	| "water"
	| "weight";

type Muscle =
	| "ankle"
	| "shin"
	| "calf"
	| "knee"
	| "quadricep"
	| "hamstring"
	| "glute"
	| "hip"
	| "upper back"
	| "middle back"
	| "lower back"
	| "abdomen"
	| "upper chest"
	| "middle chest"
	| "lower chest"
	| "front deltoid"
	| "side deltoid"
	| "rear deltoid"
	| "trapezius"
	| "forearm"
	| "biceps"
	| "triceps"
	| "wrist"
	| "neck";

type ExerciseType =
	| "compound"
	| "isolation"
	| "plyometric"
	| "cardio"
	| "balance"
	| "stretch"
	| "core"
	| "grip"
	| "bodyweight";

type ExerciseLevel = "beginner" | "intermediate" | "advanced";

type Speed = "slow" | "explosive" | "controlled";

type RangeOfMotion = "full" | "partial" | "half";

type Intensity = "low" | "normal" | "high" | "extreme"
interface ISet {
	equipment: Equipment;
	grip: Grips;
	action: Action;
	speed: Speed;
	rangeOfMotion: RangeOfMotion; 
	numReps: number;
	setIntensity: Intensity;
}

interface Session {
	mood: string;
	endTime: Date;
	startTime: Date;	
	sets: ISet[];
	sessionIntensity: Intensity;
}


