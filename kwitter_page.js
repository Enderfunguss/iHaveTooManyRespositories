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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById('msg').value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg
    });
    document.getElementById('msg').value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                names = message_data.name;
                message = message_data.message;
                name_of_person = "<h4>" + names + "</h4>";
                message_of_person = "<p>" + message + "</p>";
                row = name_of_person + message_of_person;
                document.getElementById('output').innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace = "kwitter_room.html";
}