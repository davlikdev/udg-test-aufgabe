import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {v4 as uuidv4} from 'uuid';
import Modal from '@mui/material/Modal';
import { useState} from "react";
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const NoteForm = ({setDataFile, dataFile}) => {
    const [open, setOpen] = useState(false);
    const [newNote, setNewNote] = useState({
        Hauptartikelnr: "",
        Artikelname: "",
        Hersteller: "",
        Beschreibung: "",
        Materialangaben: "",
        Geschlecht: "",
        Produktart: "",
        Ärmel: "",
        Bein: "",
        Kragen: "",
        Herstellung: "",
        Taschenart: "",
        Grammatur: "",
        Material: "",
        Urprungsland: "",
        Bildname: "",
    })
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addNewNote = () => {
        setDataFile([{...newNote, id: uuidv4()}, ...dataFile])
        setNewNote({
            Hauptartikelnr: "",
            Artikelname: "",
            Hersteller: "",
            Beschreibung: "",
            Materialangaben: "",
            Geschlecht: "",
            Produktart: "",
            Ärmel: "",
            Bein: "",
            Kragen: "",
            Herstellung: "",
            Taschenart: "",
            Grammatur: "",
            Material: "",
            Urprungsland: "",
            Bildname: "",
        })
        handleClose()
    }

    return (
        <div>
            <Button onClick={handleOpen}>neue Notiz hinzufügen</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    sx={style}
                    noValidate
                    autoComplete="off">
                    <TextField id="Nummer" label="Nummer" variant="standard"
                               value={newNote.Hauptartikelnr}
                               onChange={(e) => {
                                   setNewNote({...newNote, Hauptartikelnr: e.target.value})
                               }}
                    />
                    <TextField id="Name" label="Name" variant="standard"
                               value={newNote.Artikelname}
                               onChange={(e) => {
                                   setNewNote({...newNote, Artikelname: e.target.value})
                               }}
                    />
                    <TextField id="Hersteller" label="Hersteller" variant="standard"
                               value={newNote.Hersteller}
                               onChange={(e) => {
                                   setNewNote({...newNote, Hersteller: e.target.value})
                               }}
                    />
                    <TextField id="Beschreibung" label="Beschreibung" variant="standard"
                               value={newNote.Beschreibung}
                               onChange={(e) => {
                                   setNewNote({...newNote, Beschreibung: e.target.value})
                               }}
                    />
                    <TextField id="Materialangaben" label="Materialangaben" variant="standard"
                               value={newNote.Materialangaben}
                               onChange={(e) => {
                                   setNewNote({...newNote, Materialangaben: e.target.value})
                               }}
                    />
                    <TextField id="Geschlecht" label="Geschlecht" variant="standard"
                               value={newNote.Geschlecht}
                               onChange={(e) => {
                                   setNewNote({...newNote, Geschlecht: e.target.value})
                               }}
                    />
                    <TextField id="Produktart" label="Produktart" variant="standard"
                               value={newNote.Produktart}
                               onChange={(e) => {
                                   setNewNote({...newNote, Produktart: e.target.value})
                               }}
                    />
                    <TextField id="Ärmel" label="Ärmel" variant="standard"
                               value={newNote.Ärmel}
                               onChange={(e) => {
                                   setNewNote({...newNote, Ärmel: e.target.value})
                               }}

                    />
                    <TextField id="Bein" label="Bein" variant="standard"
                               value={newNote.Bein}
                               onChange={(e) => {
                                   setNewNote({...newNote, Bein: e.target.value})
                               }}
                    />
                    <TextField id="Kragen" label="Kragen" variant="standard"
                               value={newNote.Kragen}
                               onChange={(e) => {
                                   setNewNote({...newNote, Kragen: e.target.value})
                               }}
                    />
                    <TextField id="Herstellung" label="Herstellung" variant="standard"
                               value={newNote.Herstellung}
                               onChange={(e) => {
                                   setNewNote({...newNote, Herstellung: e.target.value})
                               }}
                    />

                    <TextField id="Taschenart" label="Taschenart" variant="standard"
                               value={newNote.Taschenart}
                               onChange={(e) => {
                                   setNewNote({...newNote, Taschenart: e.target.value})
                               }}
                    />
                    <TextField id="Grammatur" label="Grammatur" variant="standard"
                               value={newNote.Grammatur}
                               onChange={(e) => {
                                   setNewNote({...newNote, Grammatur: e.target.value})
                               }}
                    />

                    <TextField id="Material" label="Material" variant="standard"
                               value={newNote.Material}
                               onChange={(e) => {
                                   setNewNote({...newNote, Material: e.target.value})
                               }}
                    />
                    <TextField id="Urprungsland" label="Urprungsland" variant="standard"
                               value={newNote.Urprungsland}
                               onChange={(e) => {
                                   setNewNote({...newNote, Urprungsland: e.target.value})
                               }}
                    />
                    <TextField id="Bild" label="Bild" variant="standard"
                               value={newNote.Bildname}
                               onChange={(e) => {
                                   setNewNote({...newNote, Bildname: e.target.value})
                               }}
                    />

                    <Button onClick={addNewNote}>hinzufügen</Button>
                </Box>
            </Modal>

        </div>
    );
}

export default NoteForm