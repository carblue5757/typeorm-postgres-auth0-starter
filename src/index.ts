import "./config/InversifyBinder";
import "reflect-metadata";
import { createConnection, ConnectionOptions } from "typeorm";
import { User } from "./entity/User";
import { Injectables, InversifyConfig } from "./inversify.config";
import { RouteConfig } from "./config/RouteConfig";
import { FastifyServer } from "./server/FastifyServer";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 54320,
  username: "postgres",
  database: "postgres",
  entities: [User],
  synchronize: true
};
createConnection(config)
  .then(() => {
    const routeConfig = InversifyConfig.container.get<RouteConfig>(
      Injectables.RouteConfig
    );

    const server = InversifyConfig.container.get<FastifyServer>(
      Injectables.Server
    );

    server.start(routeConfig);
  })
  .catch(error => console.log(error));
