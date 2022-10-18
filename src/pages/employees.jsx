import { useState } from "react";
import headshot1 from "../images/headshot(1).jpg";
import headshot2 from "../images/headshot (2).jpg";
import headshot3 from "../images/headshot (3).jpg";
import headshot4 from "../images/headshot (4).jpg";
import headshot5 from "../images/headshot (5).jpg";
import headshot6 from "../images/headshot (6).jpg";
import headshot7 from "../images/headshot (7).jpg";
import headshot8 from "../images/headshot (8).jpg";
import headshot9 from "../images/headshot (9).jpg";
import Employee from "../components/employee";
import AddEmployees from "../components/addEmployees";
import EditEmployees from "../components/editEmployees";

export default function Employees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Josh", role: "Expert", image: headshot1 },
    { id: 2, name: "Rom", role: "Expert", image: headshot2 },
    { id: 3, name: "Bael", role: "Expert", image: headshot3 },
    { id: 4, name: "Alice", role: "Expert", image: headshot4 },
    { id: 5, name: "Jon", role: "Master", image: headshot5 },
    { id: 6, name: "Coy", role: "Expert", image: headshot6 },
    { id: 7, name: "Lynn", role: "Rookie", image: headshot7 },
    { id: 8, name: "Amber", role: "Expert", image: headshot8 },
    { id: 9, name: "Van", role: "Accountant", image: headshot9 },
  ]);

  const handleUpdateEmployee = (id, newName, newRole) => {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === id) {
          employee.name = newName;
          employee.role = newRole;
        }
        return employee;
      })
    );
  };

  const handleAddEmployee = (id, name, role, image) => {
    setEmployees([...employees, { id, name, role, image }]);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          const editEmployees = (
            <EditEmployees
              id={employee.id}
              role={employee.role}
              name={employee.name}
              image={employee.image}
              onUpdateEmployee={handleUpdateEmployee}
            />
          );
          return (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              image={employee.image}
              onUpdateEmployee={handleUpdateEmployee}
              editEmployees={editEmployees}
            />
          );
        })}
      </div>
      <div className="col-md-12 text-center">
        <AddEmployees onAddEmployee={handleAddEmployee} />
      </div>
    </div>
  );
}
