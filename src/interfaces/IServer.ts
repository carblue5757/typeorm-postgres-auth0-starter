import { RouteConfig } from "../config/RouteConfig";

export interface IServer {
  start(routeConfig: RouteConfig): void;

  stop(): void;

  registerRoute(method: HttpMethod, path: any, ...handlers: any): void;
}

export enum HttpMethod {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE
}
