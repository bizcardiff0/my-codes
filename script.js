new gridjs.Grid({
    columns: ["Matricule", "Name", "Date", "Time In", "Time Out"],
    data: [
        ["20T003", "EBOUE AUDREY", "21/01/2021", "09:25:25", "09:25:25"],
        ["20T003", "EBOUE AUDREY", "21/01/2021", "09:25:25", "09:25:25"],
        ["20T003", "EBOUE AUDREY", "21/01/2021", "09:25:25", "09:25:25"],
        ["20T003", "EBOUE AUDREY", "21/01/2021", "09:25:25", "09:25:25"],
        ["20T003", "EBOUE AUDREY", "21/01/2021", "09:25:25", "09:25:25"]
    ],
    sort: true,
    pagination: true,
    search: true,
    style: {
        td: {
            border: '1px solid #ccc'
        },
        table: {
            'font-size': '15px'
        }
    },

    // language: {
    //   'search': {
    //     'placeholder': '🔍 Search...'
    //   },
    //   'pagination': {
    //     'previous': '⬅️',
    //     'next': '➡️',
    //     'showing': '😃 Displaying',
    //     'results': () => 'Records'
    //   }
    // }

}).render(document.getElementById("wrapper"))