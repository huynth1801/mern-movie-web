import HomePage from '../components/pages/HomePage'
import PersonDetail from '../components/pages/PersonDetail'
import FavoriteList from '../components/pages/FavoriteList'
import MediaDetail from '../components/pages/MediaDetail'
import MediaList from '../components/pages/MediaList'
import MediaSearch from '../components/pages/MediaSearch'
import PasswordUpdate from '../components/pages/PasswordUpdate'
import ReviewList from '../components/pages/ReviewList'
import ProtectedPage from '../components/common/ProtectedPage'
import { ReactNode } from 'react'

interface RoutesProps {
  index?: boolean
  path?: string
  element: ReactNode
  state?: string
}

export const routesGen = {
  home: '/',
  mediaList: (type: string) => `/${type}`,
  mediaDetail: (type: string, id: number) => `/${type}/${id}`,
  mediaSearch: '/search',
  person: (id: number) => `/person/${id}`,
  favoriteList: '/favorites',
  reviewList: '/reviews',
  passwordUpdate: 'password-update',
}

const routes: RoutesProps[] = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
  },
  {
    path: '/person/:personId',
    element: <PersonDetail />,
    state: 'person.detail',
  },
  {
    path: '/search',
    element: <MediaSearch />,
    state: 'search',
  },
  {
    path: 'password-update',
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: 'password.update',
  },
  {
    path: '/favorites',
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: 'favorites',
  },
  {
    path: '/reviews',
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: 'reviews',
  },
  {
    path: '/:mediaType',
    element: <MediaList />,
  },
  {
    path: '/:mediaType/:mediaId',
    element: <MediaDetail />,
  },
]

export default routes
