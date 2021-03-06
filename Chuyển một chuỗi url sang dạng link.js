function linkify(content)
{
    var replacedText, replacePattern1, replacePattern2;
 
    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = content.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
 
    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
 
    return replacedText;
}
 
console.log(linkify('https://chuyencuadev.com'));
//<a href="https://chuyencuadev.com" target="_blank">https://chuyencuadev.com</a>