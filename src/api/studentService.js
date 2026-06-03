import axiosClient from "./axiosClient";
import {API_ENDPOINTS} from "../constants/apiConstants";

export const createstudent = async (studentData) => {
    const response = await axiosClient.post(
        API_ENDPOINTS.STUDENTS,
        studentData
    );
    return response.data;
}

export const getAllStudents = async () => {
    const response = await axiosClient.get(API_ENDPOINTS.STUDENTS);
    return response.data;
}