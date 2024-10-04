export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       <title>Next.js App</title>
       <meta name="description" content="This is a description of my Next.js app." />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                </head>
      <body>{children}</body>
    </html>
  )
}
