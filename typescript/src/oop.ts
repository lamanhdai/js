console.log('%c 1. class', 'background: lavender');
enum TaskState { Created = 100, Active, InActive, Proccess, Finish }
interface TaskInterface {
  id: number;
  name: string;
  state?: TaskState;
}
export class Task {
  private _point: number;
  public static username: string = 'anh dai';
  task: TaskInterface;
  constructor(task: TaskInterface){
    this.task = task;
  }
  public get point(): number {
    return this._point
  }
  public set point(val: number) {
    this._point = val
  }
  showTaskInfo(){
    console.log(`${this.task.id} - ${this.task.name} - ${this.task.state}`);
  }
}