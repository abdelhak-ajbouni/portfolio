import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      // TODO: Add dark mode support
      <Html className='' lang="en">
        <Head />
        <body className='bg-[#f7ebd4] dark:bg-gray-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument