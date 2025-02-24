import React from "react";
import OptionStringItem from "./Item";
import style from "./Option.module.css";

const Option: React.FC = () => {
  return (
    <>
      <h1>Text Structify - Options</h1>

      <h2 className={style["opt-group-title"]}>Gemini API</h2>
      <ul className={style["items"]}>
        <OptionStringItem keyName="geminiApiKey" label="API Key" />
      </ul>

      <h2 className={style["opt-group-title"]}>OpenAI API</h2>
      <ul className={style["items"]}>
        <OptionStringItem keyName="openaiApiUrl" label="Endpoint" />
        <OptionStringItem keyName="openaiApiKey" label="API Key" />
      </ul>
    </>
  );
};

export default Option;
