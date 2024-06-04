export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentsByCity = list.filter((student) => student.location === city);

  const upStudents = studentsByCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    const upGrade = gradeObj ? gradeObj.grade : 'N/A';
    return {
      ...student,
      grade: upGrade,
    };
  });
  return upStudents;
}
