import { React, useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "lorem ipsum dore in the sky.",
      fileSize: ".7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "lorem ipsum dore in the sky.",
      fileSize: ".7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "lorem ipsum dore in the sky.",
      fileSize: ".7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-10 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} refrence={ref} />
      ))}
    </div>
  );
};

export default Foreground;
