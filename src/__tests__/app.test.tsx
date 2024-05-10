﻿import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { Todo } from "../domain/todo";

const mockGetAllTodos = jest
	.fn()
	.mockResolvedValue([
		new Todo("1,", "title1", false, "2024-02-28"),
		new Todo("2,", "title2", false, "2024-02-28"),
		new Todo("3,", "title3", false, "2024-02-28"),
		new Todo("4,", "title4", false, "2024-02-28"),
	]);

jest.mock("../lib/todo.ts", () => {
	return {
		GetAllTodos: () => mockGetAllTodos(),
	};
});

describe("App", () => {
	test("タイトルがあること", async () => {
		render(<App />);
		await waitFor(() => screen.getAllByTestId("table"));
		const title = screen.getByTestId("title");

		expect(title).toBeInTheDocument();
	});

	test("TODOが4つ表示されること", async () => {
		render(<App />);
		await waitFor(() => screen.getAllByTestId("table"));
		const todos = screen.getByTestId("table").querySelectorAll("tr");

		expect(todos.length - 1).toBe(4);
	});
});
