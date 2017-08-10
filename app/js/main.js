/**
 * Created by vfenyak on 11.06.17.
 */

// for menu toggle
function menu_toggle(header) {
    header.classList.toggle('show');
}


// button call

$("#call").on('click', function() {
    var link = "tel:18003334444";
    window.location.href = link;
});