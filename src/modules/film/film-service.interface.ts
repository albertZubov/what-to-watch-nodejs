import { DocumentType } from "@typegoose/typegoose";
import createFilmDto from "./dto/create-film.dto";
import { FilmEntity } from "./film.entity";

export interface FilmServiceInterface {
  create(dto: createFilmDto): Promise<DocumentType<FilmEntity>>;
  //   TODO сделать все методы
  //   edit(filmEdit: createFilmDto, id: number): Promise<DocumentType<FilmEntity>>;
  //   remove(id: number): Promise<DocumentType<FilmEntity>>;
  //   getList(quantity: number): Promise<DocumentType<FilmEntity[]>>;
  //   getListbyGenre(
  //     quantity: number,
  //     genre: string
  //   ): Promise<DocumentType<FilmEntity[]>>;
  //   getDetailedInformation(id: number): Promise<DocumentType<FilmEntity>>;
  //   getPromo(id: number): Promise<DocumentType<FilmEntity>>;
  //   createToView(id: number): Promise<DocumentType<FilmEntity>>;
  //   removeToView(id: number): Promise<DocumentType<FilmEntity>>;
}
