import { Injectables, InversifyConfig } from "../inversify.config";
import { RouteConfig } from "./RouteConfig";
import { FastifyServer } from "../server/FastifyServer";

// Server
InversifyConfig.decorateAndBindClass<FastifyServer>(
  Injectables.Server,
  FastifyServer,
  true
);

// Routes
InversifyConfig.decorateAndBindClass<RouteConfig>(
  Injectables.RouteConfig,
  RouteConfig,
  true
);
