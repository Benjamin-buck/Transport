import React from "react";

interface Props {
  label: string;
  input: string;
}

const CardField = ({ label, input }: Props) => {
  return (
    <div>
      <p>
        <span className="font-bold">{label}: </span> {input}
      </p>
    </div>
  );
};

export default CardField;
