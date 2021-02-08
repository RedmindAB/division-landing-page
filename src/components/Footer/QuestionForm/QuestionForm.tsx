import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Spacer } from '../../../theme/base'
import axios, { AxiosRequestConfig } from 'axios'
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
      const form = document.querySelector<HTMLFormElement>('#contact-form')
      const formData = new FormData(form)
      const body = new URLSearchParams(formData as any).toString()

      const opts: AxiosRequestConfig = {
        url: '/',
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: body,
      }

      await axios(opts)

      reset()
      setSubmitted(true)
    } catch (error) {
      alert('Oj då! Ett fel uppstod, det gick inte att skicka iväg formuläret.')
    }
  }

  return (
    <S.Container
      name="contact"
      netlify
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <S.QuestionFormRow>
        <Body1 uppercase>Say hello!</Body1>
        <input type="hidden" name="form-name" value="contact" />
        <S.FormGrid>
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
        </S.FormGrid>
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
