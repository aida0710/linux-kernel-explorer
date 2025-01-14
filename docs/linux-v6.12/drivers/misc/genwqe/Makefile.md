---
sidebar_position: 11
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/genwqe/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for GenWQE driver
#

obj-$(CONFIG_GENWQE) := genwqe_card.o
genwqe_card-objs := card_base.o card_dev.o card_ddcb.o card_sysfs.o \
	card_debugfs.o card_utils.o

```
