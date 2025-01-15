---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `net/packet/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the packet AF.
#

obj-$(CONFIG_PACKET) += af_packet.o
obj-$(CONFIG_PACKET_DIAG) += af_packet_diag.o
af_packet_diag-y += diag.o

```
