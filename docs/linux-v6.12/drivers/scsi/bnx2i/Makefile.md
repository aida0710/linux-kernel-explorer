---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/bnx2i/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
bnx2i-y := bnx2i_init.o bnx2i_hwi.o bnx2i_iscsi.o bnx2i_sysfs.o

obj-$(CONFIG_SCSI_BNX2_ISCSI) += bnx2i.o

```
