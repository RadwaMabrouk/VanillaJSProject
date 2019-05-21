//get data from server 
$.ajax({
    type:"GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    })
    .done(function(data) {
        console.log("Executing DONE");
        for(let i =0; i<data.length; i++) {
            let postName= data[i].title;
            let postContent= data[i].body;
            let postId = data[i].id;
            const creatTr= `<tr>
            <td class="stylepostName">
            ${postName}
            </td>
            <td >
            ${postContent}
            </td>
            <td class="styleButtons">
                <button class = 'buttonEdit' id ='edit_${postId}'>Edit</button>
                <button class='buttonDelete' id='delete_${postId}' >Delet</button>
            </td>
        </tr>`   
       
           $("#post").append(creatTr);    
        //    console.log("Data is : ", data);   
        } 
        let buttonsEdit = $(".buttonEdit");
        for(let i=0; i<buttonsEdit.length; i++){
            buttonsEdit[i].addEventListener("click", function(e){
               let subId = e.target.id;
               let idNum = subId.substring(5);
               window.location=`edit.html?id=${idNum}` 
                console.log(idNum);

         });
        }
        let buttonsDelete = $(".buttonDelete");
        for(let i=0; i<buttonsDelete.length; i++){
            buttonsDelete[i].addEventListener("click", function(e){
               let subId = e.target.id;
               let idNum2 = subId.substring(7);
               let confirmDelete=  confirm("are you sure you want to delete?")
                if (confirmDelete == true) {
                  $.ajax({
                      url:`https://jsonplaceholder.typicode.com/posts/${idNum2}`,
                      type:"DELETE"
                    })
                    .done( 'remove',function(pop){
                        $(`#delete_${idNum2}`).parent().parent().remove();
                    })

                } else {
                  confirmDelete = "You pressed Cancel!";
                }
                console.log(idNum2);

         });
     }

   })
   .fail(function() {
    alert( "error" );
   });


   console.log("Executing loop");
 


//append to table 


