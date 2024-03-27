import './globals.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Footer } from '@/src/widgets/footer'
import { ProviderAuth } from '@/src/app/provider'
import HeaderLoader from '@/src/widgets/header/ui/pre-loader/HeaderLoader'

const Header = dynamic(() => import('@/src/widgets/header'), {
  loading: () => <HeaderLoader />,
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Интернет магазин видеонаблюдения город Краснодар',
  description:
    'В нашем магазине вы можете выбрать из более чем 10000 камер и видеорегистраторов для видеонаблюдения.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <body>
        <ProviderAuth>
          <Header />
          <main>{children}</main>
          <Footer />
        </ProviderAuth>
      </body>
    </html>
  )
}
