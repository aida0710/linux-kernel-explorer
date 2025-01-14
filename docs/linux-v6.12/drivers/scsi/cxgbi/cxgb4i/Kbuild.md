---
sidebar_position: 3
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/cxgbi/cxgb4i/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
ccflags-y += -I$(srctree)/drivers/net/ethernet/chelsio/cxgb4
ccflags-y += -I$(srctree)/drivers/net/ethernet/chelsio/libcxgb

obj-$(CONFIG_SCSI_CXGB4_ISCSI) += cxgb4i.o

```
