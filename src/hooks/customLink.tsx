import { FC, ReactNode } from 'react'
import { Link, useResolvedPath, useMatch, LinkProps } from 'react-router-dom'

type Props = {
  children: ReactNode
} & LinkProps

export const CustomLink: FC<Props> = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({
    path: resolved.pathname,
    end: true,
  })

  return (
    <div>
      <Link style={{ color: match ? 'blue' : '' }} to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}
