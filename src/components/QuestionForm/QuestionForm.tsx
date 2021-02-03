import React, { useState } from 'react'
import MaterialInput from '../__general/MaterialInput'
import { useForm } from 'react-hook-form'
import * as S from './styled'
import { Spacer } from '../../theme/base'

type Props = {}

const QuestionForm = () => {
  const {} = useForm()
  const { handleSubmit, register, formState, getValues, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data) => {
    try {
      console.log(data)
      reset()
      setSubmitted(true)
    } catch (error) {
      alert('Oj då! Ett fel uppstod, det gick inte att skicka iväg formuläret.')
    }
  }

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <MaterialInput
        label="Name"
        name="name"
        ref={register({
          required: true,
        })}
      />
      <MaterialInput
        label="E-mail"
        type="email"
        name="email"
        ref={register({
          required: true,
        })}
      />
      <MaterialInput
        label="Question"
        name="question"
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <S.Button role="submit" disabled={submitted}>
        {submitted ? 'Question sent!' : 'Send'}
      </S.Button>
    </S.Container>
  )
}

export default QuestionForm
