---
sidebar_position: 115
---
# rsapubkey.asn1

### ファイル情報

- パス: `linux-v6.12/crypto/rsapubkey.asn1`

### コンテンツ

```asn1
-- SPDX-License-Identifier: BSD-3-Clause
--
-- Copyright (C) 2016 IETF Trust and the persons identified as authors
-- of the code
--
-- https://www.rfc-editor.org/rfc/rfc8017#appendix-A.1.1

RsaPubKey ::= SEQUENCE {
	n INTEGER ({ rsa_get_n }),
	e INTEGER ({ rsa_get_e })
}

```
