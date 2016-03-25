function translate()
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
        var element_str = element.innerHTML;
        var id = element.getAttribute('id');
        if (id != null) element_str = id;
        var translation_str = my_lang[0][element_str];
        if (translation_str != "" & translation_str !== undefined) {
            element.innerHTML = translation_str;
        }
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