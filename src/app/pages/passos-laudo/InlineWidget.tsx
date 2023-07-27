import React, { FC, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface InlineWidgetProps {
  label: string;
  name: string;
  onEditorChange: (value: string) => void;
}

const InlineWidget: FC<InlineWidgetProps> = ({ label, name, onEditorChange }) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setData('');
    }
  }, [name]);

  return (
    <div className='text-black'>
      <label className='.form-label' htmlFor={name}>{label}</label>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor: any) => {
          editor.setData('');
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          onEditorChange(data);
        }}
      />
    </div>
  );
};

export default InlineWidget;