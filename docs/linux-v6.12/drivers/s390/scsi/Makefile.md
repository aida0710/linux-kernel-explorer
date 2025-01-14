---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/s390/scsi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the S/390 specific device drivers
#

zfcp-objs := zfcp_aux.o zfcp_ccw.o zfcp_dbf.o zfcp_erp.o \
	     zfcp_fc.o zfcp_fsf.o zfcp_qdio.o zfcp_scsi.o zfcp_sysfs.o \
	     zfcp_unit.o zfcp_diag.o

obj-$(CONFIG_ZFCP) += zfcp.o

```
