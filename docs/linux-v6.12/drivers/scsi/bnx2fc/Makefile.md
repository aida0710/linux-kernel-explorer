---
sidebar_position: 12
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/bnx2fc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SCSI_BNX2X_FCOE) += bnx2fc.o

bnx2fc-y := bnx2fc_els.o bnx2fc_fcoe.o bnx2fc_hwi.o bnx2fc_io.o bnx2fc_tgt.o \
	    bnx2fc_debug.o

```
