import { useState } from 'react'
import Styles from 'assets/css/Radio.module.scss'

import RadioButton from 'components/RadioButton'

export default function App() {

  const [ isLinkUrl, setIsLinkUrl ] = useState(false)

  const radioData = [
    { label: '없음', value: false },
    { label: '있음', value: true }
  ]

  const linkChange = e => {
    const { value } = e.target
    const selected = radioData.find((v) => v.label === value)
    setIsLinkUrl(selected.value)
  }

  return (
    <>
      <div className={Styles.TextAlign}>
        <h3>간단 라디오 </h3>
        <article>
          <RadioButton
            className='radio-box'
            name={'use'}
            radioData={ radioData }
            selected={ isLinkUrl }
            changeHandler={ linkChange }
          />
        </article>
      </div>
    </>
  )
}
