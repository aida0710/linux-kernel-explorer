---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/sni/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the SNI specific part of the kernel
#

obj-y += irq.o reset.o setup.o a20r.o rm200.o pcimt.o pcit.o time.o
obj-$(CONFIG_EISA) += eisa.o

```
