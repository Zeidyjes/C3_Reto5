package Principal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"Principal.Model"})

public class ZeidyReto5Application {

	public static void main(String[] args) {
		SpringApplication.run(ZeidyReto5Application.class, args);
	}

}
