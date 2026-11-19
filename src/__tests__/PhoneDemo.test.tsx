import { describe, it, expect, vi, afterEach } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import PhoneDemo from "../components/demo/PhoneDemo";

const switchFor = (name: string) =>
    screen.getByRole("switch", { name: new RegExp(name) });

describe("PhoneDemo", () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    it("starts with two of three profiles active", () => {
        render(<PhoneDemo />);
        expect(screen.getByText("2 of 3 Active")).toBeInTheDocument();
        expect(switchFor("Games")).toHaveAttribute("aria-checked", "false");
    });

    it("activates a profile at once", () => {
        render(<PhoneDemo />);
        fireEvent.click(switchFor("Games"));
        expect(screen.getByText("All Shields Active")).toBeInTheDocument();
    });

    it("makes deactivating wait for the cooldown", () => {
        vi.useFakeTimers();
        render(<PhoneDemo />);

        fireEvent.click(switchFor("Video"));
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByRole("timer")).toHaveTextContent("00:05");
        // Still active, and no way to confirm yet.
        expect(screen.getByText("2 of 3 Active")).toBeInTheDocument();
        expect(
            screen.queryByRole("button", { name: "Deactivate" }),
        ).not.toBeInTheDocument();

        for (let second = 0; second < 5; second++) {
            act(() => {
                vi.advanceTimersByTime(1000);
            });
        }
        fireEvent.click(screen.getByRole("button", { name: "Deactivate" }));

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        expect(screen.getByText("1 of 3 Active")).toBeInTheDocument();
    });

    it("keeps the profile active when the cooldown is cancelled", () => {
        render(<PhoneDemo />);
        fireEvent.click(switchFor("Video"));
        fireEvent.click(screen.getByRole("button", { name: "Cancel" }));

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        expect(screen.getByText("2 of 3 Active")).toBeInTheDocument();
    });

    it("counts ticked tasks", () => {
        render(<PhoneDemo />);
        expect(screen.getByText(/1\/2 tasks/)).toBeInTheDocument();
        fireEvent.click(screen.getByRole("checkbox", { name: "Go for a run" }));
        expect(screen.getByText(/2\/2 tasks/)).toBeInTheDocument();
    });
});
