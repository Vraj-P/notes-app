import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteNote();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteNote = async () => {
        const noteId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                method: "Delete"
            });

            router.push("/secure-index");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container">
            <Container className="view-note-bg">
                {isDeleting
                    ? <Loader active />
                    :
                    <>
                        <Typography style={{color:'#33322A'}} align="center" component="h3" variant="h3" gutterBottom>{note.title}</Typography>
                        <Typography style={{color:'#33322A'}} align="center" component="h5" variant="h5" gutterBottom>{note.description}</Typography>
                        <Button className="form-submit-btn" color='red' onClick={open}><Typography style={{color:'#33322A'}} align="center" component="h5" variant="h5">DELETE</Typography></Button>
                    </>
                }
                <Confirm
                    open={confirm}
                    onCancel={close}
                    onConfirm={handleDelete}
                />
            </Container>
        </div>
    )
}

Note.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default Note;