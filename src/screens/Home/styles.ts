import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${(props) => props.theme['gray-600']};
  align-items: center;
`

export const Content = styled.View`
  padding: 0 24px;
  display: flex;
`

export const TasksHeader = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  align-items: flex-start;
`
export const CreatedTasks = styled.View`
  color: ${(props) => props.theme.blue};
  font-family: ${(props) => props.theme.fonts.bold};
  align-items: center;
  flex-direction: row;
  min-width: 20px;
`

export const FinishedTasks = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export const TaskCount = styled.View`
  min-width: 25px;
  min-height: 19px;
  border-radius: 999px;
  background-color: ${(props) => props.theme['gray-400']};
  align-items: center;
  padding: 2px 8px;
`
export const CreatedTasksText = styled.Text`
  color: ${(props) => props.theme.blue};
  font-family: ${(props) => props.theme.fonts.bold};
  margin-right: 8px;
`
export const TaskCountText = styled.Text`
  color: #fff;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 12px;
`
export const FinishedTasksText = styled.Text`
  color: ${(props) => props.theme.purple};
  font-family: ${(props) => props.theme.fonts.bold};
  margin-right: 8px;
`
