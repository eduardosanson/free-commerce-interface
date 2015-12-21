package com.br.free.commerce.mock.controller;

import com.br.free.commerce.mock.entity.Produto;
import com.br.free.commerce.mock.util.ProdutosUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by eduardosanson on 20/12/15.
 */

@RestController
@RequestMapping("/buscaController")
@CrossOrigin(origins = "http://localhost:8080")
public class BuscaController {

    @RequestMapping(path ="/quatroMaisVendidos", method = RequestMethod.GET)
    public List<Produto> buscarQuatroProdutosMaisVendidos(){

        return ProdutosUtil.criarQuatroProdutos();
    }

    @RequestMapping(path ="/ultimosProdutosVendidos", method = RequestMethod.GET)
    public List<Produto> buscarUltimosProdutosVendidos(){

        return ProdutosUtil.criarUltimosProdutosVendidos();
    }
}
