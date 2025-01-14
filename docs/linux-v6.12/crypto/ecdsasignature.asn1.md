---
sidebar_position: 67
---
# ecdsasignature.asn1

### ファイル情報

- パス: `linux-v6.12/crypto/ecdsasignature.asn1`

### コンテンツ

```asn1
ECDSASignature ::= SEQUENCE {
	r	INTEGER ({ ecdsa_get_signature_r }),
	s	INTEGER ({ ecdsa_get_signature_s })
}

```
