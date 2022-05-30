package no.dirik.TennisTournamentSystem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Player {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String gender;
    private String email;

    protected Player() {}

    public Player(String firstName, String lastName, String gender, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }

    @Override
    public String toString() {
        return String.format("Player[id=%d, firstName=%D, lastName=%d, gender=%d, email=%d", this.id, this.firstName, this.lastName, this.gender, this.email);
    }

    public Long getId() {
        return this.id;
    }
    
}
