import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
import { getOne } from './get';

export const deleteData = async (id) => {
    const { firstName, lastName } = await getOne(id);

    const confirmed = window.confirm(`Are you sure you want to delete user ${firstName} ${lastName}?`);
    if (!confirmed) return;

    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}