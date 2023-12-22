import { User } from "../../types/film.type";
import typegoose, {
  defaultClasses,
  getModelForClass,
  modelOptions,
} from "@typegoose/typegoose";
import { createSHA256 } from "../../utils/common";

const { prop } = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: "users",
  },
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();

    this.email = data.email;
    this.avatarPath = data.avatarPath;
    this.name = data.name;
  }

  @prop({
    unique: true,
    match: [
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
      "Email is incorrect",
    ],
    required: true,
  })
  public email!: string;

  @prop({})
  public avatarPath!: string;
  //   TODO Изображение пользователя в формате .jpg или .png.

  @prop({
    minLength: [1, "Min length is 1"],
    maxLength: [15, "Max length is 15"],
    requred: true,
  })
  public name!: string;

  @prop({
    minLength: [6, "Min length is 1"],
    maxLength: [12, "Max length is 15"],
    requred: true,
  })
  public password!: string;
  // TODO поле password должно быть приватным

  /**
   * setPassword
   */
  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  /**
   * getPassword
   */
  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
