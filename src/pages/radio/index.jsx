import { useState } from 'react'
import Styles from 'assets/css/Radio.module.scss'

import RadioButton from 'components/RadioButton'

export default function App() {

  const [ isLinkUrl, setIsLinkUrl ] = useState(false)

  const radioData = [
    { label: '없음', value: false },
    { label: '있음', value: true }
  ]

  const linkChange = (e) => {
    const { value } = e.target
    const selected = radioData.find((v) => v.label === value)
    setIsLinkUrl(selected.value)
  }

  return (
    <>
      <div className={Styles.bgColor}>
        <p className={Styles.Box}>간단 라디오 </p>
        <section>
          <RadioButton
            className='radio-box'
            inline={true}
            name={'use'}
            radioData={radioData}
            selected={isLinkUrl}
            changeHandler={linkChange}
          />
        </section>
      </div>
    </>
  )
}
