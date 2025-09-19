const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  //... More employee records can be added here
];

function displayEmployees() {
  let empStr = '';
  employees.forEach(emp => {
    empStr += `<p>ID: ${emp.id}, Name: ${emp.name}, Age: ${emp.age}, Dept: ${emp.department}, Salary: $${emp.salary}</p>`;
  })

  document.getElementById('employeesDetails').innerHTML = empStr;
}

function calculateTotalSalaries() {
  let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
  document.getElementById('employeesDetails').innerHTML = totalSalary;
}

function displayHREmployees() {
  let hrEmployee = employees.filter(emp => emp.department === 'HR');
  let empStr = '';
  hrEmployee.forEach(emp => {
    empStr += `<p>ID: ${emp.id}, Name: ${emp.name}, Age: ${emp.age}, Dept: ${emp.department}, Salary: $${emp.salary}</p>`;
  })
  document.getElementById('employeesDetails').innerHTML = empStr;
}

function findEmployeeById(empId) {
  let emp = employees.find(emp => emp.id === empId);
  if (emp) {
    document.getElementById('employeesDetails').innerHTML = `<p>ID: ${emp.id}, Name: ${emp.name}, Age: ${emp.age}, Dept: ${emp.department}, Salary: $${emp.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = `<p>Employee with ID ${empId} not found.</p>`;
  }
}
