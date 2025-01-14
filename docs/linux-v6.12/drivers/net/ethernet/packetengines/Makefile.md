---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/packetengines/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Packet Engines network device drivers.
#

obj-$(CONFIG_HAMACHI) += hamachi.o
obj-$(CONFIG_YELLOWFIN) += yellowfin.o

```
