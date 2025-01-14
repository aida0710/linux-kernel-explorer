---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/qedr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_INFINIBAND_QEDR) := qedr.o

qedr-y := main.o verbs.o qedr_roce_cm.o qedr_iw_cm.o

```
