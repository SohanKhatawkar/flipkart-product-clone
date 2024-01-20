import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const link = pathname.split('/').filter((x) => x)
  let path = ''
  return (
    <div>
      <Link to='/'>Home</Link>
      {link?.map((name, index) => {
        path += `/${name}`
        const isLast = index === link.length - 1
        return isLast ? (
          <span key={path}>/ {name}</span>
        ) : (
          <span key={path}>
            <Link to={path}>/ {name}</Link>
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
