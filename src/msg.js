import React from 'react';

const Msg = (props) => {
  // const className = props.checked ? 'checked' : '';

  return (
    <div className="msg">

      <div className="commenter-avatar">
        <div className="avatar">
          {props.id}
        </div>
      </div>

      <div className="comment-content">
        <p className="details">
          {props.date}

          <span
            className="alignrightspan"
            onClick={props.delComment}
          >
            {props.delComment}
            Delete
          </span>

        </p>

        <h4>
          {props.author}
          <br />

        </h4>

        <p>
          {props.text}
        </p>
      </div>

    </div>
  )
}

export default Msg;
