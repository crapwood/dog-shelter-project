import React, { PropsWithChildren } from "react";
import Navbar from "@/components/navbar";

const Layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar>
                {children}
            </Navbar>
        </div>

    );
}

// export default function RootLayout({ children, }: { children: React.ReactNode }) {
//     return (
//         <html lang="en">
//         <body>{children}</body>
//         </html>
//     )
// }

export default Layout;
