

export async function login (values) {
  if(values.username == 'guest' && values.password == 'guest'){
  	// console.log("写的对")
  	// console.log(values.username)
  	// console.log(values.password)
  	// setTimeout("console.log('等三秒回传')","3000");
  	return true;
  }else{
  	// console.log("写的bu对")
  	// console.log(values.username)
  	// console.log(values.password)
	return false;
  }
}