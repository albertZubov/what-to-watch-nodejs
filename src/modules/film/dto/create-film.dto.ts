import { FilmGenre, User } from "../../../types/film.type";

export default class createFilmDto {
  public name!: string;
  public description!: string;
  public datePublic!: string;
  public genre!: FilmGenre;
  public yearRelease!: number;
  public rating!: number;
  public previewSrc!: string;
  public videoSrc!: string;
  public actors!: string[];
  public director!: string;
  public duration!: number;
  public quantityComments!: number;
  public user!: User;
  public poster!: string;
  public backgroundImage!: string;
  public backgroundColor!: string;
}
