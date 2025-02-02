---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `net/tls/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# TLS configuration
#
config TLS
	tristate "Transport Layer Security support"
	depends on INET
	select CRYPTO
	select CRYPTO_AES
	select CRYPTO_GCM
	select STREAM_PARSER
	select NET_SOCK_MSG
	default n
	help
	Enable kernel support for TLS protocol. This allows symmetric
	encryption handling of the TLS protocol to be done in-kernel.

	If unsure, say N.

config TLS_DEVICE
	bool "Transport Layer Security HW offload"
	depends on TLS
	select SKB_DECRYPTED
	select SOCK_VALIDATE_XMIT
	select SOCK_RX_QUEUE_MAPPING
	default n
	help
	Enable kernel support for HW offload of the TLS protocol.

	If unsure, say N.

config TLS_TOE
	bool "Transport Layer Security TCP stack bypass"
	depends on TLS
	default n
	help
	Enable kernel support for legacy HW offload of the TLS protocol,
	which is incompatible with the Linux networking stack semantics.

	If unsure, say N.

```
