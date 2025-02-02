---
sidebar_position: 203
---
# tls_prot.h

### ファイル情報

- パス: `include/net/tls_prot.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause */
/*
 * Copyright (c) 2023, Oracle and/or its affiliates.
 *
 * TLS Protocol definitions
 *
 * From https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml
 */

#ifndef _TLS_PROT_H
#define _TLS_PROT_H

/*
 * TLS Record protocol: ContentType
 */
enum {
	TLS_RECORD_TYPE_CHANGE_CIPHER_SPEC = 20,
	TLS_RECORD_TYPE_ALERT = 21,
	TLS_RECORD_TYPE_HANDSHAKE = 22,
	TLS_RECORD_TYPE_DATA = 23,
	TLS_RECORD_TYPE_HEARTBEAT = 24,
	TLS_RECORD_TYPE_TLS12_CID = 25,
	TLS_RECORD_TYPE_ACK = 26,
};

/*
 * TLS Alert protocol: AlertLevel
 */
enum {
	TLS_ALERT_LEVEL_WARNING = 1,
	TLS_ALERT_LEVEL_FATAL = 2,
};

/*
 * TLS Alert protocol: AlertDescription
 */
enum {
	TLS_ALERT_DESC_CLOSE_NOTIFY = 0,
	TLS_ALERT_DESC_UNEXPECTED_MESSAGE = 10,
	TLS_ALERT_DESC_BAD_RECORD_MAC = 20,
	TLS_ALERT_DESC_RECORD_OVERFLOW = 22,
	TLS_ALERT_DESC_HANDSHAKE_FAILURE = 40,
	TLS_ALERT_DESC_BAD_CERTIFICATE = 42,
	TLS_ALERT_DESC_UNSUPPORTED_CERTIFICATE = 43,
	TLS_ALERT_DESC_CERTIFICATE_REVOKED = 44,
	TLS_ALERT_DESC_CERTIFICATE_EXPIRED = 45,
	TLS_ALERT_DESC_CERTIFICATE_UNKNOWN = 46,
	TLS_ALERT_DESC_ILLEGAL_PARAMETER = 47,
	TLS_ALERT_DESC_UNKNOWN_CA = 48,
	TLS_ALERT_DESC_ACCESS_DENIED = 49,
	TLS_ALERT_DESC_DECODE_ERROR = 50,
	TLS_ALERT_DESC_DECRYPT_ERROR = 51,
	TLS_ALERT_DESC_TOO_MANY_CIDS_REQUESTED	= 52,
	TLS_ALERT_DESC_PROTOCOL_VERSION = 70,
	TLS_ALERT_DESC_INSUFFICIENT_SECURITY = 71,
	TLS_ALERT_DESC_INTERNAL_ERROR = 80,
	TLS_ALERT_DESC_INAPPROPRIATE_FALLBACK = 86,
	TLS_ALERT_DESC_USER_CANCELED = 90,
	TLS_ALERT_DESC_MISSING_EXTENSION = 109,
	TLS_ALERT_DESC_UNSUPPORTED_EXTENSION = 110,
	TLS_ALERT_DESC_UNRECOGNIZED_NAME = 112,
	TLS_ALERT_DESC_BAD_CERTIFICATE_STATUS_RESPONSE = 113,
	TLS_ALERT_DESC_UNKNOWN_PSK_IDENTITY = 115,
	TLS_ALERT_DESC_CERTIFICATE_REQUIRED = 116,
	TLS_ALERT_DESC_NO_APPLICATION_PROTOCOL = 120,
};

#endif /* _TLS_PROT_H */

```
