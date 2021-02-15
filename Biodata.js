function muncul(id) {
    var contentElement = document.getElementsByClassName('content')
    for (var i = 0; i < contentElement.length; ++i) {
        var item = contentElement[i];
        item.style.display = 'none';
    }
    document.getElementById('isi-' + String(id)).style.display = 'flex';
}