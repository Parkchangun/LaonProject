package com.laonstory.demo.domain.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "member")
public class Member{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 20, nullable = false)
    private String email;
    @Column(length = 100, nullable = false)
    private String password;

    @Builder
    public Member(Integer id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}
