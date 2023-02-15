import { useEffect } from "react";
import { useState } from "react";

export const TypedText = () => {
  const text =
    "We work together with a list of amazing brands to create a fashion-forward future.";

  // Time intervals for typing and deleting
  const Deleting_Interval = 50;
  const Typing_Interval = 50;
  const Pause_Sleep_Time = 8000;

  const [typedText, setTypedText] = useState("");

  //   sliced text is the text that is being typed
  const slicedText = text.slice(0, typedText.length + 1);
  const deletedText = text.slice(0, typedText.length - 1);

  //   we use this to know if the text is still typing or not
  const textState = ["isTyping", "isDeleting"];
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText(slicedText);
    }, Typing_Interval);

    return () => clearTimeout(timeout);
  }, [typedText, slicedText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "isTyping" && typedText !== text) {
        setTypedText(slicedText);
      } else if (typedText === text && typing === "isTyping") {
        sleep(Pause_Sleep_Time).then(() => {
          setTyping(textState[1]);
        });
      }
    }, Typing_Interval);
    return () => clearTimeout(timeout);
  }, [typedText, typing, text, slicedText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        (typedText === text && typing === "isDeleting") ||
        typing === "isDeleting"
      ) {
        setTypedText(deletedText);
        if (typedText.length <= 2) {
          setTyping(textState[0]);
        }
      }
    }, Deleting_Interval);

    return () => clearTimeout(timeout);
  }, [typedText, slicedText, typing, deletedText]);

  return typedText;
};
