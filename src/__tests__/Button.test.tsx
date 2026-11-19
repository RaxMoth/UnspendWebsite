import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Button from "../components/UI/Button";

describe("Button", () => {
    it("renders its label", () => {
        render(<Button>Click me</Button>);
        expect(
            screen.getByRole("button", { name: /click me/i }),
        ).toBeInTheDocument();
    });

    it("calls onClick when clicked", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();
        render(<Button onClick={handleClick}>Click me</Button>);

        await user.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledOnce();
    });

    it("is filled in the brand red by default and outlined as secondary", () => {
        const { rerender } = render(<Button>Primary</Button>);
        expect(screen.getByRole("button")).toHaveClass("bg-accent-fill");

        rerender(<Button variant="secondary">Secondary</Button>);
        expect(screen.getByRole("button")).toHaveClass("border", "bg-surface");
    });

    it("keeps the app's minimum tap target", () => {
        render(<Button>Tap</Button>);
        expect(screen.getByRole("button")).toHaveClass("min-h-tap");
    });

    it("is disabled when asked", () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("is a link when it has somewhere to go", () => {
        render(
            <MemoryRouter>
                <Button to="/features">Features</Button>
                <Button href="mailto:someone@example.com">Mail</Button>
            </MemoryRouter>,
        );
        expect(screen.getByRole("link", { name: "Features" })).toHaveAttribute(
            "href",
            "/features",
        );
        expect(screen.getByRole("link", { name: "Mail" })).toHaveAttribute(
            "href",
            "mailto:someone@example.com",
        );
    });
});
