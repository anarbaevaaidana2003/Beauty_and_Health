import css from './index.module.scss'
import { Input } from '../../components/Input'
import { Segment } from '../../components/Segment'
import { Textarea } from '../../components/Textarea'
import { useFormik } from 'formik'
export const NewIdeaPage = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          nick: '',
          description: '',
          text: '',
        },
        validate: (values) => {
            const errors: Partial<typeof values> = {}
            if (!values.name) {
              errors.name = 'Заполните имя'
            }
            if (!values.nick) {
              errors.nick = 'Заполните ник'
            } else if (!values.nick.match(/^[a-z0-9-]+$/)) {
              errors.nick = 'в нике могут быть только буквы и цифры и тире'
            }
            if (!values.description) {
              errors.description = 'Заполните описание'
            }
            if (!values.text) {
              errors.text = 'Заполните текст'
            } else if (values.text.length < 100) {
              errors.text = 'В текстк должно быть хотя бы 100 символов'
            }
            return errors
          },
        onSubmit: (values) => {
          console.info('Submitted', values)
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
            <button type="submit">Create Idea</button>
          </form>
        </Segment>
      )
}