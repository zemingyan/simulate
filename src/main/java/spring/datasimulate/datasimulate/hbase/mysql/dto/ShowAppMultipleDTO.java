package spring.datasimulate.datasimulate.hbase.mysql.dto;

public class ShowAppMultipleDTO {
    private Integer id;
    private String itemName;

    @Override
    public String toString() {
        return "ShowAppMultipleDTO{" +
                "id=" + id +
                ", itemName='" + itemName + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }
}
