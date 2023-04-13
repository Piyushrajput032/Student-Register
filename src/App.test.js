import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';


test('name of the apllication', () => {
  render(<App />);
  const linkElement = screen.getByText(/Student Register/i);
  expect(linkElement).toBeInTheDocument();
});

test("render stuen inpput fields and button",()=>{
  const{getByLabelText,getByText}=render(<App/>);
  const nameInput = screen.getByLabelText("Name:");
  const rollNumberInput = screen.getByLabelText("Roll Number:");
  expect(nameInput).toBeInTheDocument();
  expect(rollNumberInput).toBeInTheDocument();
})

// test("add a new student in the table wh form is submitted",()=>{
//   const{getByLabelText,getByText,getByTestId}=render(<App/>)
//   const nameInput=screen.getByLabelText("Name:")
//   const rollNumberInput = screen.getByLabelText("Roll Number:");
//   const addButton = screen.getByText("Add");
//   const table = screen.getByTestId("student-table");
//   fireEvent.change(nameInput,{target:{value:"anshu"}});
//   fireEvent.change(rollNumberInput,{target:{value:"2134"}});
//   fireEvent.click(addButton);
//   expect(table).toHaveTextContent("anshu");
//   expect(table).toHaveTextContent("2134");

// })

function addStudent(student, students, setStudents) {
  setStudents([...students, student]);
}

const { useState } = require("react");

  test("adds a new student to the students array", () => {
    const student = { name: "John Doe", rollnumber: "123456" };
    const students = [{ name: "Jane Smith", rollnumber: "234567" }];
    const setStudents = jest.fn();
    addStudent(student, students, setStudents);
    expect(setStudents).toHaveBeenCalledWith([
      { name: "Jane Smith", rollnumber: "234567" },
      { name: "John Doe", rollnumber: "123456" },
    ]);
  });


