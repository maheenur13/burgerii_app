import { AdminLayout } from '@/components/layouts'
import React, { FC, ReactNode } from 'react'

type PropsType = {
  children:ReactNode;
}

const layout:FC<PropsType> = ({children}) => {
  return (
        <AdminLayout>{children}</AdminLayout>
  )
}

export default layout