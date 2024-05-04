function FindProxyForURL(url, host) { 
// If the hostname matches, use below proxies, in fail-over order.
    if (dnsDomainIs(host, "youtube.com") || 
        shExpMatch(host, "(*.youtube.com|youtube.com)")) 
    return "PROXY 4.5.6.7:8080; PROXY 7.8.9.10:8080"; }
