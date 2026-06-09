import {useState} from 'react';
import {createStudent,getAllStudents} from '../api/studentService';

export const useStudents = () => {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllStudents();
            setStudents(data);
        }catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    };

    const saveStudent = async (payload) => {
        try {
            setLoading(true);
            setError(null);
            const data = await createStudent(payload);
            setStudent(data);
            return data;
        }catch (err) {
            setError(err);
        }finally {
            setLoading(false);
        }
    };

    return {
        students,
        student,
        loading,
        fetchStudents,
        saveStudent,
        error
    };
}