import TaskItem from './TaskItem';

export default function TaskList(props) {
  const {
    tasks,
    toggleDone,
    isDeleteMode,
    selectedIndexes,
    setSelectedIndexes,
    isEditMode,
    editingIndex,
    setEditingIndex,
    editedText,
    setEditedText,
    confirmEdit
  } = props;

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          toggleDone={toggleDone}
          isDeleteMode={isDeleteMode}
          selectedIndexes={selectedIndexes}
          setSelectedIndexes={setSelectedIndexes}
          isEditMode={isEditMode}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          editedText={editedText}
          setEditedText={setEditedText}
          confirmEdit={confirmEdit}
        />
      ))}
    </ul>
  );
}