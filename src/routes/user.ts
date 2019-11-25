import * as fp from "fastify-plugin";
import { UserController } from "../controller/UserController";
import { IRoute } from "../interfaces/IRoute";
import { HttpMethod, IServer } from "../interfaces/IServer";

export class UserRoutes implements IRoute {
  public constructor(
    private server: IServer,
    private userController: UserController
  ) {}

  public registerRoute(): void {
    this.server.registerRoute(
      HttpMethod.GET,
      "/user",
      this.userController.index
    );
    this.server.registerRoute(
      HttpMethod.POST,
      "/user",
      this.userController.addUser
    );
    this.server.registerRoute(
      HttpMethod.DELETE,
      "/user/:id",
      this.userController.deleteUser
    );
  }
}
