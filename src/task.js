export default function Task(description, index, completed = false) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}
