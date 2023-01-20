import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TaskInitialState {
  id: string
  content: string
  isCompleted: boolean
}

const initialState: TaskInitialState[] = [
  { content: 'A', id: '2', isCompleted: false },
  { content: 'A', id: '22', isCompleted: false },
  { content: 'A', id: '24', isCompleted: false },
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    task: initialState,
  },
  reducers: {
    addTask: (state, action: PayloadAction<TaskInitialState>) => {
      state.task = [action.payload, ...state.task]
    },
    removeTask(state, action: PayloadAction<string>) {
      state.task = state.task.filter(
        (task: TaskInitialState) => task.id !== action.payload,
      )
    },
    changeTaskCompletedState(
      state: any,
      action: PayloadAction<{ id: string; checkedState: boolean }>,
    ) {
      state.task = state.task.map((task: TaskInitialState) => {
        if (task.id === action.payload.id) {
          task.isCompleted = action.payload.checkedState
        }
        return task
      })
    },
  },
})

export const { addTask, removeTask, changeTaskCompletedState } =
  taskSlice.actions
export default taskSlice.reducer
