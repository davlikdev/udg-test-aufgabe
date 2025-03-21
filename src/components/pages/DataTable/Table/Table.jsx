import React, {useState} from 'react';
import {DataGrid, GridActionsCellItem, GridRowEditStopReasons, GridRowModes} from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const Table = ({data, setData}) => {

    const rows = data

    const [rowModesModel, setRowModesModel] = useState({});
    const paginationModel = {page: 0, pageSize: 10};
    const options = {
        geschlecht: ['Herren', 'Damen', 'Kinder', 'Babies'],
        aermel: ['Kurzarm', 'Langarm', 'Ärmellos', '3/4-Arm', 'Spaghetti-Träger'],
        bein: ['Lang', 'Kurz', 'String', '3/4 Bein'],
        herstellung: [
            'Konventionell', 'Fair & Umweltfreundlich',
            'Umweltfreundlich',
            'Fair'],
        taschenart: ['Sport- und Reisetaschen',
            'Rucksäcke',
            'Umhängetaschen',
            'Einkaufstaschen',
            'Laptop-Taschen',
            'Baumwolltaschen',
            'Dokumentenmappen',
            'Kühltaschen',
            'Dokumententaschen',
            'Jute-Taschen'],
        kragen: ['Rundhals',
            'Mit Kapuze',
            'Knopfleiste',
            'V-Ausschnitt',
            'Boat-Neck',
            'Stehkragen',
            '1/4-Reißverschluss',
            'Ohne Kapuze',
            'Button-Down-Kragen',
            'Reißverschluss',
            'Abnehmbare Kapuze',
            'Rollkragen',
            'Schulterfrei'],

    }
    const columns = [
        {field: "Hauptartikelnr", headerName: "Hauptartikelnr", editable: true},
        {field: "Artikelname", headerName: "Artikelname", editable: true},
        {field: "Hersteller", headerName: "Hersteller", editable: true},
        {field: "Beschreibung", headerName: "Beschreibung", editable: true},
        {field: "Materialangaben", headerName: "Materialangaben", editable: true},
        {
            field: "Geschlecht", headerName: "Geschlecht",
            type: "singleSelect", valueOptions: options.geschlecht,
            editable: true
        },
        {
            field: "Produktart", headerName: "Produktart", editable: true
        },
        {
            field: "Ärmel", headerName: "Ärmel",
            editable: true,
            type: "singleSelect",
            valueOptions: options.aermel,
        },
        {
            field: "Bein", headerName: "Bein",
            type: "singleSelect",
            valueOptions: options.bein,
            editable: true
        },
        {
            field: "Kragen", headerName: "Kragen",
            type: "singleSelect",
            valueOptions: options.kragen,
            editable: true
        },
        {
            field: "Herstellung", headerName: "Herstellung",
            type: "singleSelect",
            valueOptions: options.herstellung,

            editable: true
        },
        {
            field: "Taschenart", headerName: "Taschenart",
            type: "singleSelect",
            valueOptions: options.taschenart,
            editable: true
        },
        {field: "Grammatur", headerName: "Grammatur", editable: true},
        {field: "Material", headerName: "Material", editable: true},
        {field: "Ursprungsland", headerName: "Ursprungsland", editable: true},
        {field: "Bildname", headerName: "Bildname", editable: true},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({id}) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon/>}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon/>}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon/>}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },


    ]


    const handleDeleteClick = (id) => () => {
        setData(rows.filter((row) => row.id !== id));
    };
    const handleSaveClick = (id) => () => {
        setRowModesModel({...rowModesModel, [id]: {mode: GridRowModes.View}});
    };
    const handleEditClick = (id) => () => {
        setRowModesModel({...rowModesModel, [id]: {mode: GridRowModes.Edit}});
    };
    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: {mode: GridRowModes.View, ignoreModifications: true},
        });
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = {...newRow, isNew: false};
        setData(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    return (
        <DataGrid
            stickyHeader={true}
            rows={rows}
            columns={columns}
            initialState={{pagination: {paginationModel}}}
            pageSizeOptions={[10, 20]}
            checkboxSelection
            sx={{
                border: 0, height: 650,
            }}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}

        />
    );
};

export default Table;