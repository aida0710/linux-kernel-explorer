---
sidebar_position: 71
---
# ecrdsa_params.asn1

### ファイル情報

- パス: `linux-v6.12/crypto/ecrdsa_params.asn1`

### コンテンツ

```asn1
EcrdsaParams ::= SEQUENCE {
	curve	OBJECT IDENTIFIER ({ ecrdsa_param_curve }),
	digest	OBJECT IDENTIFIER OPTIONAL ({ ecrdsa_param_digest })
}

```
