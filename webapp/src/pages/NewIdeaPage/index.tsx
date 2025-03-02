import css from './index.module.scss'
import { Input } from '../../components/Input'
import { Segment } from '../../components/Segment'
import { Alert } from '../../components/Alert'
import { Textarea } from '../../components/Textarea'
import { trpc } from '../../lib/trpc'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { FormItems } from '../../components/FormItems'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { zCreateIdeaTrpcInput } from '@forum_project/backend/src/router/createIdea/input'
export const NewIdeaPage = () => {
    const [successMessageVisible, setSuccessMessageVisible] = useState(false)
    const [submittingError, setSubmittingError] = useState<string | null>(null)
    const createIdea = trpc.createIdea.useMutation()
    
    const formik = useFormik({
        initialValues: {
          name: '',
          nick: '',
          description: '',
          text: '',
        },
        validate: withZodSchema(zCreateIdeaTrpcInput),
        onSubmit: async (values) => {
            try {
                await createIdea.mutateAsync(values)
                formik.resetForm()
                setSuccessMessageVisible(true)
                setTimeout(() => {
                  setSuccessMessageVisible(false)
                }, 3000)
              } catch (error: any) {
                setSubmittingError(error.message)
                setTimeout(() => {
                  setSubmittingError(null)
                }, 3000)
              }
        },
      })
    
      return (
        <Segment title="Создать обсуждение">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              formik.handleSubmit()
            }}
          >
                <FormItems>
          <Input name="name" label="Заголовок" formik={formik} />
          <Input name="nick" label="Nick" formik={formik} />
          <Input name="description" label="Краткое описание" formik={formik} maxWidth={500} />
          <Textarea name="text" label="Текст" formik={formik} />
          {!formik.isValid && !!formik.submitCount && <div style={{ color: 'red' }}>Некоторые поля отсутствуют</div>}
          {!!submittingError && <Alert color="red">{submittingError}</Alert>}
          {successMessageVisible && <Alert color="green">Обсуждение создано!</Alert>}
          <Button loading={formik.isSubmitting}>Сохранить</Button>
        </FormItems>
          </form>
        </Segment>
      )
}