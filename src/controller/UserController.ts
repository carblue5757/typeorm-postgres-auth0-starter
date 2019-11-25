import { Server, IncomingMessage, ServerResponse } from "http";
import { User } from "../entity/User";

export class UserController {
  public constructor() {}

  public index = async (request, reply) => {
    try {
      console.log("Loading users from the database...");
      const users = await User.find();
      console.log("Loaded users: ", users);
      console.log(
        "Here you can setup and run express/koa/any other framework."
      );
      reply.code(200).send(users);
    } catch (error) {
      request.log.error(error);
      return reply.send(400);
    }
  };

  public addUser = async (request, reply) => {
    try {
      console.log("Inserting a new user into the database...");
      const user = new User();
      user.firstName = "Timber";
      user.lastName = "Saw";
      user.age = 25;
      await user.save();
      reply.send(200);
    } catch (error) {
      request.log.error(error);
      return reply.send(400);
    }
  };

  public deleteUser = async (request, reply) => {
    try {
      console.log("Inserting a new user into the database...");
      const user = await User.findOne({ id: request.params.id });
      let message = `User ${request.params.id} was not found`;
      let code = 404;
      if (user) {
        await User.remove(user);
        code = 200;
        message = `User ${request.params.id}, ${user.firstName} ${user.lastName}, was removed`;
      }
      reply.code(code).send({ message });
    } catch (error) {
      request.log.error(error);
      return reply.send(400);
    }
  };
}
