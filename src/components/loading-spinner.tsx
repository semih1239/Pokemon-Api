import { CircularProgress } from '@material-ui/core'
import React, { ReactNode } from 'react'

interface Props {
    loading: boolean
    children: ReactNode
}

export function Spinner({ loading, children }: Props) {
    if (loading) {
        return <CircularProgress />
    }
    return <>{children}</>
}

export default Spinner
