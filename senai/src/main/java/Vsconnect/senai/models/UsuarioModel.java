package Vsconnect.senai.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.io.Serial;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "tbusuarios")
public class UsuarioModel implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_usuario", nullable = false)
    private UUID id;

    private String nome;
    private String email;
    private String senha;
    private String endereco;
    private String cep;

    private String tipo_usuario;

    private String url_img;
}