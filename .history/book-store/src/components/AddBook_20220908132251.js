import { FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddBook = () => {
  return (
<form>
    <Box display='flex' flex-direction='column' justify-content={center} maxWidth={700}>
    <FormLabel>Name</FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='name'/>
<FormLabel>author</FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='author'/>
<FormLabel>Description</FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='description'/>
<FormLabel>Price</FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='price'/>
</Box>

  </form>
  
  ) ;
};

export default AddBook;
