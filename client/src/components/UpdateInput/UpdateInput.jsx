import React from 'react'
import styles from './UpdateInput.module.css'
import EditButton from '../EditButton/EditButton'

const UpdateInput = ({
  label,
  id,
  value,
  defaultValue,
  type,
  name,
  onChange,
  placeholder,
  maxLength,
  pattern,
  minLength,
  onInvalid,
  onValid,
  readOnly
}) => {
  const [editable, setEditable] = React.useState(true)

  const handleEdit = () => {
    setEditable(!editable)
  }

  return (
    <div className={styles.input}>
      <div className={styles.input__container}>
        <label htmlFor={id}>{label}</label>
        <div className={styles.input__edit}>
          <input
            className={styles.input__field}
            type={type}
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            required
            placeholder={placeholder}
            pattern={pattern}
            maxLength={maxLength}
            minLength={minLength}
            onInvalid={onInvalid}
            onValid={onValid}
            readOnly={editable}
          />
          <EditButton onClick={handleEdit} enabled={!editable ? '1' : '0'} />
        </div>
      </div>
    </div>
  )
}

export default UpdateInput
