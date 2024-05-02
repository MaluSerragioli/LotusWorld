const firebaseConfig = {
    apiKey: "AIzaSyANewzzkPotk3yG7rNu6gf_n_2jWWa36oc",
    authDomain: "batepapo-1f9f0.firebaseapp.com",
    databaseURL: "https://batepapo-1f9f0-default-rtdb.firebaseio.com",
    projectId: "batepapo-1f9f0",
    storageBucket: "batepapo-1f9f0.appspot.com",
    messagingSenderId: "549046197716",
    appId: "1:549046197716:web:5783827cb05192e5c7ca41"
};
firebase.initializeApp(firebaseConfig)

function addRoom() {
    roomName = document.getElementById("roomName").value;
    firebase.database().ref("rooms/").child(roomName).update({ purpose: "addSala" })
    localStorage.setItem("roomName", roomName)
}
function getData() {
    firebase.database().ref("rooms/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            console.log("Nome da Sala - " + roomNames);
            row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData()

function redirectToRoomName(name) {
 localStorage.setItem("roomName", name)
 window.location = "lotusPage.html"   
}
function logout() {
    localStorage.removeItem("roomName")
    localStorage.removeItem("name")
    window.location = "index.html"
}