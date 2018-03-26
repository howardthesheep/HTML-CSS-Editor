var toggled = 1;

function updateHTML()
{
    var myframe = $('#previewFrame').contents().find('body');
    var htmlinput = $('#htmlInput').val();
    var cssinput = $('#cssInput').val();
    
    if(toggled)
    {
        myframe.html(htmlinput + '<style>' + cssinput + '</style>');
    }
    else
    {
        myframe.html(htmlinput);
    }
    
    
}

function htmlListener()
{
    $('#htmlInput').html('<h3> Hello! </h3> <p> applied? </p>');
}

function cssListener()
{
    $('#cssInput').html('h3 {color: blue; } p { font-family: cursive, arial; font-size: 25pt;}');
}

function toggleCSS(){
    if(toggled == 1)
        {
            toggled = 0;
            $('#toggleButton').css('color', 'red');
        }
    else{
        toggled = 1;
        $('#toggleButton').css('color', 'black');
    }
}

function clearText()
{
    $('textarea').val('');
    $('#previewFrame').contents().find('body').html('');
}

function changeTitle()
{
    var name = prompt("Name of the new title: ");
    if(name != null)
    {
        document.title = name;
    }
}

function updateIframe()
{
    updateHTML();
}