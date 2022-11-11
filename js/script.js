//Add New List Item

function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You can\'t add nothing to the list. You have to write something!');
    } else {
        $('#list').append(li);
    }

// Cross Out List Item

    li.each(function (){
        $(this).on('dblclick', function (){
            $(this).toggleClass("strike");
        })
    });

}