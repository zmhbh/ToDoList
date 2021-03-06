package todo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 * An entity User composed by three fields (id, email, name). The Entity
 * annotation indicates that this class is a JPA entity. The Table annotation
 * specifies the name for the table in the db.
 *
 * @author netgloo
 */
@Entity
@Table(name = "tasks")
public class Task {

	// ------------------------
	// PRIVATE FIELDS
	// ------------------------

	// An autogenerated id (unique for each user in the db)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long taskId;

	// task title
	@NotNull
	private String taskTitle;

	// task description
	@NotNull
	private String taskDescription;

	// dueDate
	@NotNull
	private String dueDate;

	// task status
	@NotNull
	private String taskStatus;

	// ------------------------
	// PUBLIC METHODS
	// ------------------------

	public Task() {
	}

	public Task(long taskId) {
		this.taskId = taskId;
	}

	public Task(String taskTitle, String taskDescription, String dueDate,
			String taskStatus) {
		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.dueDate = dueDate;
		this.taskStatus = taskStatus;
	}

	// Getter and setter methods

	public long getTaskId() {
		return taskId;
	}

	public void setTaskId(long value) {
		this.taskId = value;
	}

	public String getTaskTitle() {
		return taskTitle;
	}

	public void setTaskTitle(String value) {
		this.taskTitle = value;
	}

	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String value) {
		this.taskDescription = value;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String value) {
		this.dueDate = value;
	}

	public String getTaskStatus() {
		return taskStatus;
	}

	public void setTaskStatus(String value) {
		this.taskStatus = value;
	}

} // class Task
