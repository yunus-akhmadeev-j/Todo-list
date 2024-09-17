import {createElement} from '../framework/render';


function createTaskInprocessTemplate() {
    return (
        `<div class="done">
                <ul><h3>Done</h3>
                    <li class="task3">Позвонить маме</li>
                    <li class="task3">Погладить кота</li>
                </ul>
            </div>`
      );
}


export default class TaskInprocess {
  getTemplate() {
    return createTaskInprocessTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
