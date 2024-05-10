//LINKS FIREBASE
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
roomName = localStorage.getItem("roomName")
userName = localStorage.getItem("name")

function send() {
    msg = document.getElementById("msg").value
    firebase.database().ref("rooms/" + roomName).push({
        name: userName,
        message: msg,
        like: 0
    })
    msg = document.getElementById("msg").value = ""
}
function getData() {
    firebase.database().ref("rooms/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                //Início do código
                name = messageData["name"]
                message = messageData["message"]
                like = messageData["like"]
                nameWithTag = "<h4>" + name + "<img class='user_tick' src=''></h4>"
                messageWithTag = "<h4 class='message_h4'> " + message + "</h4>"
                likeButton = "<button class = 'btn btn-danger' id = " + firebaseMessageId + " value = " + like + " onclick = 'updateLike(this.id)'>";
                spanWithTag = "<span class = 'glyphicon glyphicon-thumbs-up' >Like: " + like + "</span></button>";
                row=nameWithTag + messageWithTag + likeButton + spanWithTag
                document.getElementById("output").innerHTML+=row
                //Fim do código
            }
        });
    });
}
getData();
function updateLike(messageId){
    btn_Id = messageId
    likes = document.getElementById(btn_Id).value
    updateLikes = Number(likes)+1
    firebase.database().ref("rooms/" + roomName).child(messageId).update({like:updateLikes})
}
function logout() {
    localStorage.removeItem("roomName")
    localStorage.removeItem("name")
    window.location = "index.html"
}