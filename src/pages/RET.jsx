import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import MathType from '@wiris/mathtype-ckeditor5/dist/browser/index.js';
import '@wiris/mathtype-ckeditor5/dist/browser/index.css';
import 'ckeditor5/ckeditor5.css';
// import './ckeditor5.css';
import "./../../content.css";
import "./../../demo.css";
import parse from "html-react-parser"

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


export default function RET() {
  const [editorData, setEditorData] = React.useState('');
  const [words, setWords] = React.useState({ word: 0, char: 0 });
  const [htmlData, setHtmlData] = React.useState("<h1>hello</h1>");
  const [lintarget, setLinkTarge] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Editor Data:', );
    setHtmlData(editorData);
    console.log(lintarget)
  };

  return (
    <>
      <form style={{ color: 'black' }} onSubmit={handleSubmit} className='ck-content'>
        <input type="checkbox" name="" id="" onClick={() => {
          setLinkTarge(!lintarget)}} />
        <p className='text-xl font-bold p-2 m-2 bg-amber-300 w-50 mx-auto'>word: {words.word}</p>
        <p className='text-xl font-bold p-2 m-2 bg-amber-300 w-50 mx-auto'>Char: {words.char}</p>
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'undo', 'redo', '|',
              'heading', '|', 'bold', 'italic', 'fontColor', '|',
              'link', 'insertTable', 'mediaEmbed', '|',
              'bulletedList', 'numberedList', 'indent', 'outdent', 'code', 'MathType', 'ChemType', '|', 'fontBackgroundColor', 'fontSize',
            ],
            initialData: '<h1>Hello from CKEditor 5!</h1>',
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
            wordCount: {
              displayWords: true,
              displayCharacters: true,
              onUpdate: ((data) => setWords({ word: data.words, char: data.characters }))
            },

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
            const data = editor.getData()
            setEditorData(data);
          }}



        />

        <button type="submit">Submit</button>
      </form>
      <div className="w-full mx-auto my-5 border-1 p-5 ck-content">
        {parse(htmlData)}
      </div>
    </>
  );
}