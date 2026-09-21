import { Link } from 'react-router'

type SidebarBrand = {
  href: string
  logoMarkSrc: string
  logoSrc: string
  name: string
}

type SidebarLogoProps = {
  brand: SidebarBrand
  isCollapsed: boolean
}

export function SidebarLogo({ brand, isCollapsed }: SidebarLogoProps) {
  return (
    <Link
      aria-label={`${brand.name} dashboard`}
      className={[
        'flex min-w-0 items-center text-crono-teal',
        isCollapsed ? 'justify-center' : '',
      ].join(' ')}
      to={brand.href}
    >
      <img
        alt={brand.name}
        className={[
          'w-auto',
          isCollapsed ? 'h-7 max-w-7' : 'h-7 max-w-31.5',
        ].join(' ')}
        src={isCollapsed ? brand.logoMarkSrc : brand.logoSrc}
      />
    </Link>
  )
}
