import React from "react";
import ErrorHandleItem from "./ErrorHandleItem";
import { validatePassword } from "../heperAuth/authfunctions";

const ErrorHandle = ({ values }) => {
  const errorTips = validatePassword(values);
  return (
    <div>
      <ul>
        {Object.values(errorTips).map(({ error, text }) => (
          <ErrorHandleItem
            key={text}
            text={text}
            error={error}
            len={values.password.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default ErrorHandle;
