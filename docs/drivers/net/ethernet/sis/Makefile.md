---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/sis/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Silicon Integrated Systems (SiS) network device drivers.
#

obj-$(CONFIG_SIS190) += sis190.o
obj-$(CONFIG_SIS900) += sis900.o

```
