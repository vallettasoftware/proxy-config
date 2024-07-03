function FindProxyForURL(url, host) {
    if (
    dnsDomainIs(host, "slack.com") ||
    shExpMatch(host, "*.slack.com") ||
    dnsDomainIs(host, "whatismyipaddress.com") // for test
    ) {
        return "SOCKS5 127.0.0.1:1080";
    }
    return "DIRECT";
}
