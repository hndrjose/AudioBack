const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();




// default options
app.use(fileUpload());

// enable-cors.org, expressjs  mideware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // me permitira hacer peticiones http al server
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Importar Rutas

const customerRoutes = require('./src/routes/customer');

//server index config
//sirve para mostrar las imagenes de todas las carpetas dendro del directorio ouploads
//localhost:3000/uploads
var serveIndex = require('serve-index');
app.use(express.static(__dirname + '.'));
app.use('/imagen', serveIndex(__dirname + '/imagen'));




//Configuracion
//Buscar purto etablecido, si no hay selleccionar 3000
app.set('port', process.env.PORT || 3000);
//Plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const connection = mysql.createConnection({
    host: 'Localhost', // Localhost
    user: 'root', // root
    password: 'Ceutec-19', // Ceutec-19
    database: 'Audiometria', // Audiometria 
    multipleStatements: true
})








//////////////////////PROCEDIMIENTOS ARCHIVOS ////////////////////////////
app.put('/imagenes/:cedula', (req, res, next) => {

    // var tipo = req.params.tipo;
    var cedula = req.params.cedula;

    // // Tipos de Cpleccion
    // var tipovalidos = ['usuarios', 'servicios'];

    // if (tipovalidos.indexOf(tipo) < 0) {

    //     return res.status(400).json({
    //         ok: false,
    //         mensaje: 'Tipo de Coleccion no es valido',
    //         errors: { message: "Tipo de Coleccion no es valido" }
    //     });
    // }

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No selecciono nada',
            errors: { message: "Debe de seleccionar una Imagen" }

        });
    }

    //obtener nombre del archivo
    var archivo = req.files.imge;
    var nombrecortado = archivo.name.split('.');
    var extencion = nombrecortado[nombrecortado.length - 1];

    //solo extenciones permitidas
    var extencionesvalidas = ['jpg', 'png', 'gif'];

    if (extencionesvalidas.indexOf(extencion) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extencion no valida',
            errors: { message: 'Las Extenciones son:' + extencionesvalidas.join(', ') }

        });
    }

    //Nombre del archivo personalizado
    var nombbreArchivo = `${ cedula }-${ new Date().getMilliseconds() }.${ extencion }`;

    // //mover el archivo del temporal a un path
    var path = `./src/imagen/${ nombbreArchivo }`;
    archivo.mv(path, err => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover archivo',
                errors: err

            });
        }
        subirarchivo(cedula, nombbreArchivo, res);


        // res.status(300).json({
        //     ok: true,
        //     mensaje: 'Peticion Realizada Corretamente',
        //     extencion: extencion
        // });
    });

});

function subirarchivo(cedula, nombbreArchivo, res) {

    const queryString = "SELECT Cedula, img FROM empleado WHERE Cedula = ?"
    connection.query(queryString, [cedula], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Empleado " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        // res.json(rows[0].img);
        // console.log(rows[0].img);
        var pathviejo = './src/imagen/' + rows[0].img;
        console.log(pathviejo);
        //Si exite elimina la imagen anterior
        if (fs.existsSync(pathviejo)) {
            fs.unlinkSync(pathviejo);
        }


    });

    const img = nombbreArchivo;
    const queryString1 = "UPDATE empleado SET img = ? WHERE Cedula = ?"
    connection.query(queryString1, [img, cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al Modificar Imagen" + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Empleadp Modificado", results.affectedRows)
        res.end()
    });


    //   npm i serve-index --save   es una libreria que sirve para llegar a mostrar imagenes guardadas por peticiones html



}
app.get('/imagenaudiometria/:img', (req, res, next) => {

    var img = req.params.img;

    const pathImagen = path.resolve(__dirname, `./src/imagen/${img}`);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        var pahtnoimagen = path.resolve(__dirname, `./nomimg/noimage.png`);
        res.sendFile(pahtnoimagen);
    }

});
///////////////////////////////////////////  PROCEDIMIENTO DE LOGIN

app.post('/log', (req, res) => {
    var nombre = req.body.nombre
    var password = req.body.password;

    const queryString = "SELECT * FROM usuario WHERE Nombre = ? AND password = ?"
    connection.query(queryString, [nombre, password], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true
                    // examen: rows
            });
        } else {
            return res.status(400).json({
                ok: false
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
        }
    });
});




//////////////////////PROCEDIMIENTOS EMPRESA ////////////////////////////

//Agregar Empresa
app.post('/crear_empresa', (req, res) => {

    //Conexion
    console.log("Tratando de crear una empresa nuevo..")
    console.log("Nombre: " + req.body.nombre)

    const nombre = req.body.nombre

    const queryString = "INSERT INTO empresa (nombre)  VALUES  (?)"
    connection.query(queryString, [nombre], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nueva empresa: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego empresa con id: ", results.insertId);
        res.end()

    })
})

//Editar Empresa
app.put('/empresa/:id', (req, res) => {

    //Conexion
    console.log("Tratando de editar una empresa..")
    console.log("Id: " + req.params.id)
    console.log("Nombre: " + req.body.nombre)

    const IdEmpresa = req.params.id
        //const IdEmpresa = req.body.id
    const nombre = req.body.nombre
        //const IdEmpresa = req.params.id
    const queryString = "UPDATE empresa SET nombre = ? WHERE IdEmpresa = ?"
    connection.query(queryString, [nombre, IdEmpresa], (err, results, fields) => {
        if (err) {
            console.log("Error al editar empresa: " + err)
            res.sendStatus(400)
            return
        }

        console.log("Se edito la empresa con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar Empresa
app.delete('/empresa/:id', (req, res) => {
    console.log("Eliminar empresa con id: " + req.params.id)
        //Conexion

    const IdEmpresa = req.params.id
    const queryString = "DELETE FROM Empresa WHERE IdEmpresa = ?"
    connection.query(queryString, [IdEmpresa], (err, rows, fields) => {
        if (err) {
            console.log("No existe la Empresa " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Empresa Eliminada")
        res.json(rows)
    })
});

//Seleccionar Empresa
app.get('/empresa/:id', (req, res) => {
    console.log("Seleccionar empresa con id: " + req.params.id)
        //Conexion

    const IdEmpresa = req.params.id
    const queryString = "SELECT * FROM Empresa WHERE IdEmpresa = ?"
    connection.query(queryString, [IdEmpresa], (err, rows, fields) => {
        if (err) {
            console.log("No existe la Empresa " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Empresa Seleccionada")
        res.json(rows)
    })
});

//Seleccionar Empresa
app.get('/empresa', (req, res) => {
    console.log("Cargar datos de empresas");
    //Conexion;


    const queryString = "SELECT * FROM Empresa"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("No existe la Empresa " + err)
            res.sendStatus(500)
            res.end()
            return
        }

        res.json(rows)
    })
});

//////////////////////PROCEDIMIENTOS EXAMEN ////////////////////////////

//Agregar Examen
app.post('/crear_examen', (req, res) => {

    //Conexion
    console.log("Tratando de crear un examen nuevo..")

    const Audiometro = req.body.Audiometro
    const Tipo = req.body.Tipo
    const RuidoDba = req.body.RuidoDba
    const Fecha = req.body.Fecha
    const Cedula = req.body.Cedula
    const Proteccion = req.body.Proteccion
    const TipoProteccion = req.body.TipoProteccion
    const OtrosProteccion = req.body.OtrosProteccion
    const Molestia = req.body.Molestia
    const MolestiaDetalle = req.body.MolestiaDetalle

    //  VALUES  (? , ? , (SELECT IdEmpleado FROM Empleado WHERE Nombre = ?) ,(SELECT IdProteccion FROM Proteccion WHERE Tipo = ?), (SELECT IdMolestias FROM Molestias WHERE Molestia = ?),(SELECT IdHistoriaCl FROM HistoriaCl WHERE IdEmpleado = ?), (SELECT IdEmpresa FROM Empresa WHERE  Nombre = ?), (SELECT IdAudiometro FROM Audiometro WHERE Modelo = ?))"
    const queryString = "INSERT INTO Examen (Audiometro, Tipo, RuidoDba, Fecha, Cedula, Proteccion, TipoProteccion, OtrosProteccion, Molestia, MolestiasDetalle)   VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    connection.query(queryString, [Audiometro, Tipo, RuidoDba, Fecha, Cedula, Proteccion, TipoProteccion, OtrosProteccion, Molestia, MolestiaDetalle], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo emxamen: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego examen con id: ", results.InsertId);
        res.end()

    })
})

//Editar Examen
app.put('/editar_examen/:cedula', (req, res) => {

    //Conexion
    console.log("Tratando de editar una empresa..")
    const Cedula = req.params.cedula
    const Audiometro = req.body.Audiometro
    const Tipo = req.body.Tipo
    const RuidoDba = req.body.RuidoDba
    const Fecha = req.body.Fecha
    const Proteccion = req.body.Proteccion
    const TipoProteccion = req.body.TipoProteccion
    const OtrosProteccion = req.body.OtrosProteccion
    const Molestia = req.body.Molestia
    const MolestiasDetalle = req.body.MolestiasDetalle

    const queryString = "UPDATE Examen SET Audiometro =?, Tipo =?, RuidoDba =?, Fecha =?,  Proteccion =?, TipoProteccion =?, OtrosProteccion =?, Molestia =?, MolestiasDetalle =? WHERE Cedula =?"
    connection.query(queryString, [Audiometro, Tipo, RuidoDba, Fecha, Proteccion, TipoProteccion, OtrosProteccion, Molestia, MolestiasDetalle, Cedula, ], (err, results, fields) => {
        if (err) {
            console.log("Error al editar examen: " + err)
            res.sendStatus(400)
            return
        }
        return res.status(200).json({
            ok: true,
            examen: results.affectedRows
        });
        // console.log("Se edito el examen con id: ", results.affectedRows);
        // res.end()
    })
})


//Eliminar Examen
app.delete('/borrarexamen/:cedula', (req, res) => {
    console.log("Eliminar examen con id: " + req.params.cedula)
        //Conexion

    const Cedula = req.params.cedula
    const queryString = "DELETE FROM examen WHERE cedula = ?"
    connection.query(queryString, [Cedula], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Registro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.status(200).json({
            ok: true,
            examen: rows
        });
    })
});

//Seleccionar Examen
app.get('/buscarexamen/:cedula', (req, res) => {
    console.log("Seleccionar examen con id: " + req.params.cedula)
        //Conexion

    const cedula = req.params.cedula
    const queryString = "SELECT * FROM examen WHERE Cedula = ?"
    connection.query(queryString, [cedula], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true,
                examen: rows
            });
        } else {
            return res.status(200).json({
                ok: false,
                examen: rows
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
        }
    });
});

//Cargar Examen
app.get('/examen', (req, res) => {

    const queryString = "SELECT * FROM examen"
    connection.query(queryString, [cedula], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true,
                examen: rows
            });
        } else {
            return res.status(200).json({
                ok: false,
                examen: rows
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
        }
    });
});

//////////////////////PROCEDIMIENTOS EMPLEADO ////////////////////////////

//Agregar Empleado
app.post('/crear_empleado', (req, res) => {

    //Conexion
    console.log("Tratando de crear un empleado nuevo..")
    console.log("Nombre: " + req.body.Nombre)
    console.log("Cedula: " + req.body.Cedula)
    console.log("Edad: " + req.body.Edad)
    console.log("Genero: " + req.body.Genero)
    console.log("F_Contratacion: " + req.body.F_Contratacion)
    console.log("IdPuesto: " + req.body.Puesto)
    console.log("IdTurno: " + req.body.Turno)
    console.log("N_Horas: " + req.body.NHoras)

    const Nombre = req.body.Nombre
    const Cedula = req.body.Cedula
    const Edad = req.body.Edad
    const Genero = req.body.Genero
    const F_Contratacion = req.body.F_Contratacion
    const Puesto = req.body.Puesto
    const Turno = req.body.Turno
    const NHoras = req.body.NHoras
    const empresa = req.body.empresa

    const queryString = "INSERT INTO Empleado (Nombre, Cedula, Edad, Genero, F_Contratacion, Puesto, Turno, NHoras, empresa)  VALUES  (? , ? ,?, ?, ?, ?, ?, ?, ?)" // (SELECT IdPuesto FROM Puesto WHERE Puesto = ?) ,(SELECT IdTurno FROM Turno WHERE Turno = ?),
    connection.query(queryString, [Nombre, Cedula, Edad, Genero, F_Contratacion, Puesto, Turno, NHoras, empresa], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo empleado: " + err)
            res.sendStatus(500)
            return
        }


        console.log("Se agrego empleado con id: ", results.InsertId);
        res.end()

    })
})

//Editar Empleado
app.put('/Actualizar_empleado/:cedula', (req, res) => {

    //Conexion
    console.log("Tratando de editar una empleado..")
    console.log("Cedula: " + req.params.cedula)

    const Cedula = req.params.cedula
    const Nombre = req.body.Nombre
    const Edad = req.body.Edad
    const Genero = req.body.Genero
    const F_Contratacion = req.body.F_Contratacion
    const Puesto = req.body.Puesto
    const Turno = req.body.Turno
    const NHoras = req.body.NHoras
    const empresa = req.body.empresa
    const queryString = "UPDATE empleado SET Nombre = ?, Edad = ?, Genero = ?, F_Contratacion = ?, Puesto = ?, Turno = ?, NHoras = ? , empresa = ?  WHERE Cedula = ?" //  IdPuesto = (SELECT IdPuesto FROM Puesto WHERE Puesto = ?), IdTurno = (SELECT IdTurno FROM Turno WHERE Turno = ?)    
    connection.query(queryString, [Nombre, Edad, Genero, F_Contratacion, Puesto, Turno, NHoras, empresa, Cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al editar empleado: " + err)
            res.sendStatus(400)
            return
        }
        res.status(200).json({
            ok: true,
            respuesta: results.affectedRows
        });
        // console.log("Se edito el empleado con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar Empleado
app.delete('/borrarempleado/:cedula', (req, res) => {
    console.log("Eliminar empleado con id: " + req.params.cedula)
        //Conexion

    const Cedula = req.params.cedula
    const queryString = "DELETE FROM Empleado WHERE Cedula = ?"
    connection.query(queryString, [Cedula], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Empleado " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Empleado Eliminado")
        res.json(rows)
    })
});

//Seleccionar Empleado
app.get('/emple/:Cedula', (req, res) => {
    console.log("Seleccionar empleado con id: " + req.params.Cedula);
    //Conexion
    const Cedula = req.params.Cedula;
    //  console.log(Cedula);
    const queryString = "SELECT * FROM empleado WHERE cedula = ?"
    connection.query(queryString, [Cedula], (error, rows) => {
        if (error) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: error

            });
        }

        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true,
                paciente: rows
            });

        } else {

            return res.status(200).json({
                ok: false,
                paciente: rows
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
            // res.sendStatus(500);
            // res.end();
            // return;
        }
        // console.log(rows);
    });
});

//Cargar Empleados
app.get('/empleados', (req, res) => {

    //Conexion
    const queryString = "SELECT * FROM empleado"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Erro al cargar Empleados " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.json(rows)

    })
});

//////////////////////PROCEDIMIENTOS ULTIMO MESES ////////////////////////////

//Agregar Ultimo Meses
app.post('/crear_ultimomeses', (req, res) => {

    //Conexion
    console.log("Tratando de crear un registro nuevo..")

    const DolorO = req.body.DolorO
    const SupuracionS = req.body.SupuracionS
    const RuidoTZ = req.body.RuidoTZ
    const MareoV = req.body.MareoV
    const SorderaS = req.body.SorderaS
    const SorderaF = req.body.SorderaF
    const TapadoML = req.body.TapadoML
    const DolorMR = req.body.DolorMR
    const GolpesCO = req.body.GolpesCO
    const PAA = req.body.PAA
    const MedicamentosP = req.body.MedicamentosP
    const Cedula = req.body.Cedula
    const uno = req.body.uno

    const queryString = "INSERT INTO ultimosm(DolorO, SupuracionS, RuidoTZ, MareoV, SorderaS, SorderaF, TapadoML, DolorMR, GolpesCO, PAA, MedicamentosP, Cedula)  VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    connection.query(queryString, [DolorO, SupuracionS, RuidoTZ, MareoV, SorderaS, SorderaF, TapadoML, DolorMR, GolpesCO, PAA, MedicamentosP, Cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego  un Registro con id: ", results.InsertId);
        res.end()

    })
})


//Editar Ultimos Meses
app.put('/ultimomeses/:cedula', (req, res) => {

    //Conexion
    console.log("Tratando de editar una audiometroo..")


    const Cedula = req.params.cedula
    const DolorO = req.body.DolorO
    const SupuracionS = req.body.SupuracionS
    const RuidoTZ = req.body.RuidoTZ
    const MareoV = req.body.MareoV
    const SorderaS = req.body.SorderaS
    const SorderaF = req.body.SorderaF
    const TapadoML = req.body.TapadoML
    const DolorMR = req.body.DolorMR
    const GolpesCO = req.body.GolpesCO
    const PAA = req.body.PAA
    const MedicamentosP = req.body.MedicamentosP

    const queryString = "UPDATE ultimosm SET DolorO =?, SupuracionS =?, RuidoTZ =?, MareoV =?, SorderaS =?, SorderaF =?, TapadoML =?, DolorMR =?, GolpesCO =?, PAA =?, MedicamentosP =? WHERE cedula = ?"
    connection.query(queryString, [DolorO, SupuracionS, RuidoTZ, MareoV, SorderaS, SorderaF, TapadoML, DolorMR, GolpesCO, PAA, MedicamentosP, Cedula], (err, results, fields) => {
        if (err) {
            console.log("Error a Editar el Archivo: " + err)
            res.sendStatus(400)
            return
        }
        return res.status(200).json({
            ok: true,
            ultimom: results.affectedRows
        });

    })
})

app.get('/BuscarultimosM/:cedula', (req, res) => {
    console.log("Seleccionar UltimosMeses con id: " + req.params.cedula);
    //Conexion

    const cedula = req.params.cedula;
    const queryString = "SELECT * FROM ultimosm WHERE cedula= ?"
    connection.query(queryString, [cedula], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true,
                ultimom: rows
            });
        } else {
            return res.status(200).json({
                ok: false,
                ultimom: rows
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
        }
    })
});

//Eliminar UltimosM
app.delete('/ultimomesesborrar/:cedula', (req, res) => {
    //Conexion
    const Cedula = req.params.cedula
    const queryString = "DELETE FROM ultimosm WHERE Cedula = ?"
    connection.query(queryString, [Cedula], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Registro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.status(200).json({
            ok: true,
            ultimom: rows
        });
    })
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////PROCEDIMIENTOS DURANTE VIDA ////////////////////////////

//Agregar Durante Vida
app.post('/crear_durantevida', (req, res) => {

    //Conexion
    console.log("Tratando de crear un registro nuevo..")

    const Fiebre = req.body.Fiebre
    const ConsultoO = req.body.ConsultoO
    const OperacionO = req.body.OperacionO
    const PerdidaC = req.body.PerdidaC
    const Paperas = req.body.Paperas
    const Escarlatina = req.body.Escarlatina
    const Sarampion = req.body.Sarampion
    const Meningitis = req.body.Meningitis
    const Diabetes = req.body.Diabetes
    const ERinones = req.body.ERinones
    const Alergias = req.body.Alergias
    const InstrumentosM = req.body.InstrumentosM // Fiebre, ConsultoO, OperacionO, PerdidaC, Paperas, Escarlatina, Sarampion, Meningitis,
    const SFamilia = req.body.SFamilia // Diabetes, ERiñones, Alergias, InstrumentosM, SFamilia, ServicioM, MRCasaHoras, ArmasF, Cohetes
    const ServicioM = req.body.ServicioM // Gentamicina, Quinina, Quimicos, TrabajoAnt,
    const MRCasaHoras = req.body.MRCasaHoras
    const MFuerte = req.body.MFuerte
    const PasatiempoR = req.body.PasatiempoR
    const ArmasF = req.body.ArmasF
    const Cohetes = req.body.Cohetes
    const Gentamicina = req.body.Gentamicina
    const Quinina = req.body.Quinina
    const Quimicos = req.body.Quimicos
    const TrabajoAnt = req.body.TrabajoAnt
    const Cedula = req.body.Cedula

    const queryString = "INSERT INTO durantev(Fiebre, ConsultoO, OperacionO, PerdidaC, Paperas, Escarlatina, Sarampion, Meningitis, Diabetes, ERinones, Alergias, InstrumentosM, SFamilia, ServicioM, MRCasaHoras, MFuerte, PasatiempoR, ArmasF, Cohetes, Gentamicina, Quinina, Quimicos, TrabajoAnt, Cedula)  VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ? ,? ,? ,? ,? ,? ,? ,?)"
    connection.query(queryString, [Fiebre, ConsultoO, OperacionO, PerdidaC, Paperas, Escarlatina, Sarampion, Meningitis, Diabetes, ERinones, Alergias, InstrumentosM, SFamilia, ServicioM, MRCasaHoras, MFuerte, PasatiempoR, ArmasF, Cohetes, Gentamicina, Quinina, Quimicos, TrabajoAnt, Cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego  un Registro con id: ", results.InsertId);
        res.end()

    })
})


//Editar
app.put('/durantevida/:cedula', (req, res) => {

    //Conexion
    console.log("Tratando de editar una audiometroo..")

    const Cedula = req.params.cedula
    const Fiebre = req.body.Fiebre
    const ConsultoO = req.body.ConsultoO
    const OperacionO = req.body.OperacionO
    const PerdidaC = req.body.PerdidaC
    const Paperas = req.body.Paperas
    const Escarlatina = req.body.Escarlatina
    const Sarampion = req.body.Sarampion
    const Meningitis = req.body.Meningitis
    const Diabetes = req.body.Diabetes
    const ERinones = req.body.ERinones
    const Alergias = req.body.Alergias
    const InstrumentosM = req.body.InstrumentosM // Fiebre, ConsultoO, OperacionO, PerdidaC, Paperas, Escarlatina, Sarampion, Sarampion, Meningitis,
    const SFamilia = req.body.SFamilia // Diabetes, ERiñones, Alergias, Fiebre, InstrumentosM, SFamilia, ServicioM, MRCasaHoras, ArmasF, Cohetes
    const ServicioM = req.body.ServicioM // Gentamicina, Quinina, Quimicos, TrabajoAnt
    const MRCasaHoras = req.body.MRCasaHoras
    const MFuerte = req.body.MFuerte
    const PasatiempoR = req.body.PasatiempoR
    const ArmasF = req.body.ArmasF
    const Cohetes = req.body.Cohetes
    const Gentamicina = req.body.Gentamicina
    const Quinina = req.body.Quinina
    const Quimicos = req.body.Quimicos
    const TrabajoAnt = req.body.TrabajoAnt


    const queryString = "UPDATE durantev SET Fiebre =?, ConsultoO =?, OperacionO =?, PerdidaC =?, Paperas =?, Escarlatina =?, Sarampion =?, Sarampion =?, Meningitis =?, Diabetes =?, ERinones =?, Alergias =?, Fiebre =?, InstrumentosM =?, SFamilia =?, ServicioM =?, MRCasaHoras =?, MFuerte =?, PasatiempoR =?, ArmasF =?, Cohetes =?, Gentamicina =?, Quinina =?, Quimicos =?, TrabajoAnt =? WHERE Cedula = ?"
    connection.query(queryString, [Fiebre, ConsultoO, OperacionO, PerdidaC, Paperas, Escarlatina, Sarampion, Sarampion, Meningitis, Diabetes, ERinones, Alergias, Fiebre, InstrumentosM, SFamilia, ServicioM, MRCasaHoras, MFuerte, PasatiempoR, ArmasF, Cohetes, Gentamicina, Quinina, Quimicos, TrabajoAnt, Cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al editar audiometro: " + err)
            res.sendStatus(400)
            return
        }
        return res.status(200).json({
            ok: true,
            durantev: results.affectedRows
        });

    });
});

app.get('/Buscardurantevida/:cedula', (req, res) => {
    console.log("Seleccionar Otoscopia con id: " + req.params.cedula);
    //Conexion

    const cedula = req.params.cedula;
    const queryString = "SELECT * FROM durantev WHERE cedula= ?"
    connection.query(queryString, [cedula], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true,
                durantev: rows
            });
        } else {
            return res.status(200).json({
                ok: false,
                durantev: rows
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
        }
    })
});

app.delete('/borrardurantev/:cedula', (req, res) => {
    //Conexion
    const Cedula = req.params.cedula
    const queryString = "DELETE FROM durantev WHERE Cedula = ?"
    connection.query(queryString, [Cedula], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Registro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.status(200).json({
            ok: true,
            durantev: rows
        });
    })
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////PROCEDIMIENTOS AYER Y HOY ////////////////////////////

//Agregar Ayer y Hoy
app.post('/crear_ayerhoy', (req, res) => {

    //Conexion
    console.log("Tratando de crear un registro nuevo..")

    const Moto = req.body.Moto
    const Bus = req.body.Bus
    const Gripe = req.body.Gripe
    const RFSinProt = req.body.RFSinProt
    const Fiesta = req.body.Fiesta
    const Otros = req.body.Otros
    const Cedula = req.body.Cedula

    const queryString = "INSERT INTO ayerh (Moto, Bus, Gripe, RFSinProt, Fiesta, Otros, Cedula)  VALUES  (?, ?, ?, ?, ?, ?, ?)"
    connection.query(queryString, [Moto, Bus, Gripe, RFSinProt, Fiesta, Otros, Cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo Registro: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego  un Registro con id: ", results.InsertId);
        res.end()

    })
})


//Editar ayerH
app.put('/ayerh/:cedula', (req, res) => {

    //Conexion
    console.log("Tratando de editar Registro..")

    const Cedula = req.params.cedula
    const Moto = req.body.Moto
    const Bus = req.body.Bus
    const Gripe = req.body.Gripe
    const RFSinProt = req.body.RFSinProt
    const Fiesta = req.body.Fiesta
    const Otros = req.body.Otros
    const queryString = "UPDATE ayerh SET Moto =?, Bus =?, Gripe =?, RFSinProt =?, Fiesta =?, Otros =?  WHERE cedula =?"
    connection.query(queryString, [Moto, Bus, Gripe, RFSinProt, Fiesta, Otros, Cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al editar audiometro: " + err)
            res.sendStatus(400)
            return
        }
        return res.status(200).json({
            ok: true,
            ayerh: results.affectedRows
                // mensaje: "No existe el Empleado ",
                //  errors: error
        });
    })
})


app.get('/BuscarayerHoy/:cedula', (req, res) => {
    console.log("Seleccionar Ayerhoy con id: " + req.params.cedula);
    //Conexion

    const cedula = req.params.cedula;
    const queryString = "SELECT * FROM ayerh WHERE Cedula= ?"
    connection.query(queryString, [cedula], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true,
                ayerh: rows
            });
        } else {
            return res.status(200).json({
                ok: false,
                ayerh: rows
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
        }
    })
});

app.delete('/ayerhborrar/:cedula', (req, res) => {
    //Conexion
    const Cedula = req.params.cedula
    const queryString = "DELETE FROM ayerh WHERE Cedula = ?"
    connection.query(queryString, [Cedula], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Registro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.status(200).json({
            ok: true,
            ayerh: rows
        });
    })
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Eliminar Audiometro
app.delete('/audiometro/:id', (req, res) => {
    console.log("Eliminar audiometro con id: " + req.params.id)
        //Conexion

    const IdAudiometro = req.params.id
    const queryString = "DELETE FROM Audiometro WHERE IdAudiometro = ?"
    connection.query(queryString, [IdAudiometro], (err, rows, fields) => {
        if (err) {
            console.log("No existe el audiometro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Audiometro Eliminado")
        res.json(rows)
    })
});

//Seleccionar Audiometro
app.get('/audiometro/:id', (req, res) => {
    console.log("Seleccionar audiometro con id: " + req.params.id)
        //Conexion

    const IdAudiometro = req.params.id
    const queryString = "SELECT * FROM Audiometro WHERE IdAudiometro = ?"
    connection.query(queryString, [IdAudiometro], (err, rows, fields) => {
        if (err) {
            console.log("No existe el audiometro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Audiometro Seleccionado")
        res.json(rows)
    })
});


//////////////////////PROCEDIMIENTOS PUESTO ////////////////////////////

//Agregar Puesto
app.post('/crear_puesto', (req, res) => {

    //Conexion
    console.log("Tratando de crear un puesto nuevo..")
    console.log("Puesto: " + req.body.agregar_puesto)

    const Puesto = req.body.agregar_puesto
    const queryString = "INSERT INTO Puesto (Puesto)  VALUES  (?)"
    connection.query(queryString, [Puesto], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo Puesto: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego Puesto con id: ", results.InsertId);
        res.end()

    })
})

//Editar Puesto
app.put('/puesto', (req, res) => {

    //Conexion
    console.log("Tratando de editar una Puesto..")
    console.log("Id: " + req.body.id)
    console.log("Puesto: " + req.body.agregar_puesto)

    const IdPuesto = req.body.id
    const Puesto = req.body.agregar_puesto
    const queryString = "UPDATE Puesto SET Puesto = ? WHERE IdAudiometro = ?"
    connection.query(queryString, [Puesto, IdPuesto], (err, results, fields) => {
        if (err) {
            console.log("Error al editar Puesto: " + err)
            res.sendStatus(400)
            return
        }

        console.log("Se edito el Puesto con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar Puesto
app.delete('/puesto/:id', (req, res) => {
    console.log("Eliminar Puesto con id: " + req.params.id)
        //Conexion

    const IdPuesto = req.params.id
    const queryString = "DELETE FROM Puesto WHERE IdPuesto = ?"
    connection.query(queryString, [IdPuesto], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Puesto " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Puesto Eliminado")
        res.json(rows)
    })
});

//Seleccionar Puesto
app.get('/puesto/:id', (req, res) => {
    console.log("Seleccionar Puesto con id: " + req.params.id)
        //Conexion

    const IdPuesto = req.params.id
    const queryString = "SELECT * FROM Puesto WHERE IdPuesto = ?"
    connection.query(queryString, [IdPuesto], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Puesto " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Puesto Seleccionado")
        res.json(rows)
    })
});


//////////////////////PROCEDIMIENTOS TURNO ////////////////////////////

//Agregar Turno
app.post('/crear_turno', (req, res) => {

    //Conexion
    console.log("Tratando de crear un turno nuevo..")
    console.log("Turno: " + req.body.agregar_turno)

    const Turno = req.body.agregar_turno
    const queryString = "INSERT INTO Turno (Turno)  VALUES  (?)"
    connection.query(queryString, [Turno], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo Turno: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego Turno con id: ", results.InsertId);
        res.end()

    })
})

//Editar Turno
app.put('/turno', (req, res) => {

    //Conexion
    console.log("Tratando de editar una turno..")
    console.log("Id: " + req.body.id)
    console.log("Turno: " + req.body.agregar_turno)

    const IdTurno = req.body.id
    const Turno = req.body.agregar_turno
    const queryString = "UPDATE Turno SET Turno = ? WHERE IdTurno = ?"
    connection.query(queryString, [Turno, IdTurno], (err, results, fields) => {
        if (err) {
            console.log("Error al editar Turno: " + err)
            res.sendStatus(400)
            return
        }

        console.log("Se edito el Turno con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar Turno
app.delete('/turno/:id', (req, res) => {
    console.log("Eliminar Turno con id: " + req.params.id)
        //Conexion

    const IdTurno = req.params.id
    const queryString = "DELETE FROM Turno WHERE IdTurno = ?"
    connection.query(queryString, [IdTurno], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Turno " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Turno Eliminado")
        res.json(rows)
    })
});

//Seleccionar Turno
app.get('/turno/:id', (req, res) => {
    console.log("Seleccionar Turno con id: " + req.params.id)
        //Conexion

    const IdTurno = req.params.id
    const queryString = "SELECT * FROM Turno WHERE IdTurno = ?"
    connection.query(queryString, [IdTurno], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Turno " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Turno Seleccionado")
        res.json(rows)
    })
});


//////////////////////PROCEDIMIENTOS MOLESTIAS ////////////////////////////

//Agregar Molestia
app.post('/crear_molestias', (req, res) => {

    //Conexion
    console.log("Tratando de crear una molestia nueva..")
    console.log("Molestia: " + req.body.agregar_molestia)

    const Molestia = req.body.agregar_molestia
    const queryString = "INSERT INTO Molestias (Molestia)  VALUES  (?)"
    connection.query(queryString, [Molestia], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nueva Molestia: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego Molestia con id: ", results.InsertId);
        res.end()

    })
})

//Editar Molestia
app.put('/molestia', (req, res) => {

    //Conexion
    console.log("Tratando de editar una Molestia..")
    console.log("Id: " + req.body.id)
    console.log("Molestia: " + req.body.agregar_molestia)

    const IdMolestias = req.body.id
    const Molestia = req.body.agregar_molestia
    const queryString = "UPDATE Molestias SET Molestia = ? WHERE IdMolestias = ?"
    connection.query(queryString, [Molestia, IdMolestias], (err, results, fields) => {
        if (err) {
            console.log("Error al editar Molestia: " + err)
            res.sendStatus(400)
            return
        }

        console.log("Se edito la molestia con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar Molestia
app.delete('/molestia/:id', (req, res) => {
    console.log("Eliminar molestia con id: " + req.params.id)
        //Conexion

    const IdMolestias = req.params.id
    const queryString = "DELETE FROM Molestias WHERE IdMolestias = ?"
    connection.query(queryString, [IdMolestias], (err, rows, fields) => {
        if (err) {
            console.log("No existe el molestia " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Molestia Seleccionada")
        res.json(rows)
    })
});

//Seleccionar Molestia
app.get('/molestia/:id', (req, res) => {
    console.log("Seleccionar molestia con id: " + req.params.id)
        //Conexion

    const IdMolestias = req.params.id
    const queryString = "SELECT * FROM Molestias WHERE IdMolestias = ?"
    connection.query(queryString, [IdMolestias], (err, rows, fields) => {
        if (err) {
            console.log("No existe el molestia " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Molestia Seleccionada")
        res.json(rows)
    })
});


//////////////////////PROCEDIMIENTOS PROTECCION ////////////////////////////

//Agregar Proteccion
app.post('/crear_proteccion', (req, res) => {

    //Conexion
    console.log("Tratando de crear una proteccion nuevo..")
    console.log("Proteccion: " + req.body.agregar_proteccion)

    const Tipo = req.body.agregar_proteccion
    const queryString = "INSERT INTO Proteccion (Tipo)  VALUES  (?)"
    connection.query(queryString, [Tipo], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nueva proteccion: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego proteccion con id: ", results.InsertId);
        res.end()

    })
})



//Editar Proteccion
app.put('/proteccion', (req, res) => {

    //Conexion
    console.log("Tratando de editar una proteccion..")
    console.log("Tratando de crear una proteccion nuevo..")
    console.log("Proteccion: " + req.body.agregar_proteccion)

    const IdProteccion = req.body.id
    const Tipo = req.body.agregar_proteccion
    const queryString = "UPDATE Proteccion SET Tipo = ? WHERE IdProteccion = ?"
    connection.query(queryString, [Tipo, IdProteccion], (err, results, fields) => {
        if (err) {
            console.log("Error al editar proteccion: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se edito proteccion con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar Proteccion
app.delete('/proteccion/:id', (req, res) => {
    console.log("Eliminar Proteccion con id: " + req.params.id)
        //Conexion

    const IdProteccion = req.params.id
    const queryString = "DELETE FROM Proteccion WHERE IdProteccion = ?"
    connection.query(queryString, [IdProteccion], (err, rows, fields) => {
        if (err) {
            console.log("No existe la Proteccion " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Proteccion Eliminada")
        res.json(rows)
    })
});

//Seleccionar Turno
app.get('/proteccion/:id', (req, res) => {
    console.log("Eliminar Proteccion con id: " + req.params.id)
        //Conexion

    const IdProteccion = req.params.id
    const queryString = "SELECT * FROM Proteccion WHERE IdProteccion = ?"
    connection.query(queryString, [IdProteccion], (err, rows, fields) => {
        if (err) {
            console.log("No existe la Proteccion " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Proteccion Eliminada")
        res.json(rows)
    })
});


//////////////////////PROCEDIMIENTOS PROTECCION ////////////////////////////

//Agregar Proteccion
app.post('/crear_proteccion', (req, res) => {

    //Conexion
    console.log("Tratando de crear una proteccion nuevo..")
    console.log("Proteccion: " + req.body.agregar_proteccion)

    const Tipo = req.body.agregar_proteccion
    const queryString = "INSERT INTO Proteccion (Tipo)  VALUES  (?)"
    connection.query(queryString, [Tipo], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nueva proteccion: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego proteccion con id: ", results.InsertId);
        res.end()

    })
})



//Editar Proteccion
app.put('/proteccion', (req, res) => {

    //Conexion
    console.log("Tratando de editar una proteccion..")
    console.log("Tratando de crear una proteccion nuevo..")
    console.log("Proteccion: " + req.body.agregar_proteccion)

    const IdProteccion = req.body.id
    const Tipo = req.body.agregar_proteccion
    const queryString = "UPDATE Proteccion SET Tipo = ? WHERE IdProteccion = ?"
    connection.query(queryString, [Tipo, IdProteccion], (err, results, fields) => {
        if (err) {
            console.log("Error al editar proteccion: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se edito proteccion con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar Proteccion
app.delete('/proteccion/:id', (req, res) => {
    console.log("Eliminar Proteccion con id: " + req.params.id)
        //Conexion

    const IdProteccion = req.params.id
    const queryString = "DELETE FROM Proteccion WHERE IdProteccion = ?"
    connection.query(queryString, [IdProteccion], (err, rows, fields) => {
        if (err) {
            console.log("No existe la Proteccion " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Proteccion Eliminada")
        res.json(rows)
    })
});

//Seleccionar Turno
app.get('/proteccion/:id', (req, res) => {
    console.log("Eliminar Proteccion con id: " + req.params.id)
        //Conexion

    const IdProteccion = req.params.id
    const queryString = "SELECT * FROM Proteccion WHERE IdProteccion = ?"
    connection.query(queryString, [IdProteccion], (err, rows, fields) => {
        if (err) {
            console.log("No existe la Proteccion " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Proteccion Eliminada")
        res.json(rows)
    })
});


//////////////////////PROCEDIMIENTOS STD_D ////////////////////////////

//Agregar StdD
app.post('/crear_StdD', (req, res) => {

    //Conexion
    console.log("Tratando de crear una StdD nuevo..")
    console.log("F250: " + req.body.agregar_f250)
    console.log("F500: " + req.body.agregar_f500)
    console.log("F750: " + req.body.agregar_f750)
    console.log("F1000: " + req.body.agregar_f1000)
    console.log("F1500: " + req.body.agregar_f1500)
    console.log("F2000: " + req.body.agregar_f2000)
    console.log("F3000: " + req.body.agregar_f3000)
    console.log("F4000: " + req.body.agregar_f4000)
    console.log("F6000: " + req.body.agregar_f6000)
    console.log("F8000: " + req.body.agregar_f8000)


    const F250 = req.body.agregar_f250
    const F500 = req.body.agregar_f500
    const F750 = req.body.agregar_f750
    const F1000 = req.body.agregar_f1000
    const F1500 = req.body.agregar_f1500
    const F2000 = req.body.agregar_f2000
    const F3000 = req.body.agregar_f3000
    const F4000 = req.body.agregar_f4000
    const F6000 = req.body.agregar_f6000
    const F8000 = req.body.agregar_f8000
    const queryString = "INSERT INTO STD_D (F250, F500, F750, F1000, F1500, F2000, F3000, F4000, F6000, F8000)  VALUES  (?, ?, ?, ? ,? ,?, ?, ?, ?, ?)"
    connection.query(queryString, [F250, F500, F750, F1000, F1500, F2000, F3000, F4000, F6000, F8000], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nueva StdD: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego StdD con id: ", results.InsertId);
        res.end()

    })
})



//Editar StdD
app.put('/StdD', (req, res) => {

    //Conexion
    console.log("Tratando de editar una StdD..")
    console.log("Tratando de crear una StdD nuevo..")
    console.log("F250: " + req.body.agregar_f250)
    console.log("F500: " + req.body.agregar_f500)
    console.log("F750: " + req.body.agregar_f750)
    console.log("F1000: " + req.body.agregar_f1000)
    console.log("F1500: " + req.body.agregar_f1500)
    console.log("F2000: " + req.body.agregar_f2000)
    console.log("F3000: " + req.body.agregar_f3000)
    console.log("F4000: " + req.body.agregar_f4000)
    console.log("F6000: " + req.body.agregar_f6000)
    console.log("F8000: " + req.body.agregar_f8000)

    const IdStdD = req.body.id
    const F250 = req.body.agregar_f250
    const F500 = req.body.agregar_f500
    const F750 = req.body.agregar_f750
    const F1000 = req.body.agregar_f1000
    const F1500 = req.body.agregar_f1500
    const F2000 = req.body.agregar_f2000
    const F3000 = req.body.agregar_f3000
    const F4000 = req.body.agregar_f4000
    const F6000 = req.body.agregar_f6000
    const F8000 = req.body.agregar_f8000
    const queryString = "UPDATE STD_D SET F250 = ?, F500 = ?, F750 =?, F1000 = ?, F1500 = ?, F2000 = ?, F3000 = ?, F4000 = ?, F6000 = ?, F8000 = ? WHERE IdStdD = ?"
    connection.query(queryString, [F250, F500, F750, F1000, F1500, F2000, F3000, F4000, F6000, F8000, IdStdD], (err, results, fields) => {
        if (err) {
            console.log("Error al editar StdD: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se edito StdD con id: ", results.affectedRows);
        res.end()

    })
})


//Eliminar StdD
app.delete('/StdD/:id', (req, res) => {
    console.log("Eliminar StdD con id: " + req.params.id)
        //Conexion

    const IdStdD = req.params.id
    const queryString = "DELETE FROM STD_D WHERE IdStdD = ?"
    connection.query(queryString, [IdStdD], (err, rows, fields) => {
        if (err) {
            console.log("No existe la StdD " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("StdD Eliminada")
        res.json(rows)
    })
});

//Seleccionar StdD
app.get('/StdD/:id', (req, res) => {
    console.log("Eliminar StdD con id: " + req.params.id)
        //Conexion

    const IdStdD = req.params.id
    const queryString = "SELECT * FROM STD_D WHERE IdStdD = ?"
    connection.query(queryString, [IdStdD], (err, rows, fields) => {
        if (err) {
            console.log("No existe la StdD " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("StdD Eliminada")
        res.json(rows)
    })
});

//////////////////////PROCEDIMIENTOS AUDIOGRAMA ////////////////////////////

//Agregar AUDIOGRAMA
app.post('/crear_audiograma', (req, res) => {

    //Conexion
    console.log("Tratando de crear una Audiograma nuevo..")

    const NDconperfilplano = req.body.NDconperfilplano
    const NDdescendente = req.body.NDdescendente
    const NDascendente = req.body.NDascendente
    const NDbatea = req.body.NDbatea
    const NDcampana = req.body.NDcampana
    const NDmixto = req.body.NDmixto
    const NIconperfilplano = req.body.NIconperfilplano
    const NIdescendente = req.body.NIdescendente
    const NIascendente = req.body.NIascendente
    const NIbatea = req.body.NIbatea
    const NIcampana = req.body.NIcampana
    const NImixto = req.body.NImixto
    const PDsuperficial = req.body.PDsuperficial
    const PDmoderada = req.body.PDmoderada
    const PDmoderadas = req.body.PDmoderadas
    const PDsevera = req.body.PDsevera
    const PDprofunda = req.body.PDprofunda
    const PDperfilp = req.body.PDperfilp
    const PDdescendente = req.body.PDdescendente
    const PDascendente = req.body.PDascendente
    const PDbatea = req.body.PDbatea
    const PDcampana = req.body.PDcampana
    const PDmixto = req.body.PDmixto
    const PDcaracterC = req.body.PDcaracterC
    const PDsensorial = req.body.PDsensorial
    const PDmixto2 = req.body.PDmixto2
    const PIsuperficial = req.body.PIsuperficial
    const PImoderada = req.body.PImoderada
    const PImoderadas = req.body.PImoderadas
    const PIsevera = req.body.PIsevera
    const PIprofunda = req.body.PIprofunda
    const PIperfilp = req.body.PIperfilp
    const PIdescendente = req.body.PIdescendente
    const PIascendente = req.body.PIascendente
    const PIbatea = req.body.PIbatea
    const PIcampana = req.body.PIcampana
    const PImixto = req.body.PImixto
    const PIcaracterC = req.body.PIcaracterC
    const PIsensorial = req.body.PIsensorial
    const PImixto2 = req.body.PImixto2
    const MuescaOD = req.body.MuescaOD
    const MuescaOI = req.body.MuescaOI
    const FNhallazgos = req.body.FNhallazgos
    const cedula = req.body.cedula

    const queryString = "INSERT INTO audiograma (NDconperfilplano, NDdescendente, NDascendente, NDbatea, NDcampana, NDmixto, NIconperfilplano, NIdescendente, NIascendente, NIbatea , NIcampana, NImixto, PDsuperficial, PDmoderada, PDmoderadas, PDsevera, PDprofunda, PDperfilp, PDdescendente, PDascendente, PDbatea, PDcampana, PDmixto, PDcaracterC, PDsensorial,  PDmixto2, PIsuperficial, PImoderada, PImoderadas,  PIsevera, PIprofunda, PIperfilp, PIdescendente, PIascendente, PIbatea, PIcampana, PImixto, PIcaracterC, PIsensorial, PImixto2, MuescaOD, MuescaOI, FNhallazgos, cedula )  VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(queryString, [NDconperfilplano, NDdescendente, NDascendente, NDbatea, NDcampana, NDmixto, NIconperfilplano, NIdescendente, NIascendente, NIbatea, NIcampana, NImixto, PDsuperficial, PDmoderada, PDmoderadas, PDsevera, PDprofunda, PDperfilp, PDdescendente, PDascendente, PDbatea, PDcampana, PDmixto, PDcaracterC, PDsensorial, PDmixto2, PIsuperficial, PImoderada, PImoderadas, PIsevera, PIprofunda, PIperfilp, PIdescendente, PIascendente, PIbatea, PIcampana, PImixto, PIcaracterC, PIsensorial, PImixto2, MuescaOD, MuescaOI, FNhallazgos, cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nueva Audiograma: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego Audiograma con id: ", results.insertedId);
        res.end()

    })
})


//Editar AUDIOGRAMA
app.put('/editar_audiograma/:cedula', (req, res) => {

    //Conexion
    console.log("Tratando de editar un Audiograma..")

    const cedula = req.params.cedula
    const NDconperfilplano = req.body.NDconperfilplano
    const NDdescendente = req.body.NDdescendente
    const NDascendente = req.body.NDascendente
    const NDbatea = req.body.NDbatea
    const NDcampana = req.body.NDcampana
    const NDmixto = req.body.NDmixto
    const NIconperfilplano = req.body.NIconperfilplano
    const NIdescendente = req.body.NIdescendente
    const NIascendente = req.body.NIascendente
    const NIbatea = req.body.NIbatea
    const NIcampana = req.body.NIcampana
    const NImixto = req.body.NImixto
    const PDsuperficial = req.body.PDsuperficial
    const PDmoderada = req.body.PDmoderada
    const PDmoderadas = req.body.PDmoderadas
    const PDsevera = req.body.PDsevera
    const PDprofunda = req.body.PDprofunda
    const PDperfilp = req.body.PDperfilp
    const PDdescendente = req.body.PDdescendente
    const PDascendente = req.body.PDascendente
    const PDbatea = req.body.PDbatea
    const PDcampana = req.body.PDcampana
    const PDmixto = req.body.PDmixto
    const PDcaracterC = req.body.PDcaracterC
    const PDsensorial = req.body.PDsensorial
    const PDmixto2 = req.body.PDmixto2
    const PIsuperficial = req.body.PIsuperficial
    const PImoderada = req.body.PImoderada
    const PImoderadas = req.body.PImoderadas
    const PIsevera = req.body.PIsevera
    const PIprofunda = req.body.PIprofunda
    const PIperfilp = req.body.PIperfilp
    const PIdescendente = req.body.PIdescendente
    const PIascendente = req.body.PIascendente
    const PIbatea = req.body.PIbatea
    const PIcampana = req.body.PIcampana
    const PImixto = req.body.PImixto
    const PIcaracterC = req.body.PIcaracterC
    const PIsensorial = req.body.PIsensorial
    const MuescaOD = req.body.MuescaOD
    const MuescaOI = req.body.MuescaOI
    const FNhallazgos = req.body.FNhallazgos
    const PImixto2 = req.body.PImixto2

    const queryString = "UPDATE audiograma SET NDconperfilplano= ?, NDdescendente= ?, NDascendente= ?, NDbatea= ?, NDcampana= ?, NDmixto= ?, NIconperfilplano= ?, NIdescendente= ?, NIascendente= ?, NIbatea= ?, NIcampana= ?, NImixto= ?, PDsuperficial= ?, PDmoderada= ?, PDmoderadas= ?, PDsevera= ?, PDprofunda= ?, PDperfilp= ?, PDdescendente= ?, PDascendente= ?, PDbatea= ?, PDcampana= ?, PDmixto= ?, PDcaracterC= ?, PDsensorial= ?, PDmixto2= ?, PIsuperficial= ?, PImoderada= ?, PImoderadas= ?, PIsevera= ?, PIprofunda= ?, PIperfilp= ?, PIdescendente= ?, PIascendente= ?, PIbatea= ?, PIcampana= ?, PImixto= ?, PIcaracterC= ?, PIsensorial= ?, PImixto2= ?, MuescaOD= ?, MuescaOI= ?, FNhallazgos= ? WHERE cedula= ?"
    connection.query(queryString, [NDconperfilplano, NDdescendente, NDascendente, NDbatea, NDcampana, NDmixto, NIconperfilplano, NIdescendente, NIascendente, NIbatea, NIcampana, NImixto, PDsuperficial, PDmoderada, PDmoderadas, PDsevera, PDprofunda, PDperfilp, PDdescendente, PDascendente, PDbatea, PDcampana, PDmixto, PDcaracterC, PDsensorial, PDmixto2, PIsuperficial, PImoderada, PImoderadas, PIsevera, PIprofunda, PIperfilp, PIdescendente, PIascendente, PIbatea, PIcampana, PImixto, PIcaracterC, PIsensorial, PImixto2, MuescaOD, MuescaOI, FNhallazgos, cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al editar Audiograma: " + err)
            res.sendStatus(500)
            return
        }
        return res.status(200).json({
            ok: true,
            Audiograma: results.affectedRows
        });
    });
});


//Eliminar AUDIOGRAMA
app.delete('/borraraudiograma/:cedula', (req, res) => {
    console.log("Eliminar Audiograma");
    //Conexion

    const IdAudiograma = req.params.cedula;
    const queryString = "DELETE FROM audiograma WHERE cedula = ?"
    connection.query(queryString, [IdAudiograma], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Registro " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.status(200).json({
            ok: true,
            audiograma: rows
        });
    })
});

//Buscar AUDIOGRAMA
app.get('/buscaraudiograma/:cedula', (req, res) => {
    console.log("Eliminar Audiograma con id: " + req.params.id)
        //Conexion

    const Cedula = req.params.cedula
    const queryString = "SELECT * FROM audiograma WHERE cedula = ?"
    connection.query(queryString, [Cedula], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            res.status(200).json({
                ok: true,
                audiograma: rows
            });
        } else {
            return res.status(200).json({
                ok: false,
                audiograma: rows
            });
        }
    })
});

//Cargar AUDIOGRAMA
app.get('/cargaraudiograma', (req, res) => {
    //Conexion
    const queryString = "SELECT * FROM audiograma"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            audiograma: rows
        });

    })
});
///////////////////////////////////////////////////////////////////


//////////////////////PROCEDIMIENTOS OTOSCOPIA////////////////////////////

//Agregar otoscopia
app.post('/crear_otoscopia', (req, res) => {

    //Conexion
    console.log("Tratando de crear otoscopia nuevo..")
    const Normal = req.body.Normal;
    const AlteracionCongenita = req.body.AlteracionCongenita;
    const Ausente = req.body.Ausente;
    const caeNormal = req.body.caeNormal;
    const Colapsado = req.body.Colapsado;
    const Congenita = req.body.Congenita;
    const Cerumen = req.body.Cerumen;
    const CerumenP = req.body.CerumenP;
    const CerumenT = req.body.CerumenT;
    const CerumenI = req.body.CerumenI;
    const CerumenIP = req.body.CerumenIP;
    const CerumenIT = req.body.CerumenIT;
    const Extraccion = req.body.Extraccion; // ExtraccionN, ExtraccionS, MembrNacaNorD, MembrNacaNorI, MembrNacaRojD, MembrNacaRojI, MembrNacaOcpD, MembrNacaOcpI,
    // MembrNacaPerD, MembrNacaPerI, MembrNacaRetD, MembrNacaRetI, MembrNacaMonoD, MembrNacaMonoI
    const MembrNacaNor = req.body.MembrNacaNor;
    const MembrNacaPerD = req.body.MembrNacaPerD;
    const MembrNacaRetD = req.body.MembrNacaRetD;
    const MembrNacaMonoD = req.body.MembrNacaMonoD;
    const MembrNacaPerI = req.body.MembrNacaPerI;
    const MembrNacaRetI = req.body.MembrNacaRetI;
    const MembrNacaMonoI = req.body.MembrNacaMonoI;
    const Otorragia = req.body.Otorragia;
    const Otorrea = req.body.Otorrea;
    const Otitis = req.body.Otitis;
    const hallazgos = req.body.hallazgos;
    const cedula = req.body.cedula;

    const queryString = "INSERT INTO Otoscopia (Normal, AlteracionCongenita, Ausente, caeNormal, Colapsado, Congenita, Cerumen, CerumenP, CerumenT, CerumenI, CerumenIP, CerumenIT, Extraccion, MembrNacaNor, MembrNacaPerD, MembrNacaRetD, MembrNacaMonoD, MembrNacaPerI, MembrNacaRetI, MembrNacaMonoI, Otorragia, Otorrea, Otitis, hallazgos, cedula  )  VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(queryString, [Normal, AlteracionCongenita, Ausente, caeNormal, Colapsado, Congenita, Cerumen, CerumenP, CerumenT, CerumenI, CerumenIP, CerumenIT, Extraccion, MembrNacaNor, MembrNacaPerD, MembrNacaRetD, MembrNacaMonoD, MembrNacaPerI, MembrNacaRetI, MembrNacaMonoI, Otorragia, Otorrea, Otitis, hallazgos, cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al agregar nuevo otoscopia: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego otoscopia con id: ", results.InsertId);
        res.end()

    })
})

//Editar otoscopia
app.put('/editar_otoscopia/:cedula', (req, res) => {

    //Conexion
    console.log("Tratando de editar Otoscopia..")
    const cedula = req.params.cedula;
    const Normal = req.body.Normal;
    const AlteracionCongenita = req.body.AlteracionCongenita;
    const Ausente = req.body.Ausente;
    const caeNormal = req.body.caeNormal;
    const Colapsado = req.body.Colapsado;
    const Congenita = req.body.Congenita;
    const Cerumen = req.body.Cerumen;
    const CerumenP = req.body.CerumenP;
    const CerumenT = req.body.CerumenT;
    const CerumenI = req.body.CerumenI;
    const CerumenIP = req.body.CerumenIP;
    const CerumenIT = req.body.CerumenIT;
    const Extraccion = req.body.Extraccion;
    const MembrNacaNor = req.body.MembrNacaNor;
    const MembrNacaPerD = req.body.MembrNacaPerD;
    const MembrNacaRetD = req.body.MembrNacaRetD;
    const MembrNacaMonoD = req.body.MembrNacaMonoD;
    const MembrNacaPerI = req.body.MembrNacaPerI;
    const MembrNacaRetI = req.body.MembrNacaRetI;
    const MembrNacaMonoI = req.body.MembrNacaMonoI;
    const Otorragia = req.body.Otorragia;
    const Otorrea = req.body.Otorrea;
    const Otitis = req.body.Otitis;
    const hallazgos = req.body.hallazgos;


    const queryString = "UPDATE otoscopia SET Normal =?, AlteracionCongenita =?, Ausente =?,  caeNormal =?, Colapsado =?, Congenita =?, Cerumen =?, CerumenI =?, CerumenP =?, CerumenT =?, CerumenIP =?, CerumenIT =?, Extraccion=?,  MembrNacaNor=?, MembrNacaPerD=?, MembrNacaRetD=?, MembrNacaMonoD=?, MembrNacaPerI=?, MembrNacaRetI=?, MembrNacaMonoI=?, Otorragia =?, Otorrea =?, Otitis =?, hallazgos =? WHERE cedula = ?"
    connection.query(queryString, [Normal, AlteracionCongenita, Ausente, caeNormal, Colapsado, Congenita, Cerumen, CerumenI, CerumenP, CerumenT, CerumenIP, CerumenIT, Extraccion, MembrNacaNor, MembrNacaPerD, MembrNacaRetD, MembrNacaMonoD, MembrNacaPerI, MembrNacaRetI, MembrNacaMonoI, Otorragia, Otorrea, Otitis, hallazgos, cedula], (err, results, fields) => {
        if (err) {
            console.log("Error al editar Otoscopia: " + err)
            res.sendStatus(400)
            return
        }
        return res.status(200).json({
            ok: true,
            otoscopia: results.affectedRows
        });
    })
})


//Eliminar otoscopia
app.delete('/borrarotoscopia/:cedula', (req, res) => {
    //Conexion

    const Cedula = req.params.cedula
    const queryString = "DELETE FROM otoscopia WHERE Cedula = ?"
    connection.query(queryString, [Cedula], (err, rows, fields) => {
        if (err) {
            console.log("No existe el Registro" + err)
            res.sendStatus(500)
            res.end()
            return
        }
        res.status(200).json({
            ok: true,
            otoscopia: rows
        });
    })
});

//Seleccionar otoscopia
app.get('/Buscarotoscopia/:cedula', (req, res) => {
    console.log("Seleccionar Otoscopia con id: " + req.params.cedula);
    //Conexion

    const cedula = req.params.cedula;
    const queryString = "SELECT * FROM otoscopia WHERE cedula= ?"
    connection.query(queryString, [cedula], (err, rows, fields) => {
        if (err) {
            return res.status(500).json({
                mensaje: "A ocurrido un Error",
                errors: err
            });
        }
        if (rows.length > 0) {
            //   res.json(rows);
            res.status(200).json({
                ok: true,
                otoscopia: rows
            });
        } else {
            return res.status(200).json({
                ok: false,
                otoscopia: rows
                    // mensaje: "No existe el Empleado ",
                    //  errors: error
            });
        }
    })
});

//////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'dist')));


app.listen(3000, () => {
    console.log('Server on port 3000');
});