---
sidebar_position: 24
---
# nf_nat_snmp_basic.asn1

### ファイル情報

- パス: `net/ipv4/netfilter/nf_nat_snmp_basic.asn1`

### コンテンツ

```asn1
-- SPDX-License-Identifier: BSD-3-Clause
--
-- Copyright (C) 1990, 2002 IETF Trust and the persons identified as authors
-- of the code
--
-- https://www.rfc-editor.org/rfc/rfc1157#section-4
-- https://www.rfc-editor.org/rfc/rfc3416#section-3

Message ::=
	SEQUENCE {
		version
			INTEGER ({snmp_version}),

		community
			OCTET STRING,

		pdu
			PDUs
	}


ObjectName ::=
	OBJECT IDENTIFIER

ObjectSyntax ::=
	CHOICE {
		simple
			SimpleSyntax,

		application-wide
			ApplicationSyntax
	}

SimpleSyntax ::=
	CHOICE {
		integer-value
			INTEGER,

		string-value
			OCTET STRING,

		objectID-value
			OBJECT IDENTIFIER
	}

ApplicationSyntax ::=
	CHOICE {
		ipAddress-value
			IpAddress,

		counter-value
			Counter32,

		timeticks-value
			TimeTicks,

		arbitrary-value
			Opaque,

		big-counter-value
			Counter64,

		unsigned-integer-value
			Unsigned32
	}

IpAddress ::=
	[APPLICATION 0]
		IMPLICIT OCTET STRING OPTIONAL ({snmp_helper})

Counter32 ::=
	[APPLICATION 1]
		IMPLICIT INTEGER OPTIONAL

Unsigned32 ::=
	[APPLICATION 2]
		IMPLICIT INTEGER OPTIONAL

Gauge32 ::= Unsigned32 OPTIONAL

TimeTicks ::=
	[APPLICATION 3]
		IMPLICIT INTEGER OPTIONAL

Opaque ::=
	[APPLICATION 4]
		IMPLICIT OCTET STRING OPTIONAL

Counter64 ::=
	[APPLICATION 6]
		IMPLICIT INTEGER OPTIONAL

PDUs ::=
	CHOICE {
		get-request
			GetRequest-PDU,

		get-next-request
			GetNextRequest-PDU,

		get-bulk-request
			GetBulkRequest-PDU,

		response
			Response-PDU,

		set-request
			SetRequest-PDU,

		inform-request
			InformRequest-PDU,

		snmpV2-trap
			SNMPv2-Trap-PDU,

		report
			Report-PDU
	}

GetRequest-PDU ::=
	[0] IMPLICIT PDU OPTIONAL

GetNextRequest-PDU ::=
	[1] IMPLICIT PDU OPTIONAL

Response-PDU ::=
	[2] IMPLICIT PDU OPTIONAL

SetRequest-PDU ::=
	[3] IMPLICIT PDU OPTIONAL

-- [4] is obsolete

GetBulkRequest-PDU ::=
	[5] IMPLICIT PDU OPTIONAL

InformRequest-PDU ::=
	[6] IMPLICIT PDU OPTIONAL

SNMPv2-Trap-PDU ::=
	[7] IMPLICIT PDU OPTIONAL

Report-PDU ::=
	[8] IMPLICIT PDU OPTIONAL

PDU ::=
	SEQUENCE {
		request-id
			INTEGER,

		error-status
			INTEGER,

		error-index
			INTEGER,

		variable-bindings
			VarBindList
	}


VarBind ::=
	SEQUENCE {
		name
			ObjectName,

	CHOICE {
		value
			ObjectSyntax,

		unSpecified
			NULL,

		noSuchObject
			[0] IMPLICIT NULL,

		noSuchInstance
			[1] IMPLICIT NULL,

		endOfMibView
			[2] IMPLICIT NULL
	}
}

VarBindList ::= SEQUENCE OF VarBind

```
