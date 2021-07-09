package com.laonstory.demo.dto;

import com.laonstory.demo.domain.entity.Member;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class MemberDto {
    private Integer id;
    private String email;
    private String password;

    public Member toEntity(){
        return Member.builder()
                .id(id)
                .email(email)
                .password(password)
                .build();
    }

    @Builder
    public MemberDto(Integer id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}
