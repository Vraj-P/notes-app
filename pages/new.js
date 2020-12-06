import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"

const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createNote = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/secure-index");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.description) {
            err.description = 'Description is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <Container className="form-bg">
                <Typography style={{color:'#33322A'}} align="center" component="h3" variant="h3" gutterBottom>Create Note</Typography>
                <div>
                    {/*
                        isSubmitting
                            ? <Loader active inline='centered' />
                            : <Form onSubmit={handleSubmit}>
                                <Form.Input
                                    fluid
                                    error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                    label='Title'
                                    placeholder='Title'
                                    name='title'
                                    onChange={handleChange}
                                />
                                <Form.TextArea
                                    fluid
                                    label='Descriprtion'
                                    placeholder='Description'
                                    name='description'
                                    error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                                    onChange={handleChange}
                                />
                                <Button type='submit'>Create</Button>
                            </Form>
                    */}
                    <form noValidate autoComplete="off">
                        <TextField
                            className="textfield-title"
                            fullWidth = "true"
                            id="user-input-title"
                            label="Title"
                            multiline
                            rows={1}
                            placeholder = "Type Here..."
                            variant="filled"
                            autoComplete="off"
                            style={{color:'#33322A'}}
                        />
                        <TextField
                            className="textfield-content"
                            fullWidth = "true"
                            id="user-input-note"
                            label="Create Greatness"
                            multiline
                            rows={10}
                            placeholder = "Type Here..."
                            variant="filled"
                            autoComplete="off"
                            stye={{color:'#33322A'}}
                        />
                        <Button className="form-submit-btn" variant="outlined"><Typography style={{color:'#33322A'}} align="center" component="h5" variant="h5">SAVE</Typography></Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default NewNote;