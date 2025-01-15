---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `net/ipv6/ila/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ILA module
#

obj-$(CONFIG_IPV6_ILA) += ila.o

ila-objs := ila_main.o ila_common.o ila_lwt.o ila_xlat.o

```
