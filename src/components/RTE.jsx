import React from 'react'
import { Controller } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import MathType from '@wiris/mathtype-ckeditor5/dist/browser/index.js';
import '@wiris/mathtype-ckeditor5/dist/browser/index.css';
import 'ckeditor5/ckeditor5.css';
// import './ckeditor5.css';
// import "./../../content.css";
// import "./../../demo.css";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
  FontColor,
  CodeBlock,
  Code,
  FontSize,
  WordCount,
  FontBackgroundColor,

} from 'ckeditor5';


export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <div className='w-full h-full bg-red-400 prose md:prose-xl'>
        <Controller
          name={name || "content"}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, value } }) => (
            <CKEditor
              editor={ClassicEditor}
              config={{
                toolbar: [
                  'undo', 'redo', '|',
                  'heading', '|', 'bold', 'italic', 'fontColor', '|',
                  'link', 'insertTable', 'mediaEmbed', '|',
                  'bulletedList', 'numberedList', 'indent', 'outdent', 'code', 'MathType', 'ChemType', '|', 'fontBackgroundColor', 'fontSize',
                ],
                initialData: value,
                plugins: [
                  Bold,
                  Essentials,
                  Heading,
                  FontSize,
                  Indent,
                  IndentBlock,
                  Italic,
                  Link,
                  List,
                  MediaEmbed,
                  Paragraph,
                  Table,
                  Undo,
                  FontColor,
                  CodeBlock,
                  Code,
                  MathType,
                  WordCount,
                  FontBackgroundColor,
                ],
                licenseKey: 'GPL',

                fontSize: {
                  options: [
                    {
                      title: 'Tiny',
                      model: '10px'
                    },
                    {
                      title: 'Small',
                      model: '12px'
                    },
                    {
                      title: 'Normal',
                      model: '14px'
                    },
                    {
                      title: 'Medium',
                      model: '16px'
                    },
                    {
                      title: 'Large',
                      model: '18px'
                    },
                    {
                      title: 'Extra Large',
                      model: '20px'
                    },
                    {
                      title: 'Huge',
                      model: '24px'
                    },
                    {
                      title: 'Massive',
                      model: '28px'
                    },
                    {
                      title: 'Gigantic',
                      model: '32px'
                    },
                  ]
                }
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
              }}
            />
          )}
        />
      </div>
    </div>
  )
}

