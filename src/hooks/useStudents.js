import {useState} from 'react';
import {createStudent,getAllStudents} from '../api/studentService';

export const useStudents = () => {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await getAllStudents();
            setStudents(data);
        }finally {
            setLoading(false);
        }
    };

    const saveStudent = async (payload) => {
        try {
            setLoading(true);
            await createStudent(payload);
        }finally {
            setLoading(false);
        }
    };

    return {
        students,
        student,
        loading,
        fetchStudents,
        saveStudent
    };
}