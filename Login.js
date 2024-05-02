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
function Login() {
    userName=document.getElementById("form2Example11").value
    localStorage.setItem("name", userName)
    firebase.database().ref("/").child(userName).update({
        purpose:"newUsername"
    })
    setTimeout(() => {
        window.location = "LotusRoom.html"
    }, 2000);
    
}