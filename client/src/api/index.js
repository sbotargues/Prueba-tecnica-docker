import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertPolitician = payload => api.post(`/politician`, payload)
export const getAllPoliticians = () => api.get(`/politicians`)
export const updatePoliticianById = (id, payload) => api.put(`/politician/${id}`, payload)
export const deletePoliticianById = id => api.delete(`/politician/${id}`)
export const getPoliticianById = id => api.get(`/politician/${id}`)

const apis = {
    insertPolitician,
    getAllPoliticians,
    updatePoliticianById,
    deletePoliticianById,
    getPoliticianById,
}

export default apis