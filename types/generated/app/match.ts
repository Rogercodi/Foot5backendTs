import { TTeam } from "./player";

export interface IMatch {
    id?: number;
    date: string;
    place: string;
    team1?: any;
    team2?: any;
    result?: string;
    setDate (date: string): void;
    setPlace (place: string): void;
    setTeam1 (team1: TTeam): void;
    setTeam2 (team2: TTeam): void;
    setResult (result: string): void;
    getDate (): string;
    getPlace (): string;
    getTeam1 (): TTeam;
    getTeam2 (): TTeam;
    getResult (): string;
    getMatch (): IMatch;
}

