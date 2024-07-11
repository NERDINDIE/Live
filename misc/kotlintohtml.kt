import java.util.regex.Pattern

fun main() {
    val html = """
        <html>
            <head>
                <title>My Title</title>
            </head>
            <body>
                <h1>Welcome to My Page</h1>
                <p>This is a paragraph.</p>
            </body>
        </html>
    """.trimIndent()

    val kotlinCode = convertHtmlToKotlin(html)
    println(kotlinCode)
}

fun convertHtmlToKotlin(html: String): String {
    var kotlinCode = html
    val replacements = mapOf(
        "<html>" to "Html {",
        "</html>" to "}",
        "<head>" to "Head {",
        "</head>" to "}",
        "<body>" to "Body {",
        "</body>" to "}",
        "<title>" to "Title(\"",
        "</title>" to "\")",
        "<h1>" to "H1(\"",
        "</h1>" to "\")",
        "<p>" to "P(\"",
        "</p>" to "\")"
    )

    replacements.forEach { (htmlTag, kotlinReplacement) ->
        kotlinCode = kotlinCode.replace(htmlTag, kotlinReplacement)
    }

    return kotlinCode
}
