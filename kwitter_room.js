  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC5ZM43QeewCTjp_oA51BX5eQaRiG17ihU",
    authDomain: "kwttr-aedc3.firebaseapp.com",
    databaseURL: "https://kwttr-aedc3-default-rtdb.firebaseio.com",
    projectId: "kwttr-aedc3",
    storageBucket: "kwttr-aedc3.appspot.com",
    messagingSenderId: "99663190158",
    appId: "1:99663190158:web:ebc2cc4ea65dc735b111df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById('user_name').innerHTML = "welcome " + user_name;

function addRoom() {
  room_name = document.getElementById('room_name').value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code
          row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
          document.getElementById("output").innerHTML += row;
          //End code
      });
  });
}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
