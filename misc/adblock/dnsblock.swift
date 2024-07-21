class DnsInterceptor {

    let blockedDomains = ["ads.example.com", "tracker.example.com"]

    func interceptRequest(domain: String) -> Bool {
        return blockedDomains.contains(domain)
    }
}
