---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/qla4xxx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SCSI_QLA_ISCSI
	tristate "QLogic ISP4XXX and ISP82XX host adapter family support"
	depends on PCI && SCSI && NET
	select SCSI_ISCSI_ATTRS
	select ISCSI_BOOT_SYSFS
	help
	This driver supports the QLogic 40xx (ISP4XXX), 8022 (ISP82XX)
	and 8032 (ISP83XX) iSCSI host adapter family.

```
