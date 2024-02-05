
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];


export interface MenuBarLibProps {}

export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
	icon?: React.ReactNode;
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

export function MenuBarLib(props: MenuBarLibProps) {

	//处理 菜单
	const deepLoopMenu = (menuList: RouteObject[],newArr: MenuItem[] = []) =>{
		menuList.forEach((item:RouteObject)=>{
			if(!item.children?.length) return newArr.push(getItem(item.meta?.title,item.path,item.meta?.icon))
			newArr.push(getItem(item.meta?.title, item.path, item.meta?.icon, deepLoopMenu(item.children)));
		})
		return newArr;
	}

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

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
