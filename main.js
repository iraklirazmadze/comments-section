import data from './data.json' assert {type: 'json'};


let mainPage = document.querySelector('.mainPage');

let idi = 4;
let id = () =>{
 idi ++;
 return idi;
}

const jsonCommentsSturcture = (id,content,reply) =>{
  return {
    "id": id,
    "content": content,
    "createdAt": 'just now',
    "score": 0,
    "user": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "replies": reply
  }
}

const jsonRepliesStructure = (id,content,replyingTo) => {
  return {
    "id": id,
    "content": content,
    "createdAt": "just now",
    "score": 0,
    "replyingTo": replyingTo,
    "user": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    }
  }
}




const commentsMarkup = (id,userImage,userName,time,text,score) => {
  return `
  <div class="commentBox" id="${id}">
    <div class="comments-header">
      <img class="avatar" src=${userImage}>
      <span class="userName">${userName}</span>
      <span class="time">${time}</span>
    </div>
    <p class="commentContent">${text}</p>
    <div class="comments-footer">
      <div class="scoreDiv">
        <img class="plus" src="./images/icon-plus.svg">
        <span class="score">${score}</span>
        <img class="minus" src="./images/icon-minus.svg">
      </div>
      <div class="replyDiv">
      <img src="./images/icon-reply.svg">
      <span class="reply">Reply</span>
      </div>
    </div>
  </div>`
}


const editCommentsMarkup = (id,text,score) => {
  return `
  <div class="commentBox" id="${id}">
    <div class="comments-header">
      <img class="avatar" src=${data.currentUser.image.png}>
      <span class="userName">${data.currentUser.username}</span>
      <span class="time">now</span>
    </div>
    <textarea name="text" id="addComment" class="editComment" cols="30" rows="10" placeholder="Add a comment..." value=''>${text}</textarea>
    <div class="comments-footer">
      <div class="scoreDiv">
        <img class="plus" src="./images/icon-plus.svg">
        <span class="score">${score}</span>
        <img class="minus" src="./images/icon-minus.svg">
      </div>
      <div class="editDiv">
        <button class="update">UPDATE<button>
      </div>
    </div>
  </div>`
}


const replyMarkup = (id,userImage,userName,time,text,score,whosReplying) => {
  return `
  <div class="main-reply-div" id="${id}">
    <div class='line'></div>
      <div class="replyBox">
        <div class="comments-header">
          <img class="avatar" src=${userImage}>
          <span class="userName">${userName}</span>
          <span class="time">${time}</span>
        </div>
        <p class="commentContent"><span class="whos-replying">@${whosReplying+ " "}</span>${text}</p>
        <div class="comments-footer">
          <div class="scoreDiv">
            <img class="plus"  src="./images/icon-plus.svg">
            <span class="score">${score}</span>
            <img  class="minus" src="./images/icon-minus.svg">
          </div>
          <div class="replyDiv">
            <img src="./images/icon-reply.svg">
            <span class="reply">Reply</span>
          </div>
        </div>
      </div>
    </div>
  `
}

const myComment = (id,text,score) => {
  return `
  <div class="commentBox" id="${id}">
      <div class="comments-header">
        <img class="avatar" src=${data.currentUser.image.png}>
        <span class="userName">${data.currentUser.username}</span>
        <span class="you">you</span>
        <span class="time">now</span>
      </div>
      <p class="commentContent">${text}</p>
      <div class="comments-footer">
        <div class="scoreDiv">
          <img  class="plus" src="./images/icon-plus.svg">
          <span class="score">${score}</span>
          <img class="minus" src="./images/icon-minus.svg">
        </div>
        <div class="delete-edit">
          <div class="deleteDiv" id="deleteCommentDiv">
            <img src="./images/icon-delete.svg">
            <span  class="delete">Delete</span>
          </div>
          <div class="editDiv">
            <img src="./images/icon-edit.svg">
            <span class="edit">Edit</span>
          </div>
    </div>
  </div>
  `
}

const myReply = (id,time,text,score,whosReplying) => {
  return `
  <div class="main-reply-div" id="${id}">
    <div class='line'></div>
    <div class="replyBox">
      <div class="comments-header">
        <img class="avatar" src=${data.currentUser.image.png}>
        <span class="userName">${data.currentUser.username}</span>
        <span class="you">you</span>
        <span class="time">${time}</span>
      </div>
      <p class="commentContent"><span class="whos-replying">@${whosReplying+ " "}</span>${text}</p>
      <div class="comments-footer">
        <div class="scoreDiv">
          <img  class="plus" src="./images/icon-plus.svg">
          <span class="score">${score}</span>
          <img class="minus" src="./images/icon-minus.svg">
        </div>
        <div class="delete-edit">
          <div class="deleteDiv" id="deleteReplyDiv">
            <img src="./images/icon-delete.svg">
            <span  class="delete">Delete</span>
          </div>
          <div class="editDiv">
            <img src="./images/icon-edit.svg">
            <span class="edit">Edit</span>
          </div>
      </div>
    </div>
  </div>
  `
}

const replyArea =  
  `
<textarea name="text" id="addComment" class='replyArea' cols="30" rows="10" placeholder="Add a comment..." value=''></textarea>
  <div class='addComment-footer'>
  <img class="avatar" src=${data.currentUser.image.png}>
  <button class="submitReply">reply</button>
  </div>
`


const addCommentArea = `
  <textarea name="text" id="addComment" cols="30" rows="10" placeholder="Add a comment..." value=''></textarea>
  <div class='addComment-footer'>
  <img class="avatar" src=${data.currentUser.image.png}>
  <button class="send">SEND</button>
  </div>
`;

const deleteComment = `
<div class="main-deletion-box">
  <div class="deletion-box">
    <h1>Delete comment</h1>
    <p>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
    <div class="cancel-delete">
    <button class="cancel">cancel</button>
    <button  class="lastDelete">delete</button>
    </div>
  </div>
</div>
`


//add comments and replies
function addCommentsAndReplies(){
  mainPage.innerHTML = "";
  for(let i=0; i<data.comments.length; i++){
    if(data.comments[i].user.username == 'juliusomo'){
      mainPage.innerHTML += myComment(data.comments[i].id,data.comments[i].content,data.comments[i].score);
      }else{
        mainPage.innerHTML += commentsMarkup(data.comments[i].id,data.comments[i].user.image.png,data.comments[i].user.username,data.comments[i].createdAt,data.comments[i].content,data.comments[i].score);
      }
    if(data.comments[i].replies != ''){
      for (let x=0; x<data.comments[i].replies.length; x++){
        if(data.comments[i].replies[x].user.username == 'juliusomo'){
          mainPage.innerHTML += myReply(data.comments[i].replies[x].id,data.comments[i].replies[x].createdAt,data.comments[i].replies[x].content,data.comments[i].replies[x].score,data.comments[i].replies[x].replyingTo);
        }else{
          mainPage.innerHTML += replyMarkup(data.comments[i].replies[x].id,data.comments[i].replies[x].user.image.png, data.comments[i].replies[x].user.username, data.comments[i].replies[x].createdAt,data.comments[i].replies[x].content,data.comments[i].replies[x].score,data.comments[i].replies[x].replyingTo);
        }
      }
    }
  }
  
  reply();
  deleteComments();
  deleteReplies();
  editComments();
  addIdsInPlusMinusArray();
  minus();
  plus();
}


document.querySelector(".addComment").innerHTML += addCommentArea;

//send new comments

document.querySelector(".send").addEventListener("click", () => {
  data.comments.push(jsonCommentsSturcture(id(),document.querySelector("#addComment").value,''));

  addCommentsAndReplies();
  document.querySelector("#addComment").value = '';
})



// delete comments
function deleteComments(){
for (let x of document.querySelectorAll("#deleteCommentDiv")){
  let parent = x.parentElement.parentElement.parentElement;
  x.addEventListener('click', () =>{
    mainPage.innerHTML += deleteComment;
    document.querySelector('.cancel').addEventListener('click', () =>{
      addCommentsAndReplies();
    })
    document.querySelector(".lastDelete").addEventListener('click', () =>{
      for (let i=0; i<data.comments.length; i++){
        if(data.comments[i].id == parent.id){
          data.comments.splice(i,1);
          addCommentsAndReplies();
          return;
        }
      }
    })
  })
}

}

// delete replies
function deleteReplies(){
  for (let x of document.querySelectorAll("#deleteReplyDiv")){
    let parent = x.parentElement.parentElement.parentElement.parentElement;
    x.addEventListener('click', () =>{
      mainPage.innerHTML += deleteComment;
      document.querySelector('.cancel').addEventListener('click', () =>{
        addCommentsAndReplies();
      })
      document.querySelector(".lastDelete").addEventListener('click', () =>{
        for (let i=0; i<data.comments.length; i++){
          if(data.comments[i].replies.length !== 0){
          for (let x=0; x<data.comments[i].replies.length; x++){
            if(data.comments[i].replies[x].id == parent.id){
              data.comments[i].replies.splice(x,1);
              addCommentsAndReplies();
              return;
            }}
          }
        }
      })
    })
  }
}
function findCommentsAndRepliesByID(id){
  for(let x=0; x<data.comments.length; x++){
    if(data.comments[x].id == id){
     return data.comments[x];
    }else{
    for(let i=0; i<data.comments[x].replies.length; i++){
      if(data.comments[x].replies[i].id == id){
        return data.comments[x].replies[i];
      }
    }
  }
}
}

function findComentByReplyID(id){
  for(let i=0; i<data.comments.length; i++){
    for(let x=0; x<data.comments[i].replies.length; x++){
      if(data.comments[i].replies[x].id == id){
        return data.comments[i];
      }
    }
  }
}

// edit comments
function editComments(){
for ( let x of Array.from(document.querySelectorAll('.edit'))){
  x.addEventListener('click', () => {
    parent = x.parentElement.parentElement.parentElement.parentElement.parentElement;
    if(parent.className == 'main-reply-div'){
    let elem = findCommentsAndRepliesByID(parent.id);
    parent.innerHTML = editCommentsMarkup(parent.id,elem.content,elem.score);
    document.querySelector('.update').addEventListener('click', () =>{
      elem.content = document.querySelector('.editComment').value;
      addCommentsAndReplies();
    })
  }else{
    parent = x.parentElement.parentElement.parentElement.parentElement;
    let elem = findCommentsAndRepliesByID(parent.id);
    parent.innerHTML = editCommentsMarkup(parent.id,elem.content,elem.score);
    document.querySelector('.update').addEventListener('click', () =>{
      elem.content = document.querySelector('.editComment').value;
      addCommentsAndReplies();
    })
  }
  })
}
}

//reply
let clicked =false;
function reply(){
for(let x of Array.from(document.querySelectorAll(".replyDiv"))){
  x.addEventListener('click', () => {
    if(clicked == false){
      console.log(x.firstElementChild.style)
    let parent = x.parentElement.parentElement;
    if(parent.className == 'commentBox'){
      let elem = findCommentsAndRepliesByID(parent.id);
      mainPage.children[parent.id-1].insertAdjacentHTML( 'afterend',replyArea);
      
      document.querySelector(".submitReply").addEventListener("click", () => {
        data.comments[parent.id-1].replies.push(jsonRepliesStructure(id(),document.querySelector(".replyArea").value,elem.user.username))
      addCommentsAndReplies();
      clicked = false;
      })
    }else{
      parent = x.parentElement.parentElement.parentElement;
      let elem = findCommentsAndRepliesByID(parent.id);

      
      mainPage.children[parent.id-1].insertAdjacentHTML( 'afterend',replyArea);
      document.querySelector(".submitReply").addEventListener("click", () => {
        let parentComment = findComentByReplyID(parent.id);
        parentComment.replies.push(jsonRepliesStructure(id(),document.querySelector(".replyArea").value,elem.user.username));
      addCommentsAndReplies();
      clicked = false;
      return;
      })
    }
    clicked = true;
  }else{
    clicked=false;
    addCommentsAndReplies();
    
    
  }
  })
}
}


let plusMinus=[];

function addIdsInPlusMinusArray(){
for(let i=0; i<data.comments.length; i++){
  let idi = data.comments[i].id;

  if(!checkId(idi)){
  plusMinus.push({id:idi, value:0});
}
    if(data.comments[i].replies.length !== 0){
      for (let x=0; x<data.comments[i].replies.length; x++){
        if(!checkId(data.comments[i].replies[x].id)){
          plusMinus.push({id:data.comments[i].replies[x].id, value:0});
        }
      }
    }
  } 
}

function checkId(id){
  for(let i=0; i<plusMinus.length; i++){
    if(plusMinus[i].id == id){
      return true;
    }
  }
}

function findIndexById(id){
  for(let i=0; i<plusMinus.length; i++){
    if(plusMinus[i].id == id){
      return i;
    }
  }
}
function plus(){
  let pluses=Array.from(document.querySelectorAll(".plus"));
for (let x=0; x<pluses.length; x++){
  pluses[x].addEventListener("click", (event)=>{
     let parent =  pluses[x].parentElement.parentElement.parentElement;
     if(parent.className == 'commentBox'){
      let elementIndex = findIndexById(parent.id);
     if(plusMinus[elementIndex].value == 0  || plusMinus[elementIndex].value  == -1){
      plusMinus[elementIndex].value ++;
     let element = findCommentsAndRepliesByID(parent.id);
     console.log(element)
     element.score++;
     addCommentsAndReplies();
     }
    }else{
      parent = parent.parentElement;
      let elementIndex = findIndexById(parent.id);
     if(plusMinus[elementIndex].value == 0  || plusMinus[elementIndex].value  == -1){
      plusMinus[elementIndex].value ++;
     let element = findCommentsAndRepliesByID(parent.id);
     element.score++;
     addCommentsAndReplies();
    }}
  })
}
}

function  minus(){
  let minuses=Array.from(document.querySelectorAll(".minus"));
for (let x=0; x<minuses.length; x++){
  minuses[x].addEventListener("click", (event)=>{
     let parent =  minuses[x].parentElement.parentElement.parentElement;
     if(parent.className == "commentBox"){
      let elementIndex = findIndexById(parent.id);
      if(plusMinus[elementIndex].value == 0  || plusMinus[elementIndex].value  == 1){
        plusMinus[elementIndex].value --;
        let element = findCommentsAndRepliesByID(parent.id);
        if(element.score == 0){
          return;
        }else{
          element.score--;
          addCommentsAndReplies();
        }
      }
    }else{
      parent = parent.parentElement;
      let elementIndex = findIndexById(parent.id);
      if(plusMinus[elementIndex].value == 0  || plusMinus[elementIndex].value  == 1){
        plusMinus[elementIndex].value --;
        let element = findCommentsAndRepliesByID(parent.id);
        if(element.score == 0){
          return;
        }else{
          element.score--;
          addCommentsAndReplies();
        }
      }
     }
  })
}
}

addCommentsAndReplies();