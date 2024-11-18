import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createCourse } from '../api/mutations';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import config from '../aws-exports';

Amplify.configure(config);

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config

const Admin = ({signOut}) => {
    const [image, setImage] = useState(null);
    const [courseDetails, setCourseDetails] = useState({title: "", description: "", image: "", instructor: "", price: ""});

    const submitCourse = async (e) => {
        e.preventDefault();
        //setCourseDetails({id: "1",title: "aaa", description: "bbb", image: "./assets/elearning.jpg", instructor:"ccc", price:"21"});
        console.log(e);
        try{
            console.log("hello", courseDetails);
            //if (!courseDetails.title || !courseDetails.price) return
            console.log("worked", courseDetails);
            await API.graphql(graphqlOperation(createCourse, {input: courseDetails}))
            setCourseDetails({title: "", description: "", image: "", instructor: "", price: ""})             
        }catch(err){
            console.log("error:", err);
        }
    }

    const courseUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extn = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extn}`;
        const link = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
        try{
            //uploading the file to s3 with public access
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            //retrieve the uploaded file to display
            const image = await Storage.get(key, {level: 'public'});
            setImage(image);
            setCourseDetails({...courseDetails, image: link});
        }catch(err){
            console.log(err);
        }
    }

   /* async function handlesignout(){
        try{
            await signOut();
        }catch(err){
            console.log(err);
        }
    }*/

  return (
        <section className='admin-team'>
         {/*<Authenticator> */} 
         <section>
             <header className='form'>
                 <h2>Add New Course</h2>
                {/* <AmplifySignout></AmplifySignout>*/}
                <button onClick={signOut}>signOut</button>
             </header>
             <form className='course-form' onSubmit={submitCourse}>
                 <div className='form-image'>
                     {image ? <img className='preview' src={image} alt=""/> : <input
                     type="file"
                     accept="video/mp4,video/x-m4v,video/*"
                     onChange={(e) => courseUpload(e)} />}         
                 </div>
                 <div className='form-details'>
                     <div className='course-title'>
                         <p><label htmlFor='title'>Title</label></p>
                         <p>
                             <input name="email"
                             type="title"
                             placeholder="Type the title"
                             onChange={(e) => setCourseDetails({ ...courseDetails, title: e.target.value })}
                             required>                  
                             </input>
                         </p>                 
                     </div>
                     <div className='course-description'>
                         <p><label htmlFor='description'>Course Description</label></p>
                         <p><textarea
                         name="description"
                         type="text"
                         rows="3"
                         placeholder="Type the description of the course"
                         onChange={(e) => setCourseDetails({ ...courseDetails, description: e.target.value })}
                         required />
                         </p>
                     </div>
                     <div className='instructor-details'>
                         <p><label htmlFor='instructor'>Instructor Name</label></p>
                         <p><textarea
                         name="instructor"
                         type="text"
                         placeholder="Type the instructor's name"
                         onChange={(e) => setCourseDetails({ ...courseDetails, instructor: e.target.value })}
                         required />
                         </p>
                     </div>
                     <div className='price'>
                         <p><label htmlFor='price'>Price (CAD)</label></p>
                         <p><textarea
                         name="price"
                         type="text"
                         placeholder="Price of the course (CAD)"
                         onChange={(e) => setCourseDetails({ ...courseDetails, price: e.target.value })}
                         required />
                         </p>
                     </div>
                     <div className='popular-courseform'>
                         <p><label>Is it a Popular Course?</label>
                         <input type='checkbox'
                         className='popular-checkbox'
                         onChange={(e) => setCourseDetails({ ...courseDetails, popular: e.target.checked })}
                         checked={courseDetails.popular}>
                         </input>
                         </p>
                     </div>                
                     <div className="submit-form">
                         <button className="btn" type="submit">Submit Course Details</button>
                     </div>
                 </div>      
             </form>
         </section>
         {/*<Authenticator> */} 
        </section>
       )
     }  

export default withAuthenticator(Admin);
