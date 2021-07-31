import React from 'react'
import Card from '../ui/Card'
import classes from "./NewMeetupForm.module.css"
import { useRef } from 'react'

const NewMeetupForm = () => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const submitHandler = ((event) => {
        event.preventDefault()

        const titleInput = titleInputRef.current.value
        const imageInput = imageInputRef.current.value
        const addressInput = addressInputRef.current.value
        const descriptionInput = descriptionInputRef.current.value

        const newMeetupData = {
            title: {titleInput},
            image: {imageInput},
            address: {addressInput},
            description: {descriptionInput}
        }

        console.log(newMeetupData);
    })

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea required id="description" required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm
