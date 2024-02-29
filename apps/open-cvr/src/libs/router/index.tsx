import { lazy } from "react"
import {Navigate, useRoutes} from "react-router-dom"
import { RouteObject } from "./interface"
import Login from "../../app/page/login/view"
import lazyLoad from "../utils/lazyLoad"

export const rootRouter: RouteObject[] = [
	{
		path:"/",
		element:<Navigate to="/home" />
	},
	{
		path:"/login",
		element: <Login/>,
		meta:{
			title:"登录",
			icon:<span></span>,
			isShow:false,
			key: "login"
		}
	},
	{
		path:"/home",
		element: lazyLoad(lazy(()=>import("../../app/page/home/view"))),
		meta:{
			title:"首页",
			icon:<span></span>,
			isShow:false,
			key: "home"
		}
	}
]

const Router = ()=>{
	const routes = useRoutes(rootRouter);
	return routes;
}

export default Router;
