import { LitElement } from 'lit';
declare type ToDoItem = {
    text: string;
    completed: boolean;
};
export declare class ToDoList extends LitElement {
    static styles: import("lit").CSSResult;
    listItems: {
        text: string;
        completed: boolean;
    }[];
    hideCompleted: boolean;
    render(): import("lit-html").TemplateResult<1>;
    toggleCompleted(item: ToDoItem): void;
    setHideCompleted(e: Event): void;
    input: HTMLInputElement;
    addToDo(): void;
}
export {};
//# sourceMappingURL=todo-list.d.ts.map