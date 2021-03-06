import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="allTasks">All Tasks</option>
    <option value="completedTasks">Completed Tasks</option>
    <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
  </select>
  <ul>
    <li (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness">{{currentTask.description}} {{currentTask.priority}}
      <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
      <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask, true)"/>
      <button (click)="editButtonClicked(currentTask)">Edit!</button>
    </li>
  </ul>
  `
})

export class TaskListComponent {

  filterByCompleteness: string = "incompleteTasks";
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      console.log("This task is done!");
    } else {
      console.log("This task is not done. Better get to work!");
    }
  }

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
   clickedTask.done = setCompleteness;
 }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
