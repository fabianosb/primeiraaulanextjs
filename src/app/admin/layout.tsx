export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div>
        Cabeçalho do Layout do Admin
        {children}
      </div>
      <p>Painel de Administração</p>
    </div>
  )
}
