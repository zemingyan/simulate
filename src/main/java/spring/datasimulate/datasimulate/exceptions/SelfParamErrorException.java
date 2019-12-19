package spring.datasimulate.datasimulate.exceptions;

public class SelfParamErrorException extends RuntimeException{
    private String errorMsg;
    public SelfParamErrorException(String errorMsg){
        this.errorMsg = errorMsg;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
