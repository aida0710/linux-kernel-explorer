---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/target/loopback/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config LOOPBACK_TARGET
	tristate "TCM Virtual SAS target and Linux/SCSI LDD fabric loopback module"
	depends on SCSI
	help
	  Say Y here to enable the TCM Virtual SAS target and Linux/SCSI LLD
	  fabric loopback module.

```
