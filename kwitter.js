function addUser() {
    userName = document.getElementById('User_name').value;
    localStorage.setItem("user_name", userName);
    window.location = "kwitter_room.html";
}