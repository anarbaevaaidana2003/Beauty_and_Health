import css from './index.module.scss'
import { Input } from '../../components/Input'
import { Segment } from '../../components/Segment'
import { Textarea } from '../../components/Textarea'
import { trpc } from '../../lib/trpc'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { zCreateIdeaTrpcInput } from '@forum_project/backend/src/router/createIdea/input'
export const NewIdeaPage = () => {
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
            await createIdea.mutateAsync(values)
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
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Create Idea'}
        </button>
          </form>
        </Segment>
      )
}