import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'DASHBOARD',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'clients',
    name: 'Clients',
    type: 'link',
    icon: 'supervisor_account'
  },
  {
    state: 'controller',
    name: 'Controllers',
    type: 'link',
    icon: 'control_point_duplicate'
  },
  {
    state: 'action',
    name: 'Actions',
    type: 'link',
    icon: 'assignment'
  },
  {
    state: 'settings',
    name: 'Settings',
    type: 'link',
    icon: 'settings'
  },
  // {
  //   state: 'session',
  //   name: 'SESSIONS',
  //   type: 'sub',
  //   icon: 'face',
  //   children: [
  //     {state: 'login', name: 'LOGIN'},
  //   ]
  // }

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
