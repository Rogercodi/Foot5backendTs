import { IMatch } from "../types/generated/app/match";
import { TTeam } from "../types/generated/app/player";
import { ISqlMatch } from "../types/generated/app/sqlMatch";

export class Match implements IMatch {
  id?: number;
  date: string;
  place: string;
  team1?: any;
  team2?: any;
  result?: string;

  constructor(sqlMatch: ISqlMatch) {
    this.date = sqlMatch.date;
    this.place = sqlMatch.place;
    this.team1 = sqlMatch.team1;
    this.team2 = sqlMatch.team2;
    this.result = sqlMatch.result;
  }

  setDate(date: string) {
    this.date = date;
  }

  setPlace(place: string) {
    this.place = place;
  }

  setTeam1(team1: TTeam) {
    this.team1 = team1;
  }

  setTeam2(team2: TTeam) {
    this.team2 = team2;
  }

  setResult(result: string) {
    this.result = result;
  }

  getDate(): string {
    return this.date;
  }

  getPlace(): string {
    return this.place;
  }

  getTeam1(): TTeam {
    return this.team1;
  }

  getTeam2(): TTeam {
    return this.team2;
  }

  getResult(): string {
    return this.result;
  }

  getMatch(): IMatch {
    return this;
  }
}
