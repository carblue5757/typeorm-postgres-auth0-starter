import * as fastify from "fastify";
import * as http from "http";
import { RouteConfig } from "../config/RouteConfig";
import { HttpMethod, IServer } from "../interfaces";

export class FastifyServer implements IServer {
  public server: fastify.FastifyInstance;
  private httpServer: http.Server;

  public constructor() {
    this.server = fastify();
  }

  public async start(routeConfig: RouteConfig) {
    routeConfig.routes.forEach(route => route.registerRoute());
    await this.server.listen(3000, "127.0.0.1");
  }

  public stop(): void {
    // do nothing for now
  }

  public registerRoute(
    method: HttpMethod,
    path: any,
    ...handlers: any[]
  ): void {
    const prefix = `${path}`;

    switch (method) {
      case HttpMethod.GET:
        this.server.get(prefix, {}, ...handlers);
        break;
      case HttpMethod.POST:
        this.server.post(prefix, {}, ...handlers);
        break;
      case HttpMethod.PATCH:
        this.server.patch(prefix, {}, ...handlers);
        break;
      case HttpMethod.PUT:
        this.server.put(prefix, {}, ...handlers);
        break;
      case HttpMethod.DELETE:
        this.server.delete(prefix, {}, ...handlers);
        break;
      default:
    }
  }

  private afterListen = (): void => {
    console.log(
      "Server start",
      `App listening on PORT 3000 @ ${new Date().toLocaleString()}`
    );
  };
}
