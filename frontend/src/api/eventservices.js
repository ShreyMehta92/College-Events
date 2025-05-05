import axios from 'axios';

const API_URL = '/api/events';

export const deleteQRCode = async (id) => {
    try {
      const axiosInstance = createAxiosInstance();
      const response = await axiosInstance.delete(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  };