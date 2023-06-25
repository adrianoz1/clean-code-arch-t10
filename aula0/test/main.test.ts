import { sum } from "../src/main"

test("Deve somar", function () {
  const result = sum(2, 2);
  expect(result).toBe(4);
})
