class AdBlockerVpnService : VpnService() {

    override fun onCreate() {
        super.onCreate()
        setupVpn()
    }

    private fun setupVpn() {
        val builder = Builder()
        builder.addAddress("10.0.0.2", 24)
        builder.addDnsServer("8.8.8.8")
        builder.addRoute("0.0.0.0", 0)

        val vpnInterface = builder.establish()
    }
}
