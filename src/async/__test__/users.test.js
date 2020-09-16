import axios from "axios";
import getUsers from "../users";

jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", () => {
    // TODO 13: add async test with manual mock
    axios.get.mockResolvedValue({
      data: { name: "Taiyu" },
    });
    const result = getUsers();
    return expect(result).resolves.toEqual({ name: "Taiyu" });
  });
});
