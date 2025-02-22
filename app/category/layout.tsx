import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Каталог товаров',
  description:
    'Продажа оборудования для охранных систем безопасности. Низкие цены, доставка, установка, гарантия.',
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
