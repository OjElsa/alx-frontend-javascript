export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(emptyList) {
      return Object.keys(emptyList).length;
    },
  };
}
