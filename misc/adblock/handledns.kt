fun modifyDnsResponse(response: DnsResponse): DnsResponse {
    if (interceptRequest(response.domain)) {
        return DnsResponse(response.domain, "0.0.0.0")
    }
    return response
}
