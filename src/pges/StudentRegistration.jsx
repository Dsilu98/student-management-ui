import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";

import { useStudents } from "../hooks/useStudents";

const StudentRegistration = () => {
  const [errors, setErrors] = useState({});
  const { saveStudent, error } = useStudents();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if(!formData.name.trim()){
        validationErrors.name = "Name is required";
    }

    if(!formData.age.trim() || isNaN(formData.age)){
        validationErrors.age = "Valid age is required";
    }

    if(Object.keys(validationErrors).length > 0){
        setErrors(validationErrors);
        return;
    }

    setErrors({});
    await saveStudent(formData);
    setFormData({ name: "", age: "" });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">Student Registration</Typography>
        <Stack
          spacing={2}
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2 }}
          noValidate
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            error={!!errors.age}
            helperText={errors.age}
          />
          <Button type="submit" variant="contained">
            Register
          </Button>
          {error && <Typography color="error">{error.message}</Typography>}
        </Stack>
      </Paper>
    </Container>
  );
};

export default StudentRegistration;
