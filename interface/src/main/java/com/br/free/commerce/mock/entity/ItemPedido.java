package com.br.free.commerce.mock.entity;

import com.br.free.commerce.mock.enums.ITEM_PEDIDO_STATUS;

/**
 * Created by eduardosanson on 16/01/16.
 */
public class ItemPedido {

    private long id;

    private Produto produto;

    private int quantidade;

    private ITEM_PEDIDO_STATUS status;

    private String descricao;

    private String statusString;

    public ITEM_PEDIDO_STATUS getStatus() {
        return status;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getStatusString() {
        return statusString;
    }

    public void setStatus(ITEM_PEDIDO_STATUS status) {
        this.status = status;
        this.descricao = status.getDescricao();
        this.statusString = status.getStatus();
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public Produto getProduto() {

        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public long getId() {

        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
