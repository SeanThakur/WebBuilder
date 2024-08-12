"use client";
import { Button } from "@/components/ui/button";
import { useEditor } from "@/provider/editor/editor-provider";
import clsx from "clsx";
import { EyeOff } from "lucide-react";
import React from "react";
import Recursive from "./_components/recursive";

const Editor = () => {
  const { dispatch, state } = useEditor();

  const handleClick = () => {
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {},
    });
  };

  const handleUnpreview = () => {
    dispatch({ type: "TOGGLE_PREVIEW_MODE" });
  };
  return (
    <div
      className={clsx(
        "use-automation-zoom-in h-full overflow-scroll mr-[385px] bg-background transition-all rounded-md",
        {
          "!p-0 !mr-0": state.editor.previewMode === true,
          "!w-[850px]": state.editor.device === "Tablet",
          "!w-[420px]": state.editor.device === "Mobile",
          "w-full": state.editor.device === "Desktop",
        }
      )}
      onClick={handleClick}
    >
      {state.editor.previewMode && (
        <Button
          variant={"ghost"}
          size={"icon"}
          className="w-6 h-6 bg-slate-600 p-[2px] fixed top-6 left-6 z-[100]"
          onClick={handleUnpreview}
        >
          <EyeOff />
        </Button>
      )}
      {Array.isArray(state.editor.elements) &&
        state.editor.elements.map((childElement) => (
          <Recursive key={childElement.id} element={childElement} />
        ))}
    </div>
  );
};

export default Editor;
