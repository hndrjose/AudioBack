//////////////////////PROCEDIMIENTOS HISTORIACL ////////////////////////////

//Agregar HistoriaCl
app.post('/crear_HistoriaCl', (req, res) =>{

    //Conexion
    console.log("Tratando de crear una HistoriaCl nuevo..")
    console.log("HistoriaCl: "+ req.body.agregar_HistoriaCl)
    console.log("IdUltimoM :" + req.body.agregar_ultimom )
    console.log("IdAyerH: " + req.body.ayerh)
    console.log("IdEmpleado: " + req.body.empleado)
   
    const IdUltimoM = req.body.agregar_ultimom  
    const IdDuranteV = req.body.durantv 
    const IdAyerH = req.body.ayerh 
    const IdEmpleado = req.body.empleado 
    const queryString = "INSERT INTO HistoriaCl (IdUltimoM, IdDuranteV, IdAyerH, IdEmpleado)  VALUES  (?, ?, ?, ?)"
    connection.query(queryString, [IdUltimoM, IdDuranteV, IdAyerH, IdEmpleado], (err, results, fields) =>{
        if (err){
            console.log("Error al agregar nueva HistoriaCl: "+ err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego HistoriaCl con id: ", results.insertedId);
        res.end() 
        
    } )
})



//Editar HistoriaCl
app.put('/HistoriaCl', (req, res) =>{

    //Conexion
    console.log("Tratando de crear una HistoriaCl nuevo..")
    console.log("HistoriaCl: "+ req.body.agregar_HistoriaCl)
    console.log("IdUltimoM :" + req.body.agregar_ultimom )
    console.log("IdAyerH: " + req.body.ayerh)
    console.log("IdEmpleado: " + req.body.empleado)
   
    const IdUltimoM = req.body.agregar_ultimom  
    const IdDuranteV = req.body.durantv 
    const IdAyerH = req.body.ayerh 
    const IdEmpleado = req.body.empleado  
    const queryString = "UPDATE HistoriaCl SET IdUltimoM = ?,  WHERE IdHistoriaCl = ?"
    connection.query(queryString, [IdUltimoM, IdHistoriaCl], (err, results, fields) =>{
        if (err){
            console.log("Error al editar HistoriaCl: "+ err)
            res.sendStatus(500)
            return
        }

        console.log("Se edito HistoriaCl con id: ", results.insertedId);
        res.end() 
        
    } )
})


//Eliminar HistoriaCl
app.delete('/HistoriaCl/:id', (req, res) => {
    console.log("Eliminar HistoriaCl con id: "+ req.params.id)
//Conexion

const IdHistoriaCl = req.params.id
const queryString = "DELETE FROM HistoriaCl WHERE IdHistoriaCl = ?"
connection.query(queryString, [IdHistoriaCl],(err, rows, fields) => {
    if(err){
        console.log("No existe la HistoriaCl " + err)
        res.sendStatus(500)
        res.end()
        return
    }
    console.log("HistoriaCl Eliminada")
    res.json(rows)
})
});

//Seleccionar Turno
app.get('/HistoriaCl/:id', (req, res) => {
    console.log("Eliminar HistoriaCl con id: "+ req.params.id)
//Conexion

const IdHistoriaCl = req.params.id
const queryString = "SELECT * FROM HistoriaCl WHERE IdHistoriaCl = ?"
connection.query(queryString, [IdHistoriaCl],(err, rows, fields) => {
    if(err){
        console.log("No existe la HistoriaCl " + err)
        res.sendStatus(500)
        res.end()
        return
    }
    console.log("HistoriaCl Eliminada")
    res.json(rows)
})
});

//////////////////////PROCEDIMIENTOS STD_D ////////////////////////////

//Agregar StdD
app.post('/crear_StdD', (req, res) =>{

    //Conexion
    console.log("Tratando de crear una StdD nuevo..")
    console.log("F250: "+ req.body.agregar_f250)
    console.log("F500: "+ req.body.agregar_f500)
    console.log("F750: "+ req.body.agregar_f750)
    console.log("F1000: "+req.body.agregar_f1000)
    console.log("F1500: "+req.body.agregar_f1500)
    console.log("F2000: "+req.body.agregar_f2000)
    console.log("F3000: "+req.body.agregar_f3000)
    console.log("F4000: "+req.body.agregar_f4000)
    console.log("F6000: "+req.body.agregar_f6000)
    console.log("F8000: "+req.body.agregar_f8000)

   
    const F250 = req.body.agregar_f250
    const F500 = req.body.agregar_f500
    const F750 = req.body.agregar_f750
    const F1000 = req.body.agregar_f1000
    const F1500 = req.body.agregar_f1500
    const F
    const F
    const F
    const F
    const F
    const queryString = "INSERT INTO StdD (F250)  VALUES  (?)"
    connection.query(queryString, [F250], (err, results, fields) =>{
        if (err){
            console.log("Error al agregar nueva StdD: "+ err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego StdD con id: ", results.insertedId);
        res.end() 
        
    } )
})



//Editar StdD
app.put('/StdD', (req, res) =>{

    //Conexion
    console.log("Tratando de editar una StdD..")
    console.log("Tratando de crear una StdD nuevo..")
    console.log("StdD: "+ req.body.agregar_StdD)
   
    const IdStdD = req.body.id
    const F250 = req.body.agregar_StdD   
    const queryString = "UPDATE StdD SET F250 = ? WHERE IdStdD = ?"
    connection.query(queryString, [F250, IdStdD], (err, results, fields) =>{
        if (err){
            console.log("Error al editar StdD: "+ err)
            res.sendStatus(500)
            return
        }

        console.log("Se edito StdD con id: ", results.insertedId);
        res.end() 
        
    } )
})


//Eliminar StdD
app.delete('/StdD/:id', (req, res) => {
    console.log("Eliminar StdD con id: "+ req.params.id)
//Conexion

const IdStdD = req.params.id
const queryString = "DELETE FROM StdD WHERE IdStdD = ?"
connection.query(queryString, [IdStdD],(err, rows, fields) => {
    if(err){
        console.log("No existe la StdD " + err)
        res.sendStatus(500)
        res.end()
        return
    }
    console.log("StdD Eliminada")
    res.json(rows)
})
});

//Seleccionar Turno
app.get('/StdD/:id', (req, res) => {
    console.log("Eliminar StdD con id: "+ req.params.id)
//Conexion

const IdStdD = req.params.id
const queryString = "SELECT * FROM StdD WHERE IdStdD = ?"
connection.query(queryString, [IdStdD],(err, rows, fields) => {
    if(err){
        console.log("No existe la StdD " + err)
        res.sendStatus(500)
        res.end()
        return
    }
    console.log("StdD Eliminada")
    res.json(rows)
})
});