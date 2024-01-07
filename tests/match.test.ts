import { setupStrapi, stopStrapi } from "./helpers/strapi";
import { Match } from "../repositories/match";

beforeAll(async () => {
  await setupStrapi(); // singleton so it can be called many times
});

afterAll(async () => {
  await stopStrapi();
});

describe("Match", () => {
  const match = new Match({
    date: "2020-10-10",
    place: "place",
    team1: [],
    team2: [],
    result: "result",
  });

  test("should be typeof Match", () => {
    expect(match).toBeInstanceOf(Match);
  });

  test('should have date "2020-10-10"', () => {
    expect(match.getDate()).toBe("2020-10-10");
  });

  test('should have place "place"', () => {
    expect(match.place).toBe("place");
  });

  test('should set and return team1', () => {
    let player1 = { 
      name: "team1",
      position: "position",
      number: 1,
      left: '10',
      top: '10',
    }

    match.setTeam1([player1])
    expect(match.getTeam1()).toEqual([player1]);
  })

  
});
