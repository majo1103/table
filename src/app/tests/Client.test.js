import { client } from "../Client";

test("login", () => {
  const user = "admin@server.pl";
  expect(client.login(user)).toBe(true);
});
