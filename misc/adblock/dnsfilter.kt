class DnsInterceptor {

    private val blockedDomains = listOf("ads.example.com", "tracker.example.com")

    fun interceptRequest(domain: String): Boolean {
        return blockedDomains.contains(domain)
    }
}
