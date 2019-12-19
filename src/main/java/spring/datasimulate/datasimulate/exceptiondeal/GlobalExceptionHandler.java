package spring.datasimulate.datasimulate.exceptiondeal;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import spring.datasimulate.datasimulate.exceptions.SelfParamErrorException;
import spring.datasimulate.datasimulate.exceptions.UserNotFountException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFountException.class)
    public ResponseEntity<Error> UserNotFound(UserNotFountException e){
        e.printStackTrace();
        String userId = e.getUserId();
        Error error = new Error(404 , "User （"+userId+") not found");
        return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(SelfParamErrorException.class)
    public ResponseEntity<Error> paramError(SelfParamErrorException e){
        e.printStackTrace();
        String errorMsg = e.getErrorMsg();
        Error error = new Error(404, errorMsg);
        return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
    }
}
