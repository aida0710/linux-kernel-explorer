---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/nubus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the nubus specific drivers.
#

obj-y := nubus.o bus.o

obj-$(CONFIG_PROC_FS) += proc.o

```
