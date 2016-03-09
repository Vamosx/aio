function vyFunction()
{
links_list = document.links;
links_list_length = links_list.length;

new_win = window.open();
new_win_doc = new_win.document;

new_win_doc.open();
new_win_doc.write(' <pre style="color: #111; font: 16px/1.82 Sans-serif;">');

for ( i = 0; i < links_list_length; i++ ) {
    new_win_doc.write( links_list[i] + '\n');
}

new_win_doc.write(' </pre> ');
new_win_doc.close();


void(0);
}
