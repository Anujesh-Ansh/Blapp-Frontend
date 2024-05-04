import React,{useState} from 'react'
import { Navigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'
import Editor from '../components/Editor';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles ] = useState('');
    const [redirect, setRedirect] = useState(false);

    
    async function createNewPost(ev){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('files', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        });
        
        if(response.ok){
            alert('Post created')
            setRedirect(true)
        }else{
            alert('Failed to create post')
        }
        
    }

    if (redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <form className="createPostArea" onSubmit={createNewPost}>
            <input type="title" placeholder={'Title'} value={title} onChange={ev=> setTitle(ev.target.value)} />
            <input type="summary" placeholder={'Summary'} value={summary} onChange={ev=> setSummary(ev.target.value)}/>
            <input type="file" onChange={ev => setFiles(ev.target.files)}/>
            <Editor onChange={setContent} value={content}/>
            <button>Create</button>

        </form>
    )
}

export default CreatePostPage






// import React,{useState} from 'react'
// import { Navigate } from 'react-router-dom';
// import 'react-quill/dist/quill.snow.css'
// import Editor from '../components/Editor';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/storage';

// const CreatePostPage = () => {
//     const [title, setTitle] = useState('');
//     const [summary, setSummary] = useState('');
//     const [content, setContent] = useState('');
//     const [files, setFiles ] = useState('');
//     const [redirect, setRedirect] = useState(false);

    
//     async function createNewPost(ev){
//         const data = new FormData();
//         data.set('title', title);
//         data.set('summary', summary);
//         data.set('content', content);
//         data.set('files', files[0]);
//         ev.preventDefault();
//         const response = await fetch('http://localhost:4000/post', {
//             method: 'POST',
//             body: data,
//             credentials: 'include'
//         });
        
//         if(response.ok){
//             alert('Post created')
//             setRedirect(true)
//         }else{
//             alert('Failed to create post')
//         }
        
//     }

//     if (redirect){
//         return <Navigate to={'/'}/>
//     }

//     const handleFileUpload = (ev) =>{
//         const selectFile = ev.target.files[0];
//         if(selectFile){
//             const storageRef = firebase.storage().ref();
//             const fileRef = storageRef.child(selectFile.name);
//             fileRef.put(selectFile).then((snapshot)=>{
//                 snapshot.ref.getDownloadURL().then((downloadURL) => {
//                     console.log('File available at', downloadURL);
//                     setFiles(downloadURL);
//                 })

//             })
//         }else {
//             console.log('No file selected')
//         }
//     }

//     return (
//         <form className="createPostArea" onSubmit={createNewPost}>
//             <input type="title" placeholder={'Title'} value={title} onChange={ev=> setTitle(ev.target.value)} />
//             <input type="summary" placeholder={'Summary'} value={summary} onChange={ev=> setSummary(ev.target.value)}/>
//             <input type="file" onChange={handleFileUpload}/>
//             <Editor onChange={setContent} value={content}/>
//             <button>Create</button>

//         </form>
//     )
// }

// export default CreatePostPage