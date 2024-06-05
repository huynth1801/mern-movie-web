import { useDispatch, useSelector } from 'react-redux'
import { setAuthModalOpen } from '../../redux/features/authModalSlice'
import React, { ReactElement, ReactNode, useEffect } from 'react'
import { RootState } from '../../redux/store'

interface ProtectedPageProps {
  children: ReactElement
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(setAuthModalOpen(!user))
  }, [user, dispatch])
  return user ? children : null
}

export default ProtectedPage
