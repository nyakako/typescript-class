import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	test("タイトルがあること", async () => {
		render(<App />);
		await waitFor(() => screen.getAllByTestId("table"));
		const title = screen.getByTestId("title");

		expect(title).toBeInTheDocument();
	});
});
