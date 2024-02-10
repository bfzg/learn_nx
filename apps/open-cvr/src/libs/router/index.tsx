import {Navigate, useRoutes} from "react-router-dom"
import { RouteObject } from "./interface"
import Login from "../../app/page/login/login"

export const rootRouter: RouteObject[] = [
	{
		path:"/",
		element:<Navigate to="/login" />
	},
	{
		path:"/login",
		element: <Login/>,
		meta:{
			title:"登录",
			icon:<span></span>,
			isShow:false,
		}
	}
]
