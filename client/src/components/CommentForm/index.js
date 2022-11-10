import React, { useState } from "react";

import {useMutation} from '@apollo/client';
import {ADD_COMMENT} from '../../utils/mutations';

const CommentForm = ( photoId ) => {
  const [commentText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, {error}] = useMutation(ADD_COMMENT);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      //add thought to the database
      await addComment({
        variables: { commentText, photoId }
      });

      //clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
        {error && <span>Something went wrong...</span>}
      </p>
      <form
      onSubmit={handleFormSubmit}>
        <textarea
          placeholder="What would you like to say?"
          value={commentText}
          onChange={handleChange}
        ></textarea>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
