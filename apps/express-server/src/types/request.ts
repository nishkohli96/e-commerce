export interface RequestBody {
	fullName: string;
	age: number;
	city?: string;
}

export interface ResponseBody {
	message: string;
	data?: any;
}
