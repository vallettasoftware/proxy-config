const PROXY_DOMAINS = [
    "slack.com",
    "upwork.com",
    "google.com",
    "atlassian.net",
    "whatismyipaddress.com" // для теста
]
function FindProxyForURL(url, host) {
    // Проверка основного домена и всех его поддоменов
    const useProxy = PROXY_DOMAINS.some(domain =>
        dnsDomainIs(host, domain) || shExpMatch(host, "*." + domain)
    );

    if (useProxy) {
        return "SOCKS5 127.0.0.1:1086";  // Прокси-сервер Shadowsocks на локальном хосте, порт 1086
    }
    // Все остальные домены идут напрямую
    return "DIRECT";
}
