
export const NavBar = (): JSX.Element => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img className="w-28 h-28" src="/logo.png" alt="Logo" />
        </div>
      </div>
    </nav>
  )
}