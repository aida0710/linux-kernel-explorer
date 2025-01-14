---
sidebar_position: 3
---
# tpm2key.asn1

### ファイル情報

- パス: `linux-v6.12/security/keys/trusted-keys/tpm2key.asn1`

### コンテンツ

```asn1
---
--- ASN.1 for TPM 2.0 keys
---

TPMKey ::= SEQUENCE {
	type		OBJECT IDENTIFIER ({tpm2_key_type}),
	emptyAuth	[0] EXPLICIT BOOLEAN OPTIONAL,
	parent		INTEGER ({tpm2_key_parent}),
	pubkey		OCTET STRING ({tpm2_key_pub}),
	privkey		OCTET STRING ({tpm2_key_priv})
	}

```
