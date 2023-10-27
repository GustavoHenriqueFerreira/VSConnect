package Vsconnect.senai.services;

import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileUploadService {
    private final Path diretorio_img = Paths.get(System.getProperty("user.dir") + "\\src\\main\\resources\\static\\img"); //as duas barras faz anular o padrao de uma barra
}
