let path = location.href;
let postId = path.substring(path.indexOf("=")+1);

$.ajax({
    type:"GET",
    url:`https://jsonplaceholder.typicode.com/posts/${postId}`
})
.done(function(data){
    console.log(data);
    $("#postContent").val(data.body);
    $("#postTitle").val(data.title);

    $(`#buttonSave`).on( "click",function(e){
        if(empty()!=true){
            $.ajax({
                url:`https://jsonplaceholder.typicode.com/posts/${postId}`,
                type:"PUT"
            })
            .done(function(e){
                console.log("I'm done, i saved the data", e);
            })
            .fail(function(e){
                console.log("I'm not done, i saved the data", e)
            })
        }
       
      
    })
     
})
function empty() {
    let x;
    let y;
    x = document.getElementById("postContent").value;
    y = document.getElementById("postTitle").value;
    if (x == ""  || y=="") {
        alert("Content cannot be empty");
        return true;
    } else{
        return false;
    }
}

