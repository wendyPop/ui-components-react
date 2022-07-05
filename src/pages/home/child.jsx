import { useLocation, useMatch, useParams } from 'react-router-dom'
import * as React from 'react'

const ChildHome = (props) => {

  console.log(props)
  const location = useLocation()
  // 파라미터를 가져온다

  const getParam = useParams()
  // :id를 가져온다.

  const isMatch = useMatch({ path: 'Home/ChildHome/child', end: true })
  // 현재 주소와 매치가되면 값을 반환

  console.log(location, getParam, isMatch)

  return (
    <div>
            asds
    </div>
  )
}

export default ChildHome
