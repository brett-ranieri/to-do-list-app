//Add New List Item

function newItem(){
    let li = $('<li></li>'); 
    let inputValue = $('#input').val(); 
    li.append(inputValue); 

    if (inputValue === '') {
        alert('You can\'t add nothing to the list. You have to write something!'); 
    } else {
        $('#list').append(li);
        $('#input').val(''); // clears input after adding li to ul
    }

// Cross Out List Item

    li.each(function (){ 
        $(this).on('dblclick', function (){
            $(this).toggleClass("strike");
        })
    });

// Delete button

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', function (){
        li.fadeOut(500); //used fadeOut animation instead of addClass("delete")
    })

// Sortable functionality

    $('#list').sortable();

}