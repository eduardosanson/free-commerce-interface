package com.br.free.commerce.mock.entity;

/**
 * Created by eduardosanson on 20/12/15.
 */
public class Produto {

    private String name;
    private String techDescription;
    private String description;
    private String image;
    private Double value;
    private Double lastPrice;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getPrice() {
        return value;
    }

    public void setPrice(Double value) {
        this.value = value;
    }

    public Double getLastPrice() {
        return lastPrice;
    }

    public void setLastPrice(Double lastPrice) {
        this.lastPrice = lastPrice;
    }

    public String getDescription() {

        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTechDescription() {

        return techDescription;
    }

    public void setTechDescription(String techDescription) {
        this.techDescription = techDescription;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
