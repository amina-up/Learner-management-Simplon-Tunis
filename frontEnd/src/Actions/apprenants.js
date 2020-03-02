import axios from "axios";
import {
  GET_APPRENANTS,
  ADD_APPRENANT,
  UPDATE_APPRENANT,
  DELETE_APPRENANT
} from "./actionTypes";

export const getApprenants = searchByName => async dispatch => {
  try {
    const res = searchByName
      ? await axios.get(`/apprenants?name=${searchByName}`)
      : await axios.get(`/apprenants`);
    dispatch({
      type: GET_APPRENANTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const addApprenant = (name, email) => async dispatch => {
  try {
    const res = await axios.post("/apprenants", {
      name,
      email
    });
    dispatch({
      type: ADD_APPRENANT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateApprenant = (id, name, email) => async dispatch => {
  try {
    const res = await axios.put(`/apprenants/${id}`, {
      name,
      email
    });
    dispatch({
      type: UPDATE_APPRENANT,
      payload: { id, apprenant: res.data }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteApprenant = id => async dispatch => {
  try {
    await axios.delete(`/apprenants/${id}`);
    dispatch({
      type: DELETE_APPRENANT,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};
