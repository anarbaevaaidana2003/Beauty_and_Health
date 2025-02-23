import css from './index.module.scss'
import { Input } from '../../components/Input'
import { Segment } from '../../components/Segment'
import { Textarea } from '../../components/Textarea'
import { trpc } from '../../lib/trpc'
import { useState } from 'react'
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
        <Segment title="New Idea">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              formik.handleSubmit()
            }}
          >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />
        {!formik.isValid && !!formik.submitCount && <div style={{ color: 'red' }}>Какие-то поля не заполнены</div>}
        {!!submittingError && <div style={{ color: 'red' }}>{submittingError}</div>}
        {successMessageVisible && <div style={{ color: 'green' }}>Idea created!</div>}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Create Idea'}
        </button>
          </form>
        </Segment>
      )
}