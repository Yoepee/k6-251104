package com.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class PtK6251104Application {

    public static void main(String[] args) {
        SpringApplication.run(PtK6251104Application.class, args);
    }

}
