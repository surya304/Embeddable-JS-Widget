
var currentUrl = window.location.href;

var apiKey;
let botkey;

var localhostip = 'http://localhost:3000';
var live_ip = 'https://app.videoform.com';

if (currentUrl.includes("localtesting") == true) {

  final_ip = localhostip;


} else {

  final_ip = live_ip;



}


var scripts = document.getElementsByTagName('script');

for (var i = 0, l = scripts.length; i < l; i++) {



  if (currentUrl.includes("localtesting") == true) {

      if (scripts[i].src.includes("widget") == true) {

        apiKey = scripts[i].getAttribute('data-id');
        botkey = scripts[i].getAttribute('data-botkey');


          break;
      }
  } else {
      if (scripts[i].src.includes("widget") == true) {

        apiKey = scripts[i].getAttribute('data-id');
        botkey = scripts[i].getAttribute('data-botkey');


          break;
      }
  }

}






var vfShadowRoot;

const extensionHostID = "hw_main_root_container";

let vfMainRootContainer = document.getElementById(extensionHostID);

if (!vfMainRootContainer) {

  vfMainRootContainer = document.createElement("div");
  vfMainRootContainer.setAttribute("id", extensionHostID);
  document.body.appendChild(vfMainRootContainer);
  vfMainRootContainer.attachShadow({
    mode: "open",
  });

  vfShadowRoot = vfMainRootContainer.shadowRoot;

  // Append the script element to the shadow root

  let vfShadowElement =
    vfMainRootContainer.shadowRoot.getElementById("hw_shadow_main");

  if (!vfShadowElement) {
    // Create a div element
    div = document.createElement("div");
    div.setAttribute("id", "hw_shadow_main");

    vfMainRootContainer.shadowRoot.appendChild(div);

    setTimeout(() => {
      appendData();
    }, 1000);
  }
} else {
  // vfAppendRecordSelectScreen();
  setTimeout(() => {
    appendData();
  }, 1000);
}



var show_popup = false;

// request_access();



  
 








// ////////////



// ////////////////

var all = ` 


<style>
/*--------------------
Mixins
--------------------*/
/*--------------------
Body
--------------------*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0 !important;
}

body {
  /* background: -webkit-linear-gradient(315deg, #044f48, #2a7561);
  background: linear-gradient(135deg, #044f48, #2a7561); */

  background-color: #fff;
  background-size: cover;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  line-height: 1.3;
  overflow: hidden;
}



.mobile-container{
  background: black;
  height: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
  width: 100%;
}
#chat-button {
  position: fixed;
  width: 112px;
  height: 140px;
  right: 20px;

  bottom: 0;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
}




#button-body {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: inherit;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  pointer-events: initial;
  background-size: 130% 130%;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  color: rgb(0, 125, 252);
  border: 1px solid #1E88E5;
  background: rgb(51, 71, 91);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.2) 0px 2px 12px;
}

.bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  /* background: url("https://wmuza.github.io/SocketIO-Chat-App/public/img/sa.png") no-repeat 0 0; */
  -webkit-filter: blur(80px);
  filter: blur(80px);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.online-bullet {
  /* background: #27bf4a; */
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 13px;
  margin: -13px 8px 0 0;
  width: 13px;
  right: 0;
  float: right;
}

.close-button {
  position: relative;
  z-index: 2147483000 !important;
  border: none;
  padding: 0px 0px 3px 0px;
  border-radius: 50px;
  font-size: 14px;
  position: absolute;
  width: 25px;
  height: 25px;
  top: -12px;
  right: -12px;
  background-color: #273342;
  color: #fff;
  cursor: pointer;
}

span.chat-message-counter {
  background: #020202;
  border: 2px solid #000000;
  color: red;
  border-radius: 50%;
  display: none;
  font-size: 12px;
  font-weight: 800;
  height: 28px;
  left: 0;
  line-height: 28px;
  margin: -1px 0 0 0px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 28px;
}

/*--------------------
Chat
--------------------*/

.show {
  display: block;
}

.hide {
  display: none !important;
}

.outer-body {

  /* // desktop styles */


  z-index: 2;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 5px;



}



.chat-mobile{
  background: white;
  height: 100%;
  overflow: hidden;
  width: 100%;
  margin:0;

}

/*--------------------
Chat Title
--------------------*/
.chat-title {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 45px;
  -ms-flex: 0 1 45px;
  flex: 0 1 45px;
  position: relative;
  z-index: 2;
  background: rgb(51, 71, 91);
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  padding: 18px 10px 18px 20px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.chat-title p{
  font-weight: normal;
  font-size: 15px;
  margin: 0;
  padding: 0;
  margin-top: 5px;
}

.chat-title h2 {
  color: rgba(255, 255, 255, 0.5);
  font-size: 8px;
  letter-spacing: 1px;
}

.chat-title .avatar {
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 9px;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 1px solid #27bf4a;
}


.chat-title .avatar img {
  width: 100%;
  height: auto;
}




.cross_mark {
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  top: 20px;
}


.containerchat {
  display: flex;
  justify-content: space-between;
}

.left-elements {
  display: flex;
  align-items: center;
}

.left-elements div {
  margin-right: 10px;
}

.right-element {
  margin-left: auto;
}

</style>




<div class="outer-body hide" id="outer-body">


<div class="chat" id="chat-container">

    <!-- Chat Header  -->
    <div class="chat-title" id="chat-title">
              
                <div class="containerchat">
                    <div class="left-elements">
                      <div>
                        <div 
                        style="border-radius: 50%;width:50px"></div>
                        <img
                        src="https://www.hubspot.com/hs-fs/hubfs/Resized%20Bot%20Avatar.webp?width=108&height=108"
                        id="bot_company_logo"
                        alt="Chat Bot Logo"
                         style="width:50px">
                      </div>
                      <div>
                        <p id="bot_company_name"> Company Name</p>
                      </div>
                    </div>
                    <div class="right-element">
                     <div>
                        <span class="online-bullet">
                            <div class="cross_mark"><a id="minimize-button"> &times;</a></div>
                        </span>
                     </div>
                    </div>
                  </div>

            </div>



    <div class="chat-sub-container" >

<iframe id="vf_iframe"  frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="yes" width="100%" height="100%"   frameborder="0" title="description"  ></iframe>

    </div>



</div>
</div>


<div id="chat-button" data-testid="widgetButton" class="chat-closed mobile-size__medium">
<div class="buttonWave"></div>




<button type="button" id="button-body" data-testid="widgetButtonBody" >
    <i class="material-icons type1 for-closed active" style="color: rgb(255, 255, 255);">
        <svg id="ic_bubble" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
    </i>

</button>
</div>
`;

function appendData() {
  let vfShadowElement =
    vfMainRootContainer.shadowRoot.getElementById("hw_shadow_main");

  if (vfShadowElement) {
    vfShadowElement.innerHTML = all;
  }
}


function getDeviceType() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 768) {
    return 'Mobile';
  } else if (screenWidth >= 768 && screenWidth < 1024) {
    return 'Tablet';
  } else {
    return 'Desktop';
  }
}

setTimeout(() => {
  const chatButton = vfMainRootContainer.shadowRoot.getElementById("chat-button");
  const chatContainer = vfMainRootContainer.shadowRoot.getElementById("outer-body");
  const minimizeButton = vfMainRootContainer.shadowRoot.getElementById("minimize-button");
  const chat_title = vfMainRootContainer.shadowRoot.getElementById("chat-title");
  

  if (chatButton) {
      chatButton.addEventListener("click", function () {
          if (chatContainer) {


  
              var is_mobile = getDeviceType();

              if(is_mobile == 'Mobile'){
  
                  chatContainer.style.height = '100%';
                  chatContainer.style.width = '100%';
                  chat_title.style.borderTopLeftRadius = '0';
                  chat_title.style.borderTopRightRadius = '0';
                  vfMainRootContainer.shadowRoot.getElementById('vf_iframe').style.height='90vh';

  
              }else{
  
                  chatContainer.style.position = 'absolute';
                  chatContainer.style.bottom = '24px';
                  chatContainer.style.right = '24px';
                  chatContainer.style.width = '350px';
                  chatContainer.style.height = '500px';
                  chatContainer.style.maxHeight = '700px';
                  vfMainRootContainer.shadowRoot.getElementById('vf_iframe').style.height='420px';

  
              }
  
              chatContainer.classList.remove("hide");
              chatContainer.classList.add("show");
              chatButton.classList.add("hide");
          }
      });
  }
  
  
  if (minimizeButton) {
      minimizeButton.addEventListener("click", function () {
          if (chatContainer) {
              // chatContainer.classList.remove("clicked");
  
  
  
              // if(is_mobile== true){
  
              // }
  
  
              chatContainer.classList.remove("show");
              chatContainer.classList.add("hide");
              chatButton.classList.remove("hide");
              chatButton.classList.add("show");
  
  
          }
      });
  }
  
  
  
  
  
}, 1000);








