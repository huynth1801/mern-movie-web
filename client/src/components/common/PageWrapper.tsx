import React, { useEffect, ReactNode, ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { setAppState } from '../../redux/features/appStateSlice'
import { RootState } from '../../redux/store'

interface PageWrapperProps {
  state: string
  children: ReactElement
}

const PageWrapper = ({ state, children }: PageWrapperProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setAppState(state))
  }, [state, dispatch])

  return <>{children}</>
}

export default PageWrapper
