import axios from "axios";
import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from "./actionTypes";

export const getComments = (apprenant_id, apprenant) => async dispatch => {
  try {
    const res = apprenant
      ? await axios.get(`/comments/${apprenant_id} }?name=${apprenant}`)
      : await axios.get(`/comments/${apprenant_id}`);
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const addComment = (apprenant_id, option, text) => async dispatch => {
  try {
    const res = await axios.post("/comments", { apprenant_id, option, text });
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCommet = (option, text) => async dispatch => {
  try {
    const res = await axios.put("/comments/", {
      option,
      text
    });
    dispatch({
      type: UPDATE_COMMENT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = id => async dispatch => {
  try {
    await axios.delete(`/comments/${id}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};
