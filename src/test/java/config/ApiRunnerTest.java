package config;
import com.intuit.karate.junit5.Karate;

class ApiRunnerTest {

    @Karate.Test
    Karate runAll() {
        return Karate.run("classpath:features");
    }
}
