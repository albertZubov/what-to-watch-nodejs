import { DocumentType, types } from "@typegoose/typegoose";

import { inject, injectable } from "inversify";
import { Component } from "../../types/component.types.js";
import { LoggerInterface } from "../../common/logger/logger.interface";
import { FilmServiceInterface } from "./film-service.interface";
import { FilmEntity } from "./film.entity.js";
import createFilmDto from "./dto/create-film.dto";

@injectable()
export default class FilmService implements FilmServiceInterface {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.FilmModel)
    private readonly filmModel: types.ModelType<FilmEntity>
  ) {}

  public async create(dto: createFilmDto): Promise<DocumentType<FilmEntity>> {
    // TODO реализация на основе user.service
    // const film = new FilmEntity(dto);
    // this.logger.info(`New film created ${film.name}`);
    // return await this.filmModel.create(film);

    const film = await this.filmModel.create(dto);
    this.logger.info(`New film created ${film.name}`);
    return film;
  }
}
