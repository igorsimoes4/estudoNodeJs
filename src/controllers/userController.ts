import {  Request, Response  } from 'express';

export const nome = ( req: Request, res: Response )=>{

    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = ( req: Request, res: Response ) => {
    // let idade: number = 0;
    // let mostraridade: boolean = false;

    // // Recebendo dados pelo metodo GET
    // if( req.query.ano ) {
    //     let anoNascimento: number = parseInt(req.query.ano as string);
    //     let anoAtual: number = new Date().getFullYear();

    //     idade = anoAtual - anoNascimento;
    //     mostraridade = true;
    // }
    // res.render('pages/idade', {
    //     idade,
    //     mostraridade
    // });
    res.render('pages/idade');
};

export const idadeAction = ( req: Request, res: Response ) => {
    let idade: number = 0;
    let mostraridade: boolean = false;

    // Recebendo dados pelo metodo POST
    if( req.body.ano ) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();

        idade = anoAtual - anoNascimento;
        mostraridade = true;
    }
    res.render('pages/idade', {
        idade,
        mostraridade
    });
};