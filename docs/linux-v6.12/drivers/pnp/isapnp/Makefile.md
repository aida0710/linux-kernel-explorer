---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pnp/isapnp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the kernel ISAPNP driver.
#
obj-y			+= pnp.o
pnp-y			:= core.o compat.o

pnp-$(CONFIG_PROC_FS)	+= proc.o

```
