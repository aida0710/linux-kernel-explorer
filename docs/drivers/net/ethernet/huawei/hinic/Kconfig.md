---
sidebar_position: 41
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/huawei/hinic/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Huawei driver configuration
#

config HINIC
	tristate "Huawei Intelligent PCIE Network Interface Card"
	depends on (PCI_MSI && (X86 || ARM64))
	select NET_DEVLINK
	help
	  This driver supports HiNIC PCIE Ethernet cards.
	  To compile this driver as part of the kernel, choose Y here.
	  If unsure, choose N.
	  The default is compiled as module.

```
