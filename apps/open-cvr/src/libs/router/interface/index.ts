
export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}

export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	key?: string;
	title?: string;
	icon?: React.ReactNode;
	isShow:boolean;
}
