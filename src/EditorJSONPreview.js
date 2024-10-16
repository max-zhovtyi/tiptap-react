import { useCurrentEditor } from '@tiptap/react'

const EditorJSONPreview = () => {
  const { editor } = useCurrentEditor();
  
  const handleSaveEditor = () => {
    console.log('editor: ', JSON.stringify(editor.getJSON(), null, 2));
  }

  return <div>
    <button onClick={handleSaveEditor}>Save data</button>
  </div>;
}

export default EditorJSONPreview;