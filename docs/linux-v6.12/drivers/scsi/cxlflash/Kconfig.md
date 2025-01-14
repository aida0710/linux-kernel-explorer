---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/cxlflash/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# IBM CXL-attached Flash Accelerator SCSI Driver
#

config CXLFLASH
	tristate "Support for IBM CAPI Flash"
	depends on PCI && SCSI && (CXL || OCXL) && EEH
	select IRQ_POLL
	default m
	help
	  Allows CAPI Accelerated IO to Flash
	  If unsure, say N.

```
