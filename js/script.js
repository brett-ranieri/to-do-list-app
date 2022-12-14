// Prevent Return Key Functionality

$('#input').keypress(function(event){ //targets input field and looks for pressing of a key
    if(event.which === 13) { // if the key pressed is enter (13 = ASCII code for enter key - check JS bookmarks)
       event.preventDefault(); // prevent the default action (in this case was navigating back and refreshing page)
        newItem(); // call the add new Item function to have return key function like a click
    }
});

//Add New List Item

function newItem(){
    let li = $('<li></li>'); // creates li
    let inputValue = $('#input').val(); // targets string entered in input field 
    li.append(inputValue); // assigns string value to li

    if (inputValue === '') { // checks for valid input enrtry
        alert('You can\'t add nothing to the list. You have to write something!'); // error message
    } else {
        $('#list').append(li); // adds li to ul
        $('#input').val(''); // clears input after adding li to ul
    }

// Cross Out List Item

    li.each(function (){ // jQuery forEach
        $(this).on('dblclick', function (){ //on double click
            $(this).toggleClass("strike"); //toggle cross out
        })
    });

// Delete button

    let crossOutButton = $('<crossOutButton></crossOutButton>'); //creates crossOutButton
    crossOutButton.append(document.createTextNode('X')); //writes text inside button
    li.append(crossOutButton); //add button to the li

    crossOutButton.on('click', function (){ //delete li on click
        li.fadeOut(500); //used fadeOut animation instead of addClass("delete")
    })

// Sortable functionality

    $('#list').sortable(); //jQuery method to make list sortable.

}

