package spring.datasimulate.datasimulate.exceptions;

public class ParamErrorException extends RuntimeException {

    public ParamErrorException(String errorMsg) {
        super(errorMsg);
    }
}
