package spring.datasimulate.datasimulate.hbase.angularpacket.phonebrand;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PhoneBrandVO implements Serializable{
    private List<String> date = new ArrayList<>();
    private List<PhoneBrandDTO> phoneBrandDTOS = new ArrayList<>();

    @Override
    public String toString() {
        return "PhoneBrandVO{" +
                "data=" + date +
                ", phoneBrandDTOS=" + phoneBrandDTOS +
                '}';
    }

    public List<String> getDate() {
        return date;
    }

    public void setDate(List<String> date) {
        this.date = date;
    }

    public List<PhoneBrandDTO> getPhoneBrandDTOS() {
        return phoneBrandDTOS;
    }

    public void setPhoneBrandDTOS(List<PhoneBrandDTO> phoneBrandDTOS) {
        this.phoneBrandDTOS = phoneBrandDTOS;
    }
}
