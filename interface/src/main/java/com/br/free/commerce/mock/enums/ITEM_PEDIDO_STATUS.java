package com.br.free.commerce.mock.enums;

/**
 * Created by eduardosanson on 16/01/16.
 */
public enum ITEM_PEDIDO_STATUS {
    ENTREGUE("success","Entregue"),EM_SEPARACAO("warning","EM Separação"),A_CAMINHO("info","No Transporte"),EXTRAVIADO("danger","Extraviado");


    private String status;
    private String descricao;

    ITEM_PEDIDO_STATUS(String status,String descricao) {
        this.status = status;
        this.descricao = descricao;
    }

    public String getStatus() {
        return status;
    }

    public String getDescricao() {
        return descricao;
    }
}
