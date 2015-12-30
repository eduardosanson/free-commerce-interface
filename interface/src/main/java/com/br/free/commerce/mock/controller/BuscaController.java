package com.br.free.commerce.mock.controller;

import com.br.free.commerce.mock.entity.Produto;
import com.br.free.commerce.mock.util.ProdutosUtil;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eduardosanson on 20/12/15.
 */

@RestController
@RequestMapping("/buscaController")
@CrossOrigin(origins = "http://localhost:8080")
public class BuscaController {

    @RequestMapping(path ="/quatroMaisVendidos", method = RequestMethod.GET)
    public List<Produto> buscarQuatroProdutosMaisVendidos(){return ProdutosUtil.criarQuatroProdutos();}

    @RequestMapping(path ="/ultimosProdutosVendidos", method = RequestMethod.GET)
    public List<Produto> buscarUltimosProdutosVendidos(){return ProdutosUtil.criarUltimosProdutosVendidos();}

    @RequestMapping(path = "/topSellers",method = RequestMethod.GET)
    public List<Produto> topSellers(){return ProdutosUtil.criarTopSellers();}

    @RequestMapping(path = "/recentlyViewer",method = RequestMethod.GET)
    public List<Produto> recentlyViewer(){return ProdutosUtil.criarRecentlyViewer();}

    @RequestMapping(path = "/topNew",method = RequestMethod.GET)
    public List<Produto> topNew(){return ProdutosUtil.criarTopNew();}

    @RequestMapping(path = "/buscarProdutos/PorNome")
    public List<Produto> buscarProdutoPorNome(@RequestParam String productName){return ProdutosUtil.criarListaDeBusca();}

}
