package com.br.free.commerce.mock.util;

import com.br.free.commerce.mock.entity.ItemPedido;
import com.br.free.commerce.mock.entity.Pedido;
import com.br.free.commerce.mock.entity.Produto;
import com.br.free.commerce.mock.enums.ITEM_PEDIDO_STATUS;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by eduardosanson on 20/12/15.
 */
public class ProdutosUtil {

    public static List<Produto> criarQuatroProdutos(){
        Produto prod1;
        List<Produto> produtos = new ArrayList<Produto>();

        prod1 = new Produto();
        prod1.setName("iPhone");
        prod1.setTechDescription("6 Plus");
        prod1.setDescription("Dual SIM");
        prod1.setImage("img/h4-slide.png");
        prod1.setPrice(5000.);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("by one, get one");
        prod1.setTechDescription("50% off");
        prod1.setDescription("school supplies & backpacks.*f");
        prod1.setImage("img/h4-slide2.png");
        prod1.setPrice(200.);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Apple");
        prod1.setTechDescription("Store Ipod");
        prod1.setDescription("Select Item");
        prod1.setImage("img/h4-slide3.png");
        prod1.setPrice(2500.);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Apple");
        prod1.setTechDescription("Store Ipod");
        prod1.setDescription("& Phone");
        prod1.setImage("img/h4-slide4.png");
        prod1.setPrice(2500.);

        produtos.add(prod1);

        return produtos;
    }

    public static List<Produto> criarUltimosProdutosVendidos(){
        Produto prod1;
        List<Produto> produtos = new ArrayList<Produto>();

        prod1 = new Produto();
        prod1.setName("Samsung Galaxy s5- 2015");
        prod1.setLastPrice(800.0);
        prod1.setImage("img/product-1.jpg");
        prod1.setPrice(700.0);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Nokia Lumia 1320");
        prod1.setLastPrice(999.0);
        prod1.setImage("img/product-2.jpg");
        prod1.setPrice(899.0);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("LG Leon 2015");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-3.jpg");
        prod1.setPrice(400.0);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Sony microsoft");
        prod1.setLastPrice(225.0);
        prod1.setImage("img/product-4.jpg");
        prod1.setPrice(200.0);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("iPhone 6");
        prod1.setLastPrice(1355.0);
        prod1.setImage("img/product-5.jpg");
        prod1.setPrice(1200.0);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Samsung gallaxy note 4");
        prod1.setLastPrice(300.00);
        prod1.setImage("img/product-6.jpg");
        prod1.setPrice(400.0);

        produtos.add(prod1);

        return produtos;
    }

    public static List<Produto> criarTopSellers() {
        Produto prod1;
        List<Produto> produtos = new ArrayList<Produto>();

        prod1 = new Produto();
        prod1.setName("Apple new i phone 6");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-1.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(3);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Samsung gallaxy note 4");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-2.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(4);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Apple new mac book 2015");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-3.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(2);

        produtos.add(prod1);

        return produtos;
    }

    public static List<Produto> criarRecentlyViewer() {
        Produto prod1;
        List<Produto> produtos = new ArrayList<Produto>();

        prod1 = new Produto();
        prod1.setName("Sony Smart TV - 2015");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-4.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(3);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Apple new i phone 6");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-1.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(4);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Samsung gallaxy note 4");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-2.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(4);

        produtos.add(prod1);

        return produtos;
    }

    public static List<Produto> criarTopNew() {
        Produto prod1;
        List<Produto> produtos = new ArrayList<Produto>();

        prod1 = new Produto();
        prod1.setName("Apple new mac book 2015");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-3.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(3);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Sony Smart TV - 2015");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-4.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(4);

        produtos.add(prod1);

        prod1 = new Produto();
        prod1.setName("Apple new i phone 6");
        prod1.setLastPrice(425.0);
        prod1.setImage("img/product-thumb-1.jpg");
        prod1.setPrice(400.0);
        prod1.setRating(2);

        produtos.add(prod1);

        return produtos;
    }

    public static List<Produto> criarListaDeBusca(){
        Produto produto;
        List<Produto> produtos = new ArrayList<Produto>();

        for(int i = 0; i<3;i++) {
            produto = new Produto();
            produto.setName("Apple new mac book 2015 March :P");
            produto.setLastPrice(999.0);
            produto.setImage("img/product-2.jpg");
            produto.setPrice(899.0);
            produto.setRating(3);

            produtos.add(produto);

            produto = new Produto();
            produto.setName("Apple new mac book 2015 March :P");
            produto.setLastPrice(999.0);
            produto.setImage("img/product-1.jpg");
            produto.setPrice(899.0);
            produto.setRating(3);

            produtos.add(produto);

            produto = new Produto();
            produto.setName("Apple new mac book 2015 March :P");
            produto.setLastPrice(999.0);
            produto.setImage("img/product-3.jpg");
            produto.setPrice(899.0);
            produto.setRating(3);

            produtos.add(produto);

            produto = new Produto();
            produto.setName("Apple new mac book 2015 March :P");
            produto.setLastPrice(999.0);
            produto.setImage("img/product-4.jpg");
            produto.setPrice(899.0);
            produto.setRating(3);

            produtos.add(produto);
        }

        return produtos;
    }

    public static List<Pedido> criarListaDePedidos(){
        Produto produto = new Produto();
        Produto produto2 = new Produto();
        Pedido pedido1 = new Pedido();
        Pedido pedido2 = new Pedido();
        ItemPedido itemPedido = new ItemPedido();
        ItemPedido itemPedido2 = new ItemPedido();
        pedido1.setId(31312312L);
        pedido2.setId(312312312L);
        List<ItemPedido> itensPedidos = new ArrayList<>();
        List<ItemPedido> itensPedidos2 = new ArrayList<>();

        List<Pedido> pedidos = new ArrayList<>();


        produto.setName("Apple new mac book 2015 March :P");
        produto.setLastPrice(999.0);
        produto.setImage("img/product-4.jpg");
        produto.setPrice(899.0);
        produto.setRating(3);

        itemPedido.setProduto(produto);
        itemPedido.setQuantidade(2);
        itemPedido.setStatus(ITEM_PEDIDO_STATUS.ENTREGUE);

        itensPedidos.add(itemPedido);

        pedido1.setItem(itensPedidos);
        pedidos.add(pedido1);


        produto2.setName("Sony Smart TV - 2015");
        produto2.setLastPrice(425.0);
        produto2.setImage("img/product-thumb-4.jpg");
        produto2.setPrice(400.0);
        produto2.setRating(4);

        itemPedido2.setProduto(produto2);
        itemPedido2.setQuantidade(1);
        itemPedido2.setStatus(ITEM_PEDIDO_STATUS.EXTRAVIADO);

        itensPedidos2.add(itemPedido2);
        pedido2.setItem(itensPedidos2);

        pedidos.add(pedido2);

        return pedidos;

    }

}
