---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `net/nsh/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig NET_NSH
	tristate "Network Service Header (NSH) protocol"
	default n
	help
	  Network Service Header is an implementation of Service Function
	  Chaining (RFC 7665). The current implementation in Linux supports
	  only MD type 1 and only with the openvswitch module.

	  If unsure, say N.

```
