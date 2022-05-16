import { render, screen, fireEvent } from '@testing-library/react'

import TodoInput from '../TodoInput'

const mockSetTodoFnc = jest.fn()

test ('todo input field type', () => {
    render(<TodoInput setTodo={mockSetTodoFnc}/>)
    const inputElement = screen.getByTestId('todo-input-field')

    fireEvent.change(inputElement, {
        target:{
            value: 'Beli bakso'
        }
    })
    expect(inputElement.value).toBe('Beli bakso')
})

test('todo input button clicked', () => {
    render(<TodoInput setTodo={mockSetTodoFnc}/>)
    const inputElement = screen.getByTestId('todo-input-field')
    const butttonElement = screen.getByTestId('todo-input-button')
    fireEvent.change(inputElement,{
        target:{
            value:'Beli Bakso'
        }
    })
    fireEvent.click(butttonElement)
    expect(inputElement.value).toBeFalsy()
})