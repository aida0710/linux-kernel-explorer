---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/can/softing/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

softing-y := softing_main.o softing_fw.o
obj-$(CONFIG_CAN_SOFTING) += softing.o
obj-$(CONFIG_CAN_SOFTING_CS) += softing_cs.o

```
