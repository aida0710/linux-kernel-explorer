---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/mpi3mr/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-or-later

config SCSI_MPI3MR
	tristate "Broadcom MPI3 Storage Controller Device Driver"
	depends on PCI && SCSI
	select BLK_DEV_BSGLIB
	select SCSI_SAS_ATTRS
	help
	MPI3 based Storage & RAID Controllers Driver.

```
