import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Button component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="qqq" />);
        const instance = component.getInstance();//instance - экземпляр
        expect(instance.state.status).toBe("qqq");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="qqq" />);
        const instance = component.root;//instance - экземпляр
        let span = instance.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="qqq" />);
        const instance = component.root;//instance - экземпляр
        expect(()=>{
            let input = instance.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="qqq" />);
        const instance = component.root;//instance - экземпляр
        let span = instance.findByType("span");
        expect(span.children[0]).toBe("qqq");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="qqq" />);
        const instance = component.root;//instance - экземпляр
        let span = instance.findByType("span");
        span.props.onDoubleClick();
        let input = instance.findByType("input");
        expect(input.props.value).toBe("qqq");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="qqq" updateStatus={mockCallback} />);
        const instance = component.getInstance();//instance - экземпляр
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});