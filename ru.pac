function FindProxyForURL(url, host) {
    // Проверка основного домена slack.com и всех его поддоменов
    if (dnsDomainIs(host, "slack.com") || shExpMatch(host, "*.slack.com")) {
        return "SOCKS5 127.0.0.1:1080";
    }
    return "DIRECT";
}
