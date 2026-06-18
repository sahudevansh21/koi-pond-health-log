import './globals.css';

export const metadata = {
  title: 'Koi Pond Health Log',
  description: 'Track water parameters and disease outbreaks for your koi pond.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}