const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1'
const port = '3002'

// request = data masuk dari luar
// response = data keluar dari sistem
const server =  http.createServer(function (request, response){
    const nama = "pinje";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)


    const hasil = `
    <head>
        <title>${nama}</title>
    </head>
    <body>
        <h1 style ='background: black; color: white; padding: 20px; text-align: center'>Node JS Test</h1>
        <p>
            Halo nama saya ${nama}. Saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}
        </p>
    </body>
    
`


    response.statusCode = 203;
    response.end(hasil);
});

server.listen(port, host, '', function(){
    console.log(`Server on at ${host}:${port} `);
});