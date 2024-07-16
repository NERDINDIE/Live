// SettingsActivity.kt
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_settings.*

class SettingsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_settings)

        btnGeneral.setOnClickListener { showTab("general") }
        btnAccount.setOnClickListener { showTab("account") }
        btnPrivacy.setOnClickListener { showTab("privacy") }
    }

    private fun showTab(tabName: String) {
        layoutGeneral.visibility = View.GONE
        layoutAccount.visibility = View.GONE
        layoutPrivacy.visibility = View.GONE

        when (tabName) {
            "general" -> layoutGeneral.visibility = View.VISIBLE
            "account" -> layoutAccount.visibility = View.VISIBLE
            "privacy" -> layoutPrivacy.visibility = View.VISIBLE
        }
    }
}
