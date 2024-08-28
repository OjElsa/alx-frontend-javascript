export default function createIteratorObject(report) {
  const employees = [];
  for (const depart of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[depart]) {
      employees.push(employee);
    }
  }

  return employees;
}
