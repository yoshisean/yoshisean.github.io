
let name, text, sendtime, created_at;
let signedin=false;
let prevdate="";

const firebaseConfig = {
    apiKey: "AIzaSyCnTZQPPcBytSUDtRKp4M6XDGPrwl9UFMA",
    authDomain: "chatapp-4d072.firebaseapp.com",
    databaseURL: "https://chatapp-4d072-default-rtdb.firebaseio.com",
    projectId: "chatapp-4d072",
    storageBucket: "chatapp-4d072.appspot.com",
    messagingSenderId: "666552984881",
    appId: "1:666552984881:web:74075a57e180f22069fc10"
};
firebase.initializeApp(firebaseConfig);

const w = window.innerWidth;
const h = window.innerHeight;
const tbposy=document.getElementById("chattext").offsetTop;
const btnpos=h-tbposy-20;
document.getElementById("sendbtn").style.bottom = btnpos;

function scroll(){
    document.getElementById('chatbox').scrollTop = (document.getElementById('chatbox').scrollHeight - document.getElementById('chatbox').offsetHeight)
}


window.addEventListener('keydown',enterclicked );
function enterclicked(e){
    switch (e.key) {
        case "Enter":{
            send()
        }
    }
}


function authsend(username){
    signedin=true
    name=username
}

function send() {
    if (signedin ) {
        let message = document.getElementById("chattext").value;
        let blankspaces=0;
        for(let i=0;i<message.length;i++){
            if(message.charAt(i)==" "){
                blankspaces++;
            }
        }
        if (message.length-blankspaces > 0) {
            const currentdate = new Date();
            const sendtime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            text = document.getElementById("chattext").value;

            firebase.database().ref("chats/" + Date.now()).set({
                name: name,
                created_at: sendtime,
                text: text
            })
            document.getElementById("chattext").value = ""
        }
    }
}

function updatechatwwindow(name, time, text){
    let chatbox=document.getElementById("chatbox")
    let date = time.substring(0, time.indexOf("@"))
    let t2 = time.substring(time.indexOf("@")+1,time.length)
    if(date!=prevdate){
        let date_Element = document.createElement("em");
        date_Element.innerText = date+"\n";
        date_Element.className="date"
        chatbox.append(date_Element)
        prevdate=date;
    }

    let name_Element = document.createElement("em");
    name_Element.innerText = name+": ";
    name_Element.className="name"

    let text_Element = document.createElement("strong");
    text_Element.innerText = text;
    text_Element.className="text"

    let time_Element = document.createElement("h1");
    time_Element.innerText = t2+"\n";
    time_Element.className="time"

    chatbox.append(name_Element,text_Element,time_Element)

    // chatbox.innerText += name + " at " + time + " : " + text + "\n"
}
