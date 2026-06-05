import { useState } from 'react';
import { TableBody,Container,Typography,Table,TableHead,TableRow,TableCell, Button } from '@mui/material';
import { useStudents } from '../hooks/useStudents';

const StudentList = () => {
    const { students, fetchStudents, loading } = useStudents();
    const [formData, setFormData] = useState({
        name: "",
        id:""
    });

    //useEffect(() => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchStudents();
        setFormData({ name: "", id: "" });
    };

    return (
        <Container>
            <Typography variant="h4">Student List</Typography>
            {students.length > 0 && (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>

                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
            </Table>
            )}
            <Button variant="contained" onClick={handleSubmit} disabled={loading}>
                {loading ? "Loading..." : "Fetch Students"}
            </Button>
        </Container>
    );
};

export default StudentList;
