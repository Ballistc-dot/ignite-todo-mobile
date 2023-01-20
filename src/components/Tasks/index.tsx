import {
  TasksContainer,
  NoTasks,
  Clipboard,
  NoTasksTitle,
  NoTasksDescription,
  Task,
  TaskCheckbox,
  TaskText,
  FinishedTaskText,
  DeleteTask,
  TaskContent,
} from './styles'
import { useTheme } from 'styled-components'
import clipboard from '../../../assets/clipboard.png'

import { Trash } from 'phosphor-react-native'
import { useDispatch } from 'react-redux'
import {
  changeTaskCompletedState,
  removeTask,
} from '../../../store/features/task'

interface ITask {
  content: string
  id: string
  isCompleted: boolean
}
type ITasks = {
  tasks?: ITask[]
}

export function Tasks({ tasks }: ITasks) {
  const theme = useTheme()
  const dispatch = useDispatch()

  console.log(tasks)

  function handleSetChecked(id: string, checkedState: boolean) {
    dispatch(changeTaskCompletedState({ id, checkedState }))
  }

  function deleteTask(id: string) {
    dispatch(removeTask(id))
  }
  return (
    <>
      {tasks?.length ? (
        <TasksContainer
          data={tasks}
          keyExtractor={(task: ITask) => task.id}
          renderItem={({ item }: any) => {
            console.log(item)
            return (
              <Task>
                <TaskCheckbox
                  disabled={false}
                  value={item.isCompleted}
                  onValueChange={(newValue) =>
                    handleSetChecked(item.id, newValue)
                  }
                  color={item.isCompleted ? theme.purple : theme.blue}
                />
                <TaskContent>
                  {item.isCompleted ? (
                    <FinishedTaskText
                      style={{ textDecorationLine: 'line-through' }}
                    >
                      {item.content}
                    </FinishedTaskText>
                  ) : (
                    <TaskText>{item.content}</TaskText>
                  )}
                  <DeleteTask onPress={() => deleteTask(item.id)}>
                    <Trash size={14} weight="bold" color={theme['gray-300']} />
                  </DeleteTask>
                </TaskContent>
              </Task>
            )
          }}
        />
      ) : (
        <NoTasks>
          <Clipboard source={clipboard} />
          <NoTasksTitle>Você ainda não tem tarefas cadastradas</NoTasksTitle>
          <NoTasksDescription>
            Crie tarefas e organize seus itens a fazer
          </NoTasksDescription>
        </NoTasks>
      )}
    </>
  )
}
