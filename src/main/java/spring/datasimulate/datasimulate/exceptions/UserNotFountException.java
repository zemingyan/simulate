package spring.datasimulate.datasimulate.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class UserNotFountException extends RuntimeException{
    private String userId;

    public UserNotFountException(String userId) {
        System.out.println("构造一个异常");
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


}
