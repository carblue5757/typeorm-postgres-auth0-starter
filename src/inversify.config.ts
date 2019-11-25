import "reflect-metadata";

import {
  Container,
  decorate,
  inject as baseInject,
  injectable
} from "inversify";

export class Injectables {
  public static readonly Server = "Server";
  public static readonly RouteConfig = "RouteConfig";
}

export class InversifyConfig {
  public static readonly container: Container = new Container();

  public static decorateAndBindClass<InterfaceType>(
    theInjectable: symbol | string,
    theClass: any,
    singleton: boolean = false
  ) {
    decorate(injectable(), theClass);
    if (singleton) {
      InversifyConfig.container
        .bind<InterfaceType>(theInjectable)
        .to(theClass)
        .inSingletonScope();
    } else {
      InversifyConfig.container.bind<InterfaceType>(theInjectable).to(theClass);
    }
  }
}

export function inject<K extends keyof typeof Injectables>(
  serviceIdentifier: K
): (target: any, targetKey: string, index?: number | undefined) => void {
  return baseInject(serviceIdentifier);
}
