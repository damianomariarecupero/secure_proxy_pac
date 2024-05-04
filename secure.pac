function FindProxyForURL(url)
{
    if (shExpMatch(url,"https://www.youtube.com") )
    return alert("PROXY 127.0.0.1:8080");
}