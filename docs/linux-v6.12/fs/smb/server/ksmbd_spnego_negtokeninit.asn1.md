---
sidebar_position: 12
---
# ksmbd_spnego_negtokeninit.asn1

### ファイル情報

- パス: `linux-v6.12/fs/smb/server/ksmbd_spnego_negtokeninit.asn1`

### コンテンツ

```asn1
-- SPDX-License-Identifier: BSD-3-Clause
--
-- Copyright (C) 1998, 2000 IETF Trust and the persons identified as authors
-- of the code
--
-- https://www.rfc-editor.org/rfc/rfc2478#section-3.2.1
-- https://www.rfc-editor.org/rfc/rfc2743#section-3.1

GSSAPI ::=
	[APPLICATION 0] IMPLICIT SEQUENCE {
		thisMech
			OBJECT IDENTIFIER ({ksmbd_gssapi_this_mech}),
		negotiationToken
			NegotiationToken
	}

MechType ::= OBJECT IDENTIFIER ({ksmbd_neg_token_init_mech_type})

MechTypeList ::= SEQUENCE OF MechType

NegTokenInit ::=
	SEQUENCE {
		mechTypes
			[0] MechTypeList,
		reqFlags
			[1] BIT STRING OPTIONAL,
		mechToken
			[2] OCTET STRING OPTIONAL ({ksmbd_neg_token_init_mech_token}),
		mechListMIC
			[3] OCTET STRING OPTIONAL
	}

NegotiationToken ::=
	CHOICE {
		negTokenInit
			[0] NegTokenInit,
		negTokenTarg
			[1] ANY
	}

```
