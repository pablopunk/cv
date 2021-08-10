import Document, { Main, NextScript, Html, Head } from 'next/document'
import darkModeCode from 'dark-mode-code'

export default class extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: darkModeCode }} />
          <Main />
          <NextScript />
          <script data-goatcounter="/goat" async src="/count.js"></script>
        </body>
      </Html>
    )
  }
}
