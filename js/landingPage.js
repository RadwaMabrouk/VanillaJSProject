// get first post 
$.ajax({
    type:"GET",
    url:"https://jsonplaceholder.typicode.com/posts",
})
// append first post 
.done(function(data){
    console.log("hallo isa te3rfi te3mleha");
    let postTitle=data[0].title;
    // console.log(data);
    let postBody=data[0].body;
    $("#h1Title")[0].innerText = postTitle;
    $("#pBody")[0].innerText = postBody;
})
.done(function(data){
    // append cards 1
    let postTitle_card1=data[1].title;
    let postBody_card1=data[1].body;
    $("#h1Title1")[0].innerText = postTitle_card1;
    $("#pBody1")[0].innerText = postBody_card1;
     
})
.done(function(data){
    // append cards 2
    let postTitle_card2=data[2].title;
    let postBody_card2=data[2].body;
    $("#h1Title2")[0].innerText = postTitle_card2;
    $("#pBody2")[0].innerText = postBody_card2;
    $("#imgSrc1").attr("src","https://picsum.photos/200");
    $("#imgSrc2").attr("src","https://picsum.photos/200");

     
})
.done(function(data){
    // append cards 2
    console.log("ana hena ahuo waslt le for loop")
    for( var i= 3 ; i< data.length ; i++){
        let postTitle_cardAll=data[i].title;
        let postBody_cardAll=data[i].body;
        let newEle=`<h2> ${postTitle_cardAll}</h2>
                    <p> ${postBody_cardAll} </p>`
        $("#allPosts").append(newEle);         
        // $("#h1Title_all")[i].innerText = postTitle_cardAll;
        // $("#pBody_all")[0].innerText = postBody_cardAll;
    }
    
     
})








//     console.log(t.split(/\b\s+(?!$)/))
//     var tokenArray = t.split(/\b\s+(?!$)/);
//     for(i=0;i<4;i++){
//         myStr+= tokenArray[i];
//    }