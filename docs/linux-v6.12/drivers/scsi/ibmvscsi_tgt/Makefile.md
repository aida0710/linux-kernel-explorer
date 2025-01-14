---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/ibmvscsi_tgt/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SCSI_IBMVSCSIS)	+= ibmvscsis.o

ibmvscsis-y := libsrp.o ibmvscsi_tgt.o

```
