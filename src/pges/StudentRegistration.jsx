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
  const { saveStudent } = useStudents();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default StudentRegistration;
