---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/kcm/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config AF_KCM
	tristate "KCM sockets"
	depends on INET
	select BPF_SYSCALL
	select STREAM_PARSER
	help
	  KCM (Kernel Connection Multiplexor) sockets provide a method
	  for multiplexing messages of a message based application
	  protocol over kernel connectons (e.g. TCP connections).

```
