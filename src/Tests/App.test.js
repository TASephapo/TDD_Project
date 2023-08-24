import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoWrapper from "../components/TodoWrapper";

test("TodoWrapper Component", () => {
  render(<TodoWrapper />);
});
