package com.br.free.commerce.mock.entity;

import java.util.List;

/**
 * Created by eduardosanson on 16/01/16.
 */
public class Pedido {

    private long id;

    private List<ItemPedido> Item;

    public List<ItemPedido> getItem() {
        return Item;
    }

    public void setItem(List<ItemPedido> item) {
        Item = item;
    }

    public long getId() {

        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
