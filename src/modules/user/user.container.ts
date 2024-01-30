import { Container } from "inversify";
import { UserServiceInterface } from "./user-service.interface";
import { Component } from "../../types/component.types.js";
import UserService from "./user.service.js";
import { types } from "@typegoose/typegoose";
import { UserEntity, UserModel } from "./user.entity.js";

const userContainer = new Container();

userContainer
  .bind<UserServiceInterface>(Component.UserServiceInterface)
  .to(UserService)
  .inSingletonScope();
userContainer
  .bind<types.ModelType<UserEntity>>(Component.UserModel)
  .toConstantValue(UserModel);
export { userContainer };
