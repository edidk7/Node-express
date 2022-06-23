const http = require('http');

http.createServer((req, res)=>{

    // console.log(req);

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Daniel'
    // }
    
    // res.write(JSON.stringify(persona));
    // res.write( 'id, nombre\n' );
    // res.write( '1, Daniel\n' );
    // res.write( '2, Vale\n' );
    // res.write( '3, liam\n' );
    // res.write( '4, nanu\n' );


    res.write( 'Hola mundo' );
    res.end();
})

.listen( 8080 );

console.log('Escuchado el puerto 8080');