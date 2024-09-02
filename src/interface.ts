export interface createUserTs {
	name: string;
	email: string;
	mobile: string;
	password: string;
	userType: string;
}

export interface updateUsersTs extends createUserTs {
	userId: number;
}

export interface checkUserTs {
	email?: string;
	mobile?: string;
	password: string;
}

export interface getUserModel {
	email?: string;
	mobile?: string;
}

export interface getUserTs extends getUserModel {
	password: string;
}

export interface updateUserTs {
	email?: string;
	mobile?: string;
	password?: string;
	userId?: number;
	name?: string;
}

export interface returnUserByNameOrPhoneNumber {
	id: number;
	email: string;
	phoneNumber: string;
}

export interface returnByNameC {
	result: returnUserByNameOrPhoneNumber[];
	total_count: number;
}

export interface searchTextLimitTs {
	searchText?: string;
	page: number;
	pageSize: number;
}

export interface returnId {
	id: number;
}

export interface returnIdPass {
	id: number;
	password: string;
}

export interface returnById {
	userType: string;
	id: number;
	name: string;
	email: string;
	mobile: string;
}

export interface createMenuI {
	itemName: string;
	price: string;
	userId: number;
}
