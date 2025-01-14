---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pnp/pnpbios/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the kernel PNPBIOS driver.
#
obj-y := pnp.o

pnp-y := core.o bioscalls.o rsparser.o

pnp-$(CONFIG_PNPBIOS_PROC_FS) += proc.o

```
