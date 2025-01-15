---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/slip/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the SLIP network device drivers.
#

obj-$(CONFIG_SLIP) += slip.o
obj-$(CONFIG_SLHC) += slhc.o

```
