import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllData = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const getOne = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const getAllDataPaginated = async (page, perPage) => {
    const response = await axios.get(`${API_URL}?_page=${page}&_per_page=${perPage}`);
    return {data: response.data, total: response.headers["x-total-count"]};
};