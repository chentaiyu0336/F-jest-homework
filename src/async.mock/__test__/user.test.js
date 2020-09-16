import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({ data: "success" });
    const result = register(null, null);
    return expect(result).resolves.toBe("success");
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const result = register(null, null);
    return expect(result).rejects.toThrow("wrong username or password");
  });
});
