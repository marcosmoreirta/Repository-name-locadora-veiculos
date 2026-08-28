import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(
    name = "clientes",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_cliente_cpf", columnNames = "cpf"),
        @UniqueConstraint(name = "uk_cliente_cnh", columnNames = "cnh")
    }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String nome;

    @Column(nullable = false, length = 20, unique = true)
    private String cpf;

    @Column(nullable = false, length = 20, unique = true)
    private String cnh;

    @Column(length = 20)
    private String telefone;

    @Column(length = 120)
    private String email;
}