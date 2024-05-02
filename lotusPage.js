//LINKS FIREBASE

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código

//Fim do código
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("roomName")
    localStorage.removeItem("name")
    window.location = "index.html"
}