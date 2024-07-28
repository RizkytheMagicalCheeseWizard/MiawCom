import "@/app/styles/globals.css";
export default function AuthLayout({
    children,}:{
        children:React.ReactNode;
    }) {
    return (
        <html lang="en">
      <body className="bg-hero-pattern bg-cover bg-center min-h-screen flex items-center justify-center ">{children}</body>
    </html>
    );
}