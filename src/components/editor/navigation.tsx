"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DeviceTypes, useEditor } from "@/provider/editor/editor-provider";
import clsx from "clsx";
import {
  ArrowLeftCircle,
  EyeIcon,
  Laptop,
  Redo2,
  Smartphone,
  Tablet,
  Undo2,
} from "lucide-react";
import React from "react";

const EditorNavbar = () => {
  const { state, dispatch } = useEditor();

  const handlePreviewClick = () => {
    dispatch({ type: "TOGGLE_PREVIEW_MODE" });
  };

  const handleUndo = () => {
    dispatch({ type: "UNDO" });
  };

  const handleRedo = () => {
    dispatch({ type: "REDO" });
  };

  return (
    <TooltipProvider>
      <nav
        className={clsx(
          "border-b-[1px] flex items-center justify-between p-2 gap-2 transition-all",
          { "!h-0 !p-0 !overflow-hidden": state.editor.previewMode }
        )}
      >
        <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
          <ArrowLeftCircle className="cursor-pointer" />
          <div className="flex flex-col w-full ">
            <span className="text-sm text-muted-foreground">Path: /</span>
          </div>
        </aside>
        <aside>
          <Tabs
            defaultValue="Desktop"
            className="w-fit "
            value={state.editor.device}
            onValueChange={(value) => {
              dispatch({
                type: "CHANGE_DEVICE",
                payload: { device: value as DeviceTypes },
              });
            }}
          >
            <TabsList className="grid w-full grid-cols-3 bg-transparent h-fit">
              <TabsTrigger
                value="Desktop"
                className="data-[state=active]:bg-muted w-10 h-10 p-0"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <Laptop />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Desktop</p>
                  </TooltipContent>
                </Tooltip>
              </TabsTrigger>
              <TabsTrigger
                value="Tablet"
                className="w-10 h-10 p-0 data-[state=active]:bg-muted"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <Tablet />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tablet</p>
                  </TooltipContent>
                </Tooltip>
              </TabsTrigger>
              <TabsTrigger
                value="Mobile"
                className="w-10 h-10 p-0 data-[state=active]:bg-muted"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <Smartphone />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mobile</p>
                  </TooltipContent>
                </Tooltip>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </aside>
        <aside className="flex items-center gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800"
            onClick={handlePreviewClick}
          >
            <EyeIcon />
          </Button>
          <Button
            disabled={!(state.history.currentIndex > 0)}
            onClick={handleUndo}
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800"
          >
            <Undo2 />
          </Button>
          <Button
            disabled={
              !(state.history.currentIndex < state.history.history.length - 1)
            }
            onClick={handleRedo}
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800 mr-4"
          >
            <Redo2 />
          </Button>
        </aside>
      </nav>
    </TooltipProvider>
  );
};

export default EditorNavbar;
