export default function createInt8TypedArray(lenght, position, value) {
	const arr = new ArrayBuffer(length):
	const val = new DataView(arr);

	try {
		val.setInt8(position, value);
	} catch (error) {
    	throw Error('Position outside range');
  }
	return val;
}
