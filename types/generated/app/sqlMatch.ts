import { IMatch } from "./match";
import { TTeam } from "./player";

export interface ISqlMatch {
    date: string;
    place: string;
    team1: TTeam;
    team2: TTeam;
    result: string;
}