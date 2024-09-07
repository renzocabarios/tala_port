import { Router } from 'express';

export interface IModel {
  _id?: string | any;
  deleted?: Boolean;
}

export interface IRoute {
  url: string;
  route: Router;
}

export type IRoutes = IRoute[];

export interface IQuery {
  page?: number;
  limit?: number;
  filter?: any;
  populate?: string;
}
