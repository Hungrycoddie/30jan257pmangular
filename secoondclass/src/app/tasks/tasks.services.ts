class TasksService {
 private tasks = [
    {
      id: '',
      userId: '',
      title: '',
      summary: '',
      dueDate: '',
    },
 ];
    
    getUserTask(userId: string) {
      return  this.tasks.filter((task) => task.userId === userId);
    }
    addTask(taskData: NewTaskData) {

    }