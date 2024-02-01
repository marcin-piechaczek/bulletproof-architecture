import 'tailwind-config/global.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body suppressHydrationWarning>{children}</body>
  </html>
);

export default RootLayout;
