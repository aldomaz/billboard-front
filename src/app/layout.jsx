'use client'

import { Barlow} from '@next/font/google';
import { RecoilRoot } from 'recoil';
import './globals.css'

const font = Barlow({
    weight: ['400', '700'],
    subsets: ['latin']
})

export default function RootLayout({ children }) {

    return (
        <html lang="en" className={font.className}>
            <head/>
            <body>
                <RecoilRoot>
                    {children}
                </RecoilRoot>
            </body>
        </html>
    )
}
