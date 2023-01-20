import styled from 'styled-components/native'
import CheckBox from 'expo-checkbox'

export const TasksContainer = styled.FlatList`
  max-width: 100%;
`
export const NoTasks = styled.View`
  flex: 1;
  width: auto;
  align-items: center;
  //margin-top: 48px;
  border-top-color: ${(props) => props.theme['gray-400']};
  border-top-width: 1px;
  height: 208px;
  padding: 48px 0;
`
export const Clipboard = styled.Image`
  margin-bottom: 16px;
`
export const NoTasksTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme['gray-300']};
`
export const NoTasksDescription = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme['gray-300']};
`
export const Task = styled.View`
  min-height: 64px;
  background-color: ${(props) => props.theme['gray-500']};
  border-color: ${(props) => props.theme['gray-400']};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  padding: 20px 12px;

  text-align: right;
`
export const TaskCheckbox = styled(CheckBox)`
  border-radius: 999px;
  border-color: ${(props) => props.theme.blue};
`
export const TaskText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme['gray-100']};
  max-width: 235px;
`

export const FinishedTaskText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme['gray-300']};
  max-width: 235px;
`
export const DeleteTask = styled.TouchableOpacity`
  margin-right: 8px;
`
export const TaskContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 8px;
`
