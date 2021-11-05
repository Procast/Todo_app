var deleteButton=document.getElementById('delete-task');
var checkbox=document.getElementById('toDelete');
var form=document.getElementById('form-submit');

deleteButton.addEventListener('click',function(event){
    event.preventDefault();
    if(checkbox.checked){
        // form.requestSubmit();
        
        

    }
    console.log('it is clicked:',checkbox.name,);

});