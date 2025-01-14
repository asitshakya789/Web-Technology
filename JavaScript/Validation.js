function validation(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    if(user == '' || pass == ''){
        alert('Please fill all the fields');
        return false;
    }
    return true;
}