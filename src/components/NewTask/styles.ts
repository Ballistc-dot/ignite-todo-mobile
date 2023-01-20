import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  margin-top: -30px;
  width: 327px;
`
export const NewTaskInput = styled.TextInput`
  background-color: ${(props) => props.theme['gray-500']};
  height: 54px;
  width: 271px;
  border-radius: 6px;
  padding: 16px;
  color: ${(props) => props.theme['gray-100']};
`
export const NewTaskButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme['blue-dark']};
  width: 52px;
  height: 52px;
  margin-left: 4px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`
