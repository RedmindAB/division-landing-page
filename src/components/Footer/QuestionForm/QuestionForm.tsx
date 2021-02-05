import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Spacer } from '../../../theme/base'
import { Body1 } from '../../../theme/typography'
import MaterialInput from '../../__general/MaterialInput'
import { Row } from '../styled'
import * as S from './styled'

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
      <S.QuestionFormRow>
        <Body1 uppercase>Say hello!</Body1>
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
        <div />
        <span className="question-input">
          <MaterialInput
            label="Question"
            name="question"
            ref={register({
              required: true,
            })}
          />
        </span>
      </S.QuestionFormRow>
      <Spacer h32 />
      <Row>
        <div />
        <S.Button role="submit" disabled={submitted}>
          {submitted ? 'Question sent!' : 'Send'}
        </S.Button>
      </Row>
      <Spacer h32 />
    </S.Container>
  )
}

export default QuestionForm
