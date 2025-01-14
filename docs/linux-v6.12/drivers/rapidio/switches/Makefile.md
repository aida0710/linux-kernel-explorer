---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/rapidio/switches/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for RIO switches
#

obj-$(CONFIG_RAPIDIO_CPS_XX)	+= idtcps.o
obj-$(CONFIG_RAPIDIO_CPS_GEN2)	+= idt_gen2.o
obj-$(CONFIG_RAPIDIO_RXS_GEN3)	+= idt_gen3.o

```
