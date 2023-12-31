import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box, Button, Container, TextField } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const operation = useSelector(selectIsLoading);

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newName) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }
    if (name === '' || number === '') {
      Notify.warning('Fields cannot be empty!');
      return;
    }
    try {
      await dispatch(addContact({ name: name, number: number })).unwrap();
      Notify.success(`${name} was added to your contacts`);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        p: 4,
        mb: 4,
        bgcolor: '#ffffff',
        borderRadius: '10px',
        boxShadow: 3,
      }}
    >
      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          size="small"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          type="tel"
          id="number"
          label="Phone Number"
          name="number"
          size="small"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          size="medium"
        >
          {operation === 'add' ? <Loader /> : <>Add contact</>}
        </Button>
      </Box>
    </Container>
  );
};
