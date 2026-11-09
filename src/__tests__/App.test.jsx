import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { App } from "../App";

test("タイトルが表示されている", async () => {
  render(<App />);
  expect(await screen.findByText("パイプライン練習")).toBeInTheDocument();
});
