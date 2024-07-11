import Foundation

func main() {
    let html = """
        <html>
            <head>
                <title>My Title</title>
            </head>
            <body>
                <h1>Welcome to My Page</h1>
                <p>This is a paragraph.</p>
            </body>
        </html>
    """

    let swiftCode = convertHtmlToSwift(html: html)
    print(swiftCode)
}

func convertHtmlToSwift(html: String) -> String {
    var swiftCode = html
    let replacements: [String: String] = [
        "<html>": "Html {",
        "</html>": "}",
        "<head>": "Head {",
        "</head>": "}",
        "<body>": "Body {",
        "</body>": "}",
        "<title>": "Title(\"",
        "</title>": "\")",
        "<h1>": "H1(\"",
        "</h1>": "\")",
        "<p>": "P(\"",
        "</p>": "\")"
    ]

    for (htmlTag, swiftReplacement) in replacements {
        swiftCode = swiftCode.replacingOccurrences(of: htmlTag, with: swiftReplacement)
    }

    return swiftCode
}

main()
