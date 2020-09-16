import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();
let vaccineTest;

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
  vaccineTest = new VaccineTest();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    vaccineTest.inject();
    expect(mockAcceptInjection).toHaveBeenCalledTimes(1);
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    const expectResult = "Vaccine Test Success";
    mockGetHasAntibodies.mockReturnValue(true);
    expect(vaccineTest.test()).toEqual(expectResult);
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    const expectResult = "Vaccine Test Failed";
    mockGetHasAntibodies.mockReturnValue(false);
    expect(vaccineTest.test()).toEqual(expectResult);
  });
});
