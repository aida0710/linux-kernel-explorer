---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/elx/Kconfig`

### コンテンツ

```txt
config SCSI_EFCT
	tristate "Emulex Fibre Channel Target"
	depends on PCI && SCSI
	depends on TARGET_CORE
	depends on SCSI_FC_ATTRS
	select CRC_T10DIF
	help
	  The efct driver provides enhanced SCSI Target Mode
	  support for specific SLI-4 adapters.

```
