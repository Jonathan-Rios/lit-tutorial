var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
let ToDoList = class ToDoList extends LitElement {
    constructor() {
        super(...arguments);
        this.listItems = [
            { text: 'Make to-do list', completed: true },
            { text: 'Complete Lit tutorial', completed: false }
        ];
        this.hideCompleted = false;
    }
    render() {
        const items = this.hideCompleted
            ? this.listItems.filter((item) => !item.completed)
            : this.listItems;
        const todos = html `
      <ul>
        ${items.map((item) => html `
              <li
                  class=${item.completed ? 'completed' : ''}
                  @click=${() => this.toggleCompleted(item)}>
                ${item.text}
              </li>`)}
      </ul>
    `;
        const caughtUpMessage = html `
      <p>
      You're all caught up!
      </p>
    `;
        const todosOrMessage = items.length > 0
            ? todos
            : caughtUpMessage;
        return html `
      <h2>To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
      <br>
      <label>
        <input type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}>
        Hide completed
      </label>
    `;
    }
    toggleCompleted(item) {
        item.completed = !item.completed;
        this.requestUpdate();
    }
    setHideCompleted(e) {
        this.hideCompleted = e.target.checked;
    }
    addToDo() {
        this.listItems.push({ text: this.input.value, completed: false });
        this.input.value = '';
        this.requestUpdate();
    }
};
ToDoList.styles = css `
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;
__decorate([
    property({ attribute: false })
], ToDoList.prototype, "listItems", void 0);
__decorate([
    property()
], ToDoList.prototype, "hideCompleted", void 0);
__decorate([
    query('#newitem')
], ToDoList.prototype, "input", void 0);
ToDoList = __decorate([
    customElement('todo-list')
], ToDoList);
export { ToDoList };
