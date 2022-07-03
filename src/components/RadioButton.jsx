import PropTypes from 'prop-types'

const RadioButton = (props) => {

  let classNm = 'form-check'
  if (props.inline) {
    classNm = 'form-check form-check-inline'
  }

  return (
    <>
      { props.radioData.map( (v, i) => {
        return(
          <div className={classNm} key={i}>
            <input
              className={'form-check-input'}
              type="radio"
              name={props.name}
              id={v.label}
              value={ v.label}
              checked={ v.value === props.selected }
              onChange={ props.changeHandler }
            />
            <label
              className={'form-check-label'}
              htmlFor={ v.label}>
              {v.label}
            </label>
          </div>
        )
      })
      }
    </>
  )
}

RadioButton.propTypes = {
  inline: PropTypes.bool,
  radioData: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  selected: PropTypes.any
}

RadioButton.defaultProps = {
  inline: true,
  radioData: [],
  selected: null
}

export default RadioButton
