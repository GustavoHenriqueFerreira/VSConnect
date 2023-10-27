package Vsconnect.senai.controllers;

import Vsconnect.senai.dtos.UsuarioDto;
import Vsconnect.senai.models.UsuarioModel;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import Vsconnect.senai.repositories.UsuarioRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController //Annotation para definir controller
@RequestMapping(value = "/usuarios", produces = {"application/json"})
public class UsuarioController {
    @Autowired //Injeção de dependência (deixar o código desacoplado, classe que utiliza funcionalidades de outras classes)
    UsuarioRepository usuarioRepository;

    @GetMapping
    public ResponseEntity<List<UsuarioModel>> listarUsuarios() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.findAll());
    };

    @GetMapping("/{idUsuario}")
    public ResponseEntity<Object> buscarUsuario(@PathVariable(value = "idUsuario") UUID id){
        Optional<UsuarioModel> usuarioBuscado = usuarioRepository.findById(id);

        if (usuarioBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(usuarioBuscado.get());
    }

    @PostMapping
    public ResponseEntity<Object> criarUsuario(@RequestBody @Valid UsuarioDto usuarioDto){
        if (usuarioRepository.findByEmail(usuarioDto.email()) != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email já cadastrado");
        }

        UsuarioModel novoUsuario = new UsuarioModel();

        BeanUtils.copyProperties(usuarioDto, novoUsuario);

        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(novoUsuario));
    }

    @PutMapping("/{idUsuario}") //PathVariable = Pega o valor passado da url, RequestBody: Pega os valores do Body
    public ResponseEntity<Object> alterarUsuario(@PathVariable(value = "idUsuario") UUID id, @RequestBody @Valid UsuarioDto usuarioDto){
        Optional<UsuarioModel> usuarioBuscado = usuarioRepository.findById(id); //Procura o usuario atraves do id, caso nao existe ele nao prossegue

        if (usuarioBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }

        UsuarioModel usuarioDb = usuarioBuscado.get();

        BeanUtils.copyProperties(usuarioDto, usuarioDb); // as informações do dto são puxadas pela url e passadas para o usuario do database

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(usuarioRepository.save(usuarioDb));
    };

    @PatchMapping("/{idUsuario}")
    public ResponseEntity<Object> atualizarEmailUsuario(@PathVariable(value = "idUsuario") UUID id, @RequestBody UsuarioDto usuarioDto) {
        Optional<UsuarioModel> usuarioBuscado = usuarioRepository.findById(id);

        if (usuarioBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
        }

        UsuarioModel usuarioDb = usuarioBuscado.get();

        // Atualize o campo de email com o valor do DTO, se o email não estiver em branco.
        if (usuarioDto.email() != null && !usuarioDto.email().isEmpty()) {
            usuarioDb.setEmail(usuarioDto.email());
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(usuarioRepository.save(usuarioDb));
    }

    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<Object> deletarUsuario(@PathVariable(value = "idUsuario") UUID id){
        Optional<UsuarioModel> usuarioBuscado = usuarioRepository.findById(id);

        if (usuarioBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }

        usuarioRepository.delete(usuarioBuscado.get()); //deletar o usuario buscasdo

        return ResponseEntity.status(HttpStatus.OK).body("Usuário deletado com sucesso!");
    };
}
