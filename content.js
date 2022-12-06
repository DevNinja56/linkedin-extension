var id = 0;
var new_id = 0;
var loc = null;
var new_location = "";
var loginId = "";
var focus = 1;
value_check = 1;

var x = setInterval(() => {
  if (localStorage.getItem("id") != null && !(window.location.href.includes("https://pursuenetworking.com/"))) {
    loginId = localStorage.getItem("id");
    chrome.runtime.sendMessage({ type: "auth", auth: loginId });
    clearInterval(x);
    localStorage.removeItem("id");
    loginId = "";
    window.location.href = "https://www.linkedin.com/in/";
  }
}, 500);

// let stateCheck = setInterval(() => {
// 	action();
// }, 4000);

var x = setInterval(() => {
  var new_location = window.location.href;
  getid = localStorage.getItem("user_id");

  var temp = 0;
  if (
    new_location != loc && (new_location.includes("https://www.linkedin.com/in/") || new_location.includes("https://www.linkedin.com/company/"))
    
  ) {
    temp = 1;
    loc = new_location;
    let message = {
      loader: "loader",
    };
    chrome.runtime.sendMessage({ type: "message", message });
    action();
  }
}, 100);

function action() {
  
  


  var f = setInterval(function () {
    // let about = document.querySelector(
    //   ".pv-shared-text-with-see-more.t-14.t-normal.t-black.display-flex.align-items-center"
    // );
    new_location_new = window.location.href;
    if(new_location_new.includes("https://www.linkedin.com/company/")){
      console.log("company")
      document.querySelectorAll('.t-16.t-bold.t-black--light.org-page-navigation__item-anchor.ember-view.pv3.ph4').forEach((chats) => {
        if(chats.innerText.includes("About") && value_check == 1){
          chats.click()
          value_check = 0;
        }
      })
      let about = null  
    document.querySelectorAll(".artdeco-card.p5.mb4").forEach((chats) => {
      console.log(chats.innerText,"chats") ;
      chats.querySelector("h2")
      if(chats.querySelector("h2").innerText.includes("Overview")){
        console.log("yeah")
        about = chats.querySelector("p").innerText
      }
      else{
        if(about == null){
          about = null
        }

      }
      console.log(about,'About')
        });  
        var img = document.querySelector(".lazy-image.ember-view.org-top-card-primary-content__logo");

    if (img != null && img != null) {
      img = img.src;
    } else {
      img = document.querySelector(".ember-view.profile-photo-edit__preview");
      img = img.src;
    }
    if (img == null) {
      img = "./Assets/img/selecteddms.svg";
    }
    console.log('img',img)

    let name = document.querySelector(
      ".ember-view.t-24.t-black.t-bold.full-width"
    );
    if (name != null && name.innerText != null) {
      name = name.innerText;
    }
    console.log('name',name)

    let title = document.getElementsByTagName("title")[0];
    if (title != null) {
      title = title.innerText;
    }
    let description = document.querySelector(
      ".org-top-card-summary__tagline.t-16.t-black"
    );
    if (description != null && description.innerText != null) {
      description = description.innerText;
    }
    let count = 0;
    let address = null;
    document.querySelectorAll(
      ".org-top-card-summary-info-list__info-item"
    ).forEach((chats) => {
      if(count == 1){
        address = chats.innerText
      }
      count = count + 1
    });
    if (address != null && address.innerText != null) {
      address = address.innerText;
    }
    console.log(address,'address')
    let company = null

    let profile_link = window.location.href;

  let message = {
    id: id,
    name: name,
    about: about,
    img: img,
    address:address,
    description: description,
    title:title,
    company,
    profile_link: profile_link,
  };

  chrome.runtime.sendMessage({ type: "message", message });

      
    }
    else{
      let about = null  
    document.querySelectorAll(".pvs-header__title.text-heading-large").forEach((chats) => {
      console.log(chats.innerText,"chats") ;
      if(chats.innerText.includes("About")){
        console.log("yeah")
        about = chats.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".pv-shared-text-with-see-more.t-14.t-normal.t-black.display-flex.align-items-center")
      }
      else{
        if(about == null){
          about = null
        }

      }
        });    

    

    if (!about) {
      about = null;
    } else {
      var spans = about.getElementsByTagName("span");
      if (!spans[0].innerText) {
        about = spans[1].innerText;
      } else {
        about = spans[0].innerText;
      }
    }
    
    console.log(about,"about")

    // new_id = document
    //   .getElementsByClassName("artdeco-card ember-view pv-top-card")[0]
    //   .getAttribute("data-member-id");

    let title = document.getElementsByTagName("title")[0];
    if (title != null) {
      title = title.innerText.toString().trim();
    }

    let name = document.getElementsByClassName(
      "text-heading-xlarge inline t-24 v-align-middle break-words"
    )[0];
    if (name != null && name.innerText != null) {
      name = name.innerText.toString().trim();
    }

    let description = document.getElementsByClassName(
      "text-body-medium break-words"
    )[0];
    if (description != null && description.innerText != null) {
      description = description.innerText.toString().trim();
    }

    let address = document.getElementsByClassName(
      "text-body-small inline t-black--light break-words"
    )[0];
    if (address != null && address.innerText != null) {
      address = address.innerText.toString().trim();
    }

    let company = document.querySelector(".inline-show-more-text.inline-show-more-text--is-collapsed.inline-show-more-text--is-collapsed-with-line-clamp.inline")      
    if (company != null && company.innerText != null) {
      company = company.innerText.toString().trim();
    } else {
      company = document.querySelector(
        ".pv-entity__secondary-title.t-14.t-black.t-normal"
      );
      if (company != null && company.innerText != null) {
        company = company.innerText;
      } else {
        company = null;
      }
    }

    var img = document.querySelector(".pv-top-card-profile-picture__image");

    if (img != null && img != null) {
      img = img.src;
    } else {
      img = document.querySelector(".ember-view.profile-photo-edit__preview");
      img = img.src;
    }
    if (img == null) {
      img = "./Assets/img/selecteddms.svg";
    }

    let profile_link = window.location.href;

    let message = {
      id: id,
      title: title,
      name: name,
      description: description,
      address: address,
      company: company,
      about: about,
      img: img,
      profile_link: profile_link,
    };

    chrome.runtime.sendMessage({ type: "message", message });
  }
  
    if(document.hasFocus()){
      
    }
    else
    {
        value_check = 1;
        clearInterval(f);
    }
    clickCheck = localStorage.getItem("imageIsClicked")
    if(clickCheck){
      value_check = 1;
      clearInterval(f);
    }
    
    
  }, 1000);
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.temp) {
    user_id = localStorage.getItem("user_id")
    if(!user_id){
      localStorage.setItem("user_id", message.temp);
    }
    profilepic = localStorage.getItem("profilepic")
    if(!profilepic){
      localStorage.setItem("profilepic", message.profilepic);
    }
    name = localStorage.getItem("name")
    if(!name){
      localStorage.setItem("name", message.fname);
    }
    username = localStorage.getItem("username")
    if(!username){
      localStorage.setItem("username", message.username);
    }
  }

  if (!message.auth) {
    var current_location = window.location.href;
    if (
      current_location.includes("https://www.linkedin.com/in/") &&
      message.txt.includes("https://extension-dashboard.vercel.app")
    ) {
      window.open(message.txt + '?user_id=' +message.temp  + '&profilepic=' +message.profilepic  + '&fname=' +message.fname + '&username=' +message.username, "_blank");
      window.focus();
    } else if (
      current_location.includes("https://extension-dashboard.vercel.app") ||  current_location.includes("https://extension-dashboard.vercel.app/Single-details-page.html")
    ) {
      if (!message.txt.includes("https://extension-dashboard.vercel.app")) {
        if (!message.donot) {

          
          var myWindow = window.open(message.txt, "", "width=680, height=750");
          myWindow.blur();
          
        }
      }
    } else {
      if (message.txt.includes("https://extension-dashboard.vercel.app")) {
        window.location.href = message.txt + '?user_id=' +message.temp  + '&profilepic=' +message.profilepic  + '&fname=' +message.fname + '&username=' +message.username;
      }
      else{
        window.location.href = message.txt;
      }
    }
  } else {
    if (message.auth) {
      window.location.href = "";
      window.location.href = message.auth;
      clearInterval(a);
    }
  }
}

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}



// setInterval(() => {
// document.querySelectorAll(".profile-photo-cropper__apply-action.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view").forEach((item) => {
//   item.addEventListener("click", (e) => {
//   console.log("yes we have done it")
//   })
// })
          
//         }, 5000);


