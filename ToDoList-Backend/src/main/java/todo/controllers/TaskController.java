package todo.controllers;

import todo.models.Task;
import todo.models.TaskDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
public class TaskController {
	  @Autowired
	  private TaskDao taskDao;


  @RequestMapping("/addTask")
  @ResponseBody
  public String add(String taskTitle, String taskDescription, String dueDate, String taskStatus) {
    Task task = null;
    try {
      task = new Task(taskTitle, taskDescription,dueDate, taskStatus);
      taskDao.save(task);
    }
    catch (Exception ex) {
      return "Error creating the user: " + ex.toString();
    }
    return "Task successfully created! (id = " + task.getTaskId() + ")";
  }

  @RequestMapping("/getAllTasks")
  @ResponseBody
  public List<Task> getAll() {

  return (List<Task>) taskDao.findAll();
  }

  @RequestMapping("/updateTask")
  @ResponseBody
  public String updateTask(long id, String taskTitle, String taskDescription, String dueDate, String taskStatus) {
    try {
      Task task = taskDao.findOne(id);
      task.setTaskTitle(taskTitle);
      task.setTaskDescription(taskDescription);
      task.setDueDate(dueDate);
      task.setTaskStatus(taskStatus);
      taskDao.save(task);
    }
    catch (Exception ex) {
      return "Error updating the task: " + ex.toString();
    }
    return "Task succesfully updated!";
  }


  
} // class UserController
