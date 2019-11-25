import { UserController } from "../controller/UserController";
import { IRoute, IServer } from "../interfaces";
import { inject, Injectables } from "../inversify.config";
import { UserRoutes } from "../routes/user";

export class RouteConfig {
  public routes: IRoute[];

  public constructor(@inject(Injectables.Server) private server: IServer) {
    this.routes = [new UserRoutes(this.server, new UserController())];
  }
}
