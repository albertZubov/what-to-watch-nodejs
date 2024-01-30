import { Container } from "inversify";
import { Component } from "../../types/component.types.js";
import { types } from "@typegoose/typegoose";
import { FilmServiceInterface } from "./film-service.interface";
import FilmService from "./film.service.js";
import { FilmEntity, FilmModel } from "./film.entity.js";

const filmContainer = new Container();

filmContainer
  .bind<FilmServiceInterface>(Component.FilmServiceInterface)
  .to(FilmService)
  .inSingletonScope();
filmContainer
  .bind<types.ModelType<FilmEntity>>(Component.FilmModel)
  .toConstantValue(FilmModel);

export { filmContainer };
