import React from 'react'
import { useForm } from "react-hook-form";


export default function AddNew() {
    const {
        register,
        handleSubmit,
        watch,
        //formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data)
      };
  return (
    <div className='row'>
        <h5>Add New Notice</h5>
        <div className='col-md-4 m-5 m-auto '>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <label>Name</label>
        
        <input
        className='form-control'
          {...register("Name", {
            required: true,
            maxLength: 20,
           
          })}
        />
        
        {/* {errors?.Name?.type === "required" && <p>This field is required</p>}
        {errors?.Name?.type === "maxLength" && (
          <p>Name cannot exceed 20 characters</p>
        )}
        {errors?.Name?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )} */}
        <label> Title</label>
        <input
         className='form-control'
        {...register("Title", )} />
        {/* {errors?.Title?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )} */}
       
        <label>Description</label>
        <input
         className='form-control'
        {...register("Description")} />
            <label>Full Description</label>
          
            <textarea
             className='form-control'
               {...register("FullDescription")}
              />
            
            <label>Pdf Upload</label>
        <input
         className='form-control'
        type="file" {...register("PdfUpload")} />
       
        <label>Image/Upload</label>
        <input
         className='form-control'
        type="file" {...register("FileUpload")} />
        <br/>
          
        <input className='btn btn-success form-control' type="submit" />
      </form>
        </div>
    </div>
  
  )
}
