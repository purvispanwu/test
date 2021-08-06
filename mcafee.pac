var Proxy = "PROXY 106.52.155.133:80;
function FindProxyForURL(url, host)
{
// 如果访问的链接是内网，直接连接
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.255.0.0") ||    
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
// 如果访问的域名是sf，直接连接
	if (dnsDomainIs(host, "sf-express.com")
        return "DIRECT";
		
// 如果访问的域名是其他，通过代理连接		
	else
	
		return Proxy;
   
}
