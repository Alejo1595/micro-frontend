import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelLeftComponent {
  public newTask = signal('');
  public listTask = signal<string[]>(['Task 1', 'Task 2', 'Task 3']);

  public addTask = () => {
    if (this.newTask().trim().length > 2) {
      this.listTask.update((tasks) => [...tasks, this.newTask()]);
      this.newTask.set('');
    }
  };

  public changesFirstTask = () => {
    // this.listTask[0] = `${this.listTask[0]} (changed) ${new Date().getTime()}`;
    this.listTask.update((tasks) => {
      tasks[0] = `${tasks[0]} (changed) ${new Date().getTime()}`;
      return tasks;
    });
  };

  public check = () => {
    console.log('Called in panel left component');
    return true;
  };
}
