---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/mana/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_MANA_INFINIBAND) += mana_ib.o

mana_ib-y := device.o main.o wq.o qp.o cq.o mr.o

```
