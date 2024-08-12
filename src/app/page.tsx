import Editor from "@/components/editor/main";
import EditorNavbar from "@/components/editor/navigation";
import SidebarProperties from "@/components/editor/sidebar-properties";
import EditorProvider from "@/provider/editor/editor-provider";

export default function Home() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider>
        <EditorNavbar />
        <div className="h-full flex justify-center">
          <Editor />
        </div>
        <SidebarProperties />
      </EditorProvider>
    </div>
  );
}
