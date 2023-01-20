import { Container, NewTaskButton, NewTaskInput } from './styles'
import { PlusCircle } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import { addTask } from '../../../store/features/task'
import { useDispatch } from 'react-redux'

export function NewTask() {
  const theme = useTheme()
  const [taskInput, setTaskInput] = useState('')
  const dispatch = useDispatch()

  function handleCreateNewTask() {
    const task = {
      id: String(Math.random()),
      content: taskInput,
      isCompleted: false,
    }
    dispatch(addTask(task))
  }

  return (
    <Container>
      <NewTaskInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme['gray-300']}
        value={taskInput}
        onChangeText={setTaskInput}
      />
      <NewTaskButton onPress={handleCreateNewTask}>
        <PlusCircle size={24} color={theme['gray-100']} />
      </NewTaskButton>
    </Container>
  )
}
