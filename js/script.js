function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You can\'t add nothing to the list. You have to write something!');
    } else {
        $('#list').append(li);
    }
}
