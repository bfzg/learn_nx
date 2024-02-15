import React from 'react';
import { Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];


export interface MenuBarLibProps {
	routerList:RouteObject[]
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path: string;
	meta?: MetaProps;
	isLink?: string;
}

export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
	icon?: React.ReactNode;
	isShow:boolean;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export function MenuBar(props: MenuBarLibProps) {

	//处理 菜单
	const deepLoopMenu = (menuList: RouteObject[],newArr: MenuItem[] = []) =>{
		menuList.forEach((item:RouteObject)=>{
			if(item.meta?.isShow) return
			if(!item.children?.length) return newArr.push(getItem(item.meta?.title,item.path,item.meta?.icon))
			newArr.push(getItem(item.meta?.title, item.path, item.meta?.icon, deepLoopMenu(item.children)));
		})
		return newArr;
	}

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

	//TODO 这里数据items 是 deepLoopMenu 遍历后的值 可以这样写 setMenuList(deepLoopFloat(data));

  return (
  <Menu
    onClick={onClick}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={items}
  />
  );
}
