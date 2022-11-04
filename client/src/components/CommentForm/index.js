import React, { useState } from "react";
import {useMutation} from '@apollo/client';
import {ADD_COMMENT} from '../../utils/mutations';
import {QUERY_THOUGHTS, QUERY_ME} from '../../utils/queries';

const CommentForm = () => {
  const [thoughtText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addThought, {error}] = useMutation(ADD_COMMENT, {
    update(cache, {data: {addThought}}) {
      //could potentially not exist yet, so wrap in a try/catch
      try {
        //update me array's cache
        const {me} = cache.readQuery({query: QUERY_ME});
        cache.writeQuery({
          query: QUERY_ME,
          data: {me: {...me, thoughts: [...me.thoughts, addThought]}},
        });
      } catch (e) {
        console.warn('First thought insertion by user.')
      }
      //read whats currently in the cache
      const {thoughts} = cache.readQuery({query: QUERY_THOUGHTS});
      //prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_THOUGHTS,
        data: {thoughts: [addThought, ...thoughts]}
      });
    }
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      //add thought to the database
      await addThought({
        variables: {thoughtText}
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
        {error && <span className="ml-2">Uh oh, we've got a leak.</span>}
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch"
      onSubmit={handleFormSubmit}>
        <textarea
          placeholder="What would you like to say?"
          value={thoughtText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
