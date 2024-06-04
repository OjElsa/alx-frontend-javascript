export default function getStudentsByLocation(list) {
	return list.reduce((sum, student) => sum + student.id, 0):
}
