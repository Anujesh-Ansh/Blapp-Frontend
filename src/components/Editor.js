import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
    
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ indent: '-1'}, { indent: '+1' }],
    
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
    
        ['clean'],
    ]
}

const formats = 
    [
        'header','size',
        'bold', 'italic', 'underline', 'strike',
        'align', 'list', 'indent',
        
        'link', 'image', 'video',
        'color', 'background',
        'clean',
    ];


const Editor = ({value,onChange}) => {

  return (
    <ReactQuill modules={modules} formats={formats} style={{backgroundColor: 'wheat', color: 'black', borderRadius:'10px'}} value={value} onChange={onChange}/>
  )
}

export default Editor