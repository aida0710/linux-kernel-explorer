---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/qedf/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config QEDF
	tristate "QLogic QEDF 25/40/100Gb FCoE Initiator Driver Support"
	depends on PCI && SCSI
	depends on QED
        depends on LIBFC
        depends on LIBFCOE
	select QED_LL2
	select QED_FCOE
	help
	This driver supports FCoE offload for the QLogic FastLinQ
	41000 Series Converged Network Adapters.

```
