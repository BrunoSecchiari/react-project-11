import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import styles from './EventForm.module.css';

const EventForm = ({ method, event }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('..');
  };

  return (
    <Form method={method} className={styles.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          name='title'
          defaultValue={event && event.title}
          required
        />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input
          id='image'
          type='url'
          name='image'
          defaultValue={event && event.image}
          required
        />
      </p>
      <p>
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type='date'
          name='date'
          defaultValue={event && event.date}
          required
        />
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          rows='5'
          defaultValue={event && event.description}
        />
      </p>
      <div className={styles.actions}>
        <button type='button' onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>Save</button>
      </div>
    </Form>
  );
};

export default EventForm;
