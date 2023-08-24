import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoWrapper from "../components/TodoWrapper";

describe("TodoWrapper Component", () => {
  it("Renders the TotoWrapper component without any error", () => {
    render(<TodoWrapper />);
  });

  it("Adds new Todo", () => {
    render(<TodoWrapper />);

    const todoInput = screen.getAllByPlaceholderText("Add Todo");
    console.log(todoInput);

    const addButton = screen.getByRole("button", { name: "Add Task" });

    fireEvent.click(addButton);
  });
});
