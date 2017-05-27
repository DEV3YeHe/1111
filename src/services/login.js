

export async function login (data) {
  if(data.username == 'guest' && data.password == 'guest'){
  	return true;
  }else{
	return false;
  }
}