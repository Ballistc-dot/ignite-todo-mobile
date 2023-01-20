import { Header } from '../../components/Header'
import { StatusBar } from 'expo-status-bar'
import {
  Container,
  Content,
  CreatedTasks,
  FinishedTasks,
  TaskCount,
  TasksHeader,
  CreatedTasksText,
  TaskCountText,
  FinishedTasksText,
} from './styles'
import { NewTask } from '../../components/NewTask'
import { Tasks } from '../../components/Tasks'
import { useSelector } from 'react-redux'

interface ITask {
  content: string
  id: string
  isCompleted: boolean
}

export function Home() {
  const tasks: ITask[] | undefined = useSelector((state: any) => state.task)

  const totalTasks = tasks?.length
  const completedTasks = tasks?.filter(
    (task) => task?.isCompleted === true,
  ).length

  return (
    <Container>
      <StatusBar style="light" />
      <Header />
      <Content>
        <NewTask />
        <TasksHeader>
          <CreatedTasks>
            <CreatedTasksText>Criadas</CreatedTasksText>
            <TaskCount>
              <TaskCountText>{totalTasks}</TaskCountText>
            </TaskCount>
          </CreatedTasks>
          <FinishedTasks>
            <FinishedTasksText>Concluídas</FinishedTasksText>
            <TaskCount>
              <TaskCountText>{completedTasks}</TaskCountText>
            </TaskCount>
          </FinishedTasks>
        </TasksHeader>
        <Tasks tasks={tasks} />
      </Content>
    </Container>
  )
}
