// Copy of import 'react-quill/dist/quill.snow.css'
import './Wysiwyg.css'

import React from 'react'
import ReactQuill from 'react-quill'

// const ColorClass = ReactQuill.Quill.import('attributors/class/color')
// const SizeStyle = ReactQuill.Quill.import('attributors/style/width')
// ReactQuill.Quill.register(ColorClass, true)
// ReactQuill.Quill.register(SizeStyle, true)

export default function Wysiwyg({ value, updateValue }) {
  return (
    <ReactQuill
      value={value}
      onChange={updateValue}
      modules={Wysiwyg.modules}
      formats={Wysiwyg.formats}
      placeholder="Write something..."
    />
  )
}

Wysiwyg.modules = {
  toolbar: [
    [
      { header: [2, 3, 4, 5, false] },
      { font: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block', 'code'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    // matchVisual: false,
  },
}

// Wysiwyg.formats = [
//   'header', 'font', 'size',
//   'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'code',
//   'list', 'bullet', 'indent',
//   'link', 'image', 'video',
// ]
