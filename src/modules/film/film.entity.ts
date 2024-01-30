import mongoose from "mongoose";
import { Film, FilmGenre, User } from "../../types/film.type.js";
import typegoose, {
  defaultClasses,
  getModelForClass,
  modelOptions,
} from "@typegoose/typegoose";

const { prop } = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: "films",
  },
})
export class FilmEntity extends defaultClasses.TimeStamps implements Film {
  constructor(data: Film) {
    super();

    this.name = data.name;
    this.description = data.description;
    this.datePublic = data.datePublic;
    this.genre = data.genre;
    this.yearRelease = data.yearRelease;
    this.rating = data.rating;
    this.previewSrc = data.previewSrc;
    this.videoSrc = data.videoSrc;
    this.actors = data.actors;
    this.director = data.director;
    this.duration = data.duration;
    this.quantityComments = data.quantityComments;
    this.user = data.user;
    this.poster = data.poster;
    this.backgroundImage = data.backgroundImage;
    this.backgroundColor = data.backgroundColor;
  }

  @prop({
    minLength: [2, "Min length is 2"],
    maxLength: [100, "Max length is 100"],
    requred: true,
  })
  public name!: string;

  @prop({
    minLength: [20, "Min length is 20"],
    maxLength: [1024, "Max length is 1024"],
    requred: true,
  })
  public description!: string;

  @prop({
    requred: true,
    default: "",
  })
  public datePublic!: string;
  //   TODO По умолчанию — текущая дата.

  @prop({
    requred: true,
    enum: FilmGenre,
  })
  public genre!: FilmGenre;

  @prop({
    requred: true,
  })
  public yearRelease!: number;

  @prop({
    requred: true,
    default: 0,
  })
  public rating!: number;

  @prop({
    requred: true,
  })
  public previewSrc!: string;

  @prop({
    requred: true,
  })
  public videoSrc!: string;

  @prop({
    type: mongoose.Schema.Types.Mixed,
    requred: true,
  })
  public actors!: string[];

  @prop({
    minLength: [2, "Min length is 2"],
    maxLength: [50, "Max length is 50"],
    requred: true,
  })
  public director!: string;

  @prop({
    requred: true,
  })
  public duration!: number;

  @prop({})
  public quantityComments!: number;

  @prop({
    requred: true,
  })
  public user!: User;

  @prop({
    requred: true,
  })
  public poster!: string;

  @prop({
    requred: true,
  })
  public backgroundImage!: string;

  @prop({
    requred: true,
  })
  public backgroundColor!: string;
}

export const FilmModel = getModelForClass(FilmEntity);
