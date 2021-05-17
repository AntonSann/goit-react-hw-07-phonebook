import axios from 'axios';
import {fetchContactRequest, fetchContactSuccess, fetchContactError, 
  addContactRequest, addContactSuccess, addContactError, 
  deleteContactRequest, deleteContactSuccess, deleteContactError, } from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest);

axios
.get('/contacts')
.then(({data}) => dispatch(fetchContactSuccess(data)))
.catch(error => dispatch(fetchContactError(error)));
}

const addContact = text => dispatch => {
    const contact = {...text};

    dispatch(addContactRequest);
  axios
  .post('/contacts', contact)
  .then(({data}) => dispatch(addContactSuccess(data)))
  .catch(error => dispatch(addContactError(error)));
  }

  const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest);

    axios
    .delete(`/contacts/${id}` )
    .then(({id}) => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
  }; 

  export default {fetchContacts, addContact, deleteContact};