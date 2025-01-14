---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/fcoe/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_FCOE) += fcoe.o
obj-$(CONFIG_LIBFCOE) += libfcoe.o

libfcoe-objs := fcoe_ctlr.o fcoe_transport.o fcoe_sysfs.o

```
