const PROXY_DOMAINS = [
    "slack.com", // common
    "upwork.com", // common
    "google.com", // common
    "atlassian.net", // common
    "bitbucket.org",  // common
    "openai.com",
    "chatgpt.com",
    "linkedin.com", // HR
    "djinni.co", // HR
    "whatismyipaddress.com" // для теста
]
function FindProxyForURL(url, host) {
    // Проверка основного домена и всех его поддоменов
    const useProxy = PROXY_DOMAINS.some(domain =>
        dnsDomainIs(host, domain) || shExpMatch(host, "*." + domain)
    );

    if (useProxy) {
        return "SOCKS5 127.0.0.1:1080";
    }
    // Все остальные домены идут напрямую
    return "DIRECT";
}
