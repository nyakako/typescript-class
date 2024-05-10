import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";

export default defineConfig({
	plugins: [react(), env({ prefix: "VITE", mountedPath: "process.env" })],
});
