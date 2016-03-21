function loaded()
{
	var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;

	//alert(lang);
        var my_lang = localization[lang];
        if (my_lang == null) 
        {
            my_lang = localization.english;
        }

    var elements= document.getElementsByClassName('i18n');
    for (var i = 0; i < elements.length; i++) 
    {
        var element = elements[i];
        var id = element.getAttribute('id');
        var string = element.innerHTML;
        if (id != null) string = id;
        var item = my_lang[0][string];
        element.innerHTML = (item == null) ? element.innerHTML : item;
    }

}


/* Some helper functions: */
function getParameterValue(parameter)
{
	parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + parameter + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
	    return "";
	else
	    return results[1];
}