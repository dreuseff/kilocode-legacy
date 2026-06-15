import { describe, expect, it } from "vitest"

import { buildDocLink } from "@/utils/docLinks"

const root = "https://github.com/Kilo-Org/kilocode-legacy/blob/main/docs/legacy-ides"

describe("buildDocLink", () => {
	it("maps the documentation root to the archive index", () => {
		expect(buildDocLink("", "welcome")).toBe(`${root}/README.md`)
	})

	it("maps provider routes to provider Markdown files", () => {
		expect(buildDocLink("providers/anthropic", "provider_docs")).toBe(`${root}/ai-providers/anthropic.md`)
		expect(buildDocLink("providers/openai-codex", "provider_docs")).toBe(
			`${root}/ai-providers/openai-chatgpt-plus-pro.md`,
		)
	})

	it("maps historical aliases to their archive pages", () => {
		expect(buildDocLink("/basic-usage/using-modes", "tips")).toBe(`${root}/code-with-ai/agents/using-agents.md`)
		expect(buildDocLink("troubleshooting/shell-integration/", "error_tooltip")).toBe(
			`${root}/automate/extending/shell-integration.md`,
		)
	})

	it("preserves fragments after route mapping", () => {
		expect(buildDocLink("features/shell-integration#terminal-output-limit", "terminal_settings")).toBe(
			`${root}/automate/extending/shell-integration.md#terminal-output-limit`,
		)
	})
})
